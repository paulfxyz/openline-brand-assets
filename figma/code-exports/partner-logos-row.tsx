import svgPaths from "./svg-24yhx66f7u";
import imgXLogo2023OriginalSvg1 from "figma:asset/4fe9942961744fa897fc2c5e9d923c5b07c34cbe.png";
import imgAdobeCreativeCloudRainbowIconSvg1 from "figma:asset/a6892dfb69c7bb7c5d80d613545417e9372af54f.png";
import imgTheEconomistLogoSvg1 from "figma:asset/9355981c5525f036dd58400f8ae49c0104fb9801.png";
import imgYouTubePremiumLogoSvg1 from "figma:asset/d98b7e1f2df88b6b0900d7b7366d72022a726813.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[75.55%_22.35%_0_48.19%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 398 332">
          <path d={svgPaths.p17491a00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[319px] left-[44px] top-[1032px] w-[318px]" data-name="X_logo_2023_original.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgXLogo2023OriginalSvg1} />
      </div>
      <div className="absolute h-[488px] left-0 top-0 w-[500px]" data-name="Adobe_Creative_Cloud_rainbow_icon.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAdobeCreativeCloudRainbowIconSvg1} />
      </div>
      <div className="absolute h-[395px] left-[568px] top-[46px] w-[783px]" data-name="The_Economist_Logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTheEconomistLogoSvg1} />
      </div>
      <div className="absolute h-[161px] left-[568px] top-[569px] w-[783px]" data-name="YouTube_Premium_logo.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgYouTubePremiumLogoSvg1} />
      </div>
    </div>
  );
}