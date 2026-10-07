"""Deterministic derivatives and review archives. Competitor assets excluded."""
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import json,zipfile,hashlib
root=Path(__file__).resolve().parents[1]
public=root/'public';out=public/'downloads'
config=json.loads((public/'series.json').read_text())
font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',24)
small=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',16)
manifest=[]
sheet=Image.new('RGB',(1560,5*630),'#f3f1ed')
draw=ImageDraw.Draw(sheet)
readme="""# Openline screenshot directions / Revision 04

Five creative options; none approved for submission. The final 43.5% icon is unchanged.
Each series contains six iPhone PNGs (1320 x 2868) and six Android PNGs (1080 x 1920).

These are design references rendered from the supplied React UI, not native release screenshots.
Keep the design-reference footer during review. Replace the captures with accurate native captures,
verify every visible price, coverage, plan, feature and usage value, then recompose and approve.
No tablets, localization or native store upload has been completed.
Postcard uses original AI-generated illustrative travel backgrounds, not a real location guarantee.

Competitor images belong to their respective owners and are NOT included in these archives.
The studio provides source-linked comparisons; do not use competitor imagery in an Openline listing.

Use Save workspace in the studio to preserve your shortlist and notes. A shortlist is not final approval.
"""
(out/'five-series-handoff.md').write_text(readme)
for row,s in enumerate(config['series']):
    folder=public/'series'/s['id']
    draw.text((24,row*630+18),f"{s['number']}  {s['name']}",fill='#171717',font=font)
    draw.text((24,row*630+52),s['description'],fill='#65605b',font=small)
    for p in sorted(folder.glob('*.png')):
        im=Image.open(p).convert('RGB')
        expected=(1320,2868) if p.name.startswith('ios') else (1080,1920)
        assert im.size==expected
        im.save(p,optimize=True)
        thumb=im.copy();thumb.thumbnail((420,913));thumb.save(p.with_suffix('.webp'),quality=86)
        manifest.append({'series':s['id'],'file':p.name,'width':im.width,'height':im.height,'mode':'RGB','status':config['status'],'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
    for n in range(6):
        im=Image.open(folder/f'ios-{n+1:02d}.png');im.thumbnail((238,518))
        sheet.paste(im,(24+n*256,row*630+94))
    series_sheet=sheet.crop((0,row*630,1560,(row+1)*630))
    series_sheet.save(folder/'contact-sheet.jpg',quality=90)
    with zipfile.ZipFile(out/f"openline-series-{s['id']}.zip",'w',zipfile.ZIP_DEFLATED) as z:
        for p in sorted(folder.glob('*.png')):z.write(p,p.name)
        z.writestr('README.md',readme+f"\n## This direction: {s['name']}\n\n{s['intent']}\n")
        z.writestr('headlines.json',json.dumps(s,indent=2))
        z.write(folder/'contact-sheet.jpg','contact-sheet.jpg')
sheet.save(public/'series/five-directions-contact-sheet.jpg',quality=92)
(out/'five-series-manifest.json').write_text(json.dumps(manifest,indent=2))
with zipfile.ZipFile(out/'openline-five-series.zip','w',zipfile.ZIP_DEFLATED) as z:
    for s in config['series']:z.write(out/f"openline-series-{s['id']}.zip",f"{s['number']}-{s['id']}.zip")
    z.write(out/'five-series-manifest.json','asset-manifest.json')
    z.write(out/'five-series-handoff.md','README.md')
    z.write(public/'series/five-directions-contact-sheet.jpg','five-directions-contact-sheet.jpg')
with zipfile.ZipFile(out/'openline-five-series-sources.zip','w',zipfile.ZIP_DEFLATED) as z:
    for name in ['series.json','artwork.json','render-series.html']:z.write(public/name,'public/'+name)
    for p in (public/'fonts').rglob('*'):
        if p.is_file():z.write(p,'public/fonts/'+str(p.relative_to(public/'fonts')))
    for p in sorted((public/'assets').glob('screen-*.png')):z.write(p,'public/assets/'+p.name)
    for name in ['mark.png','travel-coast.webp','travel-city.webp']:z.write(public/'assets'/name,'public/assets/'+name)
    z.write(root/'scripts/render_series.mjs','scripts/render_series.mjs')
    z.write(root/'scripts/package_series.py','scripts/package_series.py')
    z.writestr('package.json',json.dumps({'name':'openline-five-series-sources','private':True,'type':'module','scripts':{'serve':'vite public --host 127.0.0.1 --port 5173','render':'node scripts/render_series.mjs'},'devDependencies':{'vite':'6.4.3','playwright':'^1.63.0'}},indent=2))
    z.writestr('README.md',readme+'\n## Rebuild\n\nRun `npm install`, `npx playwright install chromium`, then `npm run serve`. In a second terminal run `npm run render`. Edit public/series.json for copy and public/render-series.html for layout. To build archives, install Pillow and run scripts/package_series.py from the source root. The packaging step also needs a system DejaVuSans font.\n')
print(f'Validated and packaged {len(manifest)} RGB compositions across five unapproved directions.')
