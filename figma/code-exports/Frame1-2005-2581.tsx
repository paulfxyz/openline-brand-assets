import img1683000849OrangeTelecomLogo from "figma:asset/85acd46c67e16613c1a29b6f95e3370774fab0e3.png";
import img1361922 from "figma:asset/82e9543e86c495076012eff40056f2bdda2048e7.png";
import imgVodafoneLogoBrandlogosNet9Etir from "figma:asset/f691b8853c6a4f2537c723f8cdc6f39f8ae63b73.png";
import imgAtTLogo2016Svg from "figma:asset/07ee38f5f731bee0d9adb052433f1c1a7871f863.png";
import imgVerizon2024Svg from "figma:asset/a8e04251bdeccf07527c47aab94c00882e9bf5c8.png";
import imgTMobileNewLogoPrimaryRgbMOnKTransparent1 from "figma:asset/f7682c21a2157c090e9fe8271c5e6389384c7b09.png";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative size-full">
      <div className="h-[31px] relative shrink-0 w-[100px]" data-name="1683000849orange-telecom-logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1683000849OrangeTelecomLogo} />
      </div>
      <div className="h-[50px] relative shrink-0 w-[100px]" data-name="1361922">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1361922} />
      </div>
      <div className="h-[25px] relative shrink-0 w-[100px]" data-name="vodafone-logo_brandlogos.net_9etir">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVodafoneLogoBrandlogosNet9Etir} />
      </div>
      <div className="h-[41px] relative shrink-0 w-[100px]" data-name="AT&T_logo_2016.svg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAtTLogo2016Svg} />
      </div>
      <div className="h-[32px] relative shrink-0 w-[100px]" data-name="Verizon_2024.svg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVerizon2024Svg} />
      </div>
      <div className="h-[24px] relative shrink-0 w-[100px]" data-name="T-Mobile_New_Logo_Primary_RGB_M-on-K_Transparent 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTMobileNewLogoPrimaryRgbMOnKTransparent1} />
      </div>
    </div>
  );
}