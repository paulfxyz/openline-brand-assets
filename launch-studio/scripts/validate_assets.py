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
