import img1361922 from "figma:asset/82e9543e86c495076012eff40056f2bdda2048e7.png";
import img1683000849OrangeTelecomLogo from "figma:asset/1f6b5693d543828fd37409bc18d7bdd3cfa3ad8c.png";
import imgAtTLogo2016Svg from "figma:asset/07ee38f5f731bee0d9adb052433f1c1a7871f863.png";
import imgVerizon2024Svg from "figma:asset/47595ffaafe24cc28cf24a281a7d73374144bc87.png";
import imgVodafoneLogoBrandlogosNet9Etir from "figma:asset/e6c6e73a9a0a6613bf77f89a1e767d45cbda61ef.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[32px] left-[155px] top-[5px] w-[111px]" data-name="1361922">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[173.44%] left-0 max-w-none top-[-39.84%] w-full" src={img1361922} />
        </div>
      </div>
      <div className="absolute h-[33px] left-0 top-[5px] w-[111px]" data-name="1683000849orange-telecom-logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[90.83%] left-0 max-w-none top-[4.58%] w-[99.1%]" src={img1683000849OrangeTelecomLogo} />
        </div>
      </div>
      <div className="absolute h-[42px] left-[466px] top-0 w-[100px]" data-name="AT&T_logo_2016.svg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAtTLogo2016Svg} />
      </div>
      <div className="absolute h-[22px] left-[610px] top-[10px] w-[100px]" data-name="Verizon_2024.svg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerizon2024Svg} />
      </div>
      <div className="absolute h-[33px] left-[310px] top-[5px] w-[112px]" data-name="vodafone-logo_brandlogos.net_9etir">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[385.71%] left-[-5.15%] max-w-none top-[-139.29%] w-[111.34%]" src={imgVodafoneLogoBrandlogosNet9Etir} />
        </div>
      </div>
    </div>
  );
}