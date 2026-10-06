from pathlib import Path
from PIL import Image
import zipfile, json, hashlib
root=Path(__file__).resolve().parents[1]
assets=root/'public/assets';downloads=root/'public/downloads'
manifest=[]
for prefix,size in [('ios',(1320,2868)),('android',(1080,1920))]:
    for i in range(1,7):
        p=assets/f'{prefix}-{i:02d}.png'
        im=Image.open(p).convert('RGB');assert im.size==size
        im.save(p,optimize=True)
        manifest.append({'file':p.name,'width':size[0],'height':size[1],'mode':'RGB','status':'design-reference-not-native-capture','sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
p=assets/'google-feature.png';im=Image.open(p).convert('RGB');assert im.size==(1024,500);im.save(p,optimize=True)
manifest.append({'file':p.name,'width':1024,'height':500,'mode':'RGB','status':'design-reference-not-native-capture','sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
(downloads/'asset-manifest.json').write_text(json.dumps(manifest,indent=2))
with zipfile.ZipFile(downloads/'openline-store-artwork.zip','w',zipfile.ZIP_DEFLATED) as z:
    for row in manifest:z.write(assets/row['file'],row['file'])
    z.write(downloads/'asset-manifest.json','asset-manifest.json')
    z.writestr('README.md','# Openline store artwork: review candidates\n\nThese images are rendered from React design-reference screens, NOT the native release binaries. Keep the review footer until accurate native screenshots and all copy are approved. Mock prices/data are illustrative. No iPad/tablet set is included; native device support must first be confirmed.\n\nApple: https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications\nGoogle: https://support.google.com/googleplay/android-developer/answer/9866151?hl=en\n')
with zipfile.ZipFile(downloads/'openline-launch-kit.zip','w',zipfile.ZIP_DEFLATED) as z:
    for name in ['openline-native-icons.zip','openline-store-artwork.zip','openline-store-copy.md','openline-store-settings.md','openline-release-checklist.md','openline-launch-workspace.json','store-requirements.md','competitor-review.md','asset-manifest.json']:
        z.write(downloads/name,name)
    z.write(root/'README.md','README.md')
    z.write(root/'sources.json','official-sources.json')
print('Validated 12 RGB store compositions and feature graphic; packaged launch kit.')
