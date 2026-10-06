"""Validate the prepared baseline. Native device QA is a separate release gate."""
from pathlib import Path
from PIL import Image
import json
import zipfile

root = Path(__file__).resolve().parents[1]
catalog = root / "icon-package/ios/AppIcon.appiconset"
rows = json.loads((catalog / "Contents.json").read_text())["images"]
for row in rows:
    image = Image.open(catalog / row["filename"])
    expected = round(float(row["size"].split("x")[0]) * int(row["scale"][0]))
    assert image.size == (expected, expected), row["filename"]
    assert image.mode == "RGB", row["filename"]

play = root / "icon-package/android/google-play-icon-512.png"
image = Image.open(play)
assert image.size == (512, 512) and image.mode == "RGBA"
assert image.getchannel("A").getextrema() == (255, 255)
assert play.stat().st_size < 1024 * 1024

for density, scale in [("mdpi", 1), ("hdpi", 1.5), ("xhdpi", 2),
                       ("xxhdpi", 3), ("xxxhdpi", 4)]:
    for name in ["ic_launcher_foreground.png", "ic_launcher_monochrome.png"]:
        candidate = Image.open(root / f"icon-package/android/res/mipmap-{density}/{name}")
        fallback = Image.open(root / f"icon-package/android/48dp-reference/mipmap-{density}/{name}")
        assert candidate.size == fallback.size == (round(108 * scale), round(108 * scale))
        bounds = candidate.getchannel("A").getbbox()
        old_bounds = fallback.getchannel("A").getbbox()
        assert abs((bounds[2] - bounds[0]) - round(39.6 * scale)) <= 1
        assert abs((old_bounds[2] - old_bounds[0]) - round(48 * scale)) <= 1

for prefix, size in [("ios", (1320, 2868)), ("android", (1080, 1920))]:
    for number in range(1, 7):
        image = Image.open(root / f"public/assets/{prefix}-{number:02d}.png")
        assert image.size == size and image.mode == "RGB"
image = Image.open(root / "public/assets/google-feature.png")
assert image.size == (1024, 500) and image.mode == "RGB"

for file in (root / "public/downloads").glob("*.zip"):
    with zipfile.ZipFile(file) as archive:
        assert archive.testzip() is None, file.name
        assert all(not name.startswith("/") and ".." not in Path(name).parts
                   for name in archive.namelist()), file.name

print(f"PASS: {len(rows)} Apple catalog entries; Play icon; 13 RGB artworks; ZIP integrity.")
