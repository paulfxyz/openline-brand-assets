import svgPaths from "./svg-a6n79xyfkq";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3, imgGroup4 } from "./svg-vg2zz";

function SailyLogoSvg() {
  return (
    <div className="h-[42.96px] relative shrink-0 w-[100px]" data-name="saily-logo.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 43">
        <g clipPath="url(#clip0_24_3794)" id="saily-logo.svg">
          <path d={svgPaths.p1c5b280} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p18fa9f80} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p3a248700} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p3e9e0b00} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p1c18bf00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.pd552d70} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p1f42ee00} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_24_3794">
            <rect fill="white" height="42.9603" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SailyLogoSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[42.95px] items-center justify-center overflow-clip relative shrink-0 w-[100px]" data-name="saily-logo.svg fill">
      <SailyLogoSvg />
    </div>
  );
}

function PictureSailyLogo() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[100px] overflow-clip relative shrink-0 w-[100px]" data-name="Picture → saily logo">
      <SailyLogoSvgFill />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[108px_32.143px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 33">
        <g id="Group">
          <path d={svgPaths.pe1f3770} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          <path d={svgPaths.pa8fb100} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2f856f00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p18b01800} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pa2be80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p221729c0} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p7067b00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3cf10bc0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p3e788470} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.pe499200} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p2e77ee00} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p2cbb300} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p381d0500} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p3f08600} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p1f7e6600} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.pa1f2c00} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p401b700} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.pd4ecf00} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p2c229ca0} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p23ba6dc0} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p4a37300} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p1f0c9c00} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.p2d14c900} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p178ddd80} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p1eacda70} fill="var(--fill-0, white)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function AppStoreSvg() {
  return (
    <div className="h-[32.143px] overflow-clip relative shrink-0 w-[108px]" data-name="app-store.svg">
      <ClipPathGroup />
    </div>
  );
}

function AppStoreSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[32.14px] items-center justify-center overflow-clip relative shrink-0 w-[108px]" data-name="app-store.svg fill">
      <AppStoreSvg />
    </div>
  );
}

function LinkPictureAppStore() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[108px] overflow-clip relative shrink-0 w-[108px]" data-name="Link → Picture → app store">
      <AppStoreSvgFill />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <LinkPictureAppStore />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[108px_32.143px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 33">
        <g id="Group">
          <path d={svgPaths.pe1f3770} fill="var(--fill-0, #A6A6A6)" id="Vector" />
          <path d={svgPaths.pa8fb100} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1ff4ae80} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.128571" />
          <path d={svgPaths.p18049380} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.128571" />
          <path d={svgPaths.p1aff700} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.128571" />
          <path d={svgPaths.p31dc00} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.128571" />
          <path d={svgPaths.pf98db80} fill="var(--fill-0, white)" id="Vector_7" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.128571" />
          <path d={svgPaths.p12dbea00} fill="var(--fill-0, white)" id="Vector_8" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.128571" />
          <path d={svgPaths.p16c79b00} fill="var(--fill-0, white)" id="Vector_9" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.128571" />
          <path d={svgPaths.pdfb6080} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p1e05cc80} fill="var(--fill-0, #EA4335)" id="Vector_11" />
          <path d={svgPaths.p2d487e00} fill="var(--fill-0, #FBBC04)" id="Vector_12" />
          <path d={svgPaths.p1ff95380} fill="var(--fill-0, #4285F4)" id="Vector_13" />
          <path d={svgPaths.p4175f00} fill="var(--fill-0, #34A853)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function GooglePlaySvg() {
  return (
    <div className="h-[32.143px] overflow-clip relative shrink-0 w-[108px]" data-name="google-play.svg">
      <ClipPathGroup1 />
    </div>
  );
}

function GooglePlaySvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[32.14px] items-center justify-center overflow-clip relative shrink-0 w-[108px]" data-name="google-play.svg fill">
      <GooglePlaySvg />
    </div>
  );
}

function LinkPictureGooglePlay() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[108px] overflow-clip relative shrink-0 w-[108px]" data-name="Link → Picture → google play">
      <GooglePlaySvgFill />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <LinkPictureGooglePlay />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-wrap gap-[12px] items-start justify-center relative shrink-0" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="box-border content-start flex flex-wrap items-start justify-between pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <PictureSailyLogo />
      <Container2 />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Separator">
      <div aria-hidden="true" className="absolute border-[#e2e2e4] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[21px] whitespace-pre">Popular Destinations</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Button">
      <Container4 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Mexico</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">United States</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">India</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">China</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Australia</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Dominican Republic</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">United Arab Emirates</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Japan</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Hong Kong</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Thailand</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.8px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[208px]" data-name="Container">
      <Button />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[21px] whitespace-pre">Saily</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Button">
      <Container8 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Business</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">About Us</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Careers</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Refer a Friend</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Become an Affiliate</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Student Discount</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[11.8px] items-start relative shrink-0 w-full" data-name="Container">
      <Link10 />
      <Link11 />
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip pb-[132px] pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[208px]" data-name="Container">
      <Button1 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[21px] whitespace-pre">eSIM</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Button">
      <Container12 />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">What is an eSIM</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Supported Devices</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Download App</p>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Security Features</p>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Data Usage Calculator</p>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Blog</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[11.8px] items-start relative shrink-0 w-full" data-name="Container">
      <Link16 />
      <Link17 />
      <Link18 />
      <Link19 />
      <Link20 />
      <Link21 />
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip pb-[132px] pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[208px]" data-name="Container">
      <Button2 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[21px] whitespace-pre">Help</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Button">
      <Container16 />
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Help Center</p>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Getting Started</p>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Plans and Payments</p>
      </div>
    </div>
  );
}

function Link25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">Troubleshooting</p>
      </div>
    </div>
  );
}

function Link26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#4d4e56] text-[14px]">
        <p className="leading-[21px]">FAQ</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[11.8px] items-start relative shrink-0 w-full" data-name="Container">
      <Link22 />
      <Link23 />
      <Link24 />
      <Link25 />
      <Link26 />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip pb-[165px] pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[208px]" data-name="Container">
      <Button3 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[21px] whitespace-pre">Follow Us</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Button">
      <Container20 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[-2.75%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[16px_16px] right-0 top-[3.13%]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p3f5b7d00} fill="var(--fill-0, #6C6D75)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute bottom-[-3.13%] contents left-0 right-0 top-[3.13%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function FacebookSvg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="facebook.svg">
      <ClipPathGroup2 />
    </div>
  );
}

function FacebookSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="facebook.svg fill">
      <FacebookSvg />
    </div>
  );
}

function PictureFacebook() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[16px] overflow-clip relative shrink-0 w-[16px]" data-name="Picture → facebook">
      <FacebookSvgFill />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <PictureFacebook />
    </div>
  );
}

function Link27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <Container21 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4e56] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Facebook</p>
      </div>
    </div>
  );
}

function XTwitterSvg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="x-twitter.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="x-twitter.svg">
          <path d={svgPaths.p6d7ea00} fill="var(--fill-0, #6C6D75)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function XTwitterSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="x-twitter.svg fill">
      <XTwitterSvg />
    </div>
  );
}

function PictureXTwitter() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[16px] overflow-clip relative shrink-0 w-[16px]" data-name="Picture → x twitter">
      <XTwitterSvgFill />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <PictureXTwitter />
    </div>
  );
}

function Link28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <Container22 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4e56] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Twitter (now X)</p>
      </div>
    </div>
  );
}

function LinkedinSvg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="linkedin.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="linkedin.svg">
          <path d={svgPaths.p33a48300} fill="var(--fill-0, #6C6D75)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkedinSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="linkedin.svg fill">
      <LinkedinSvg />
    </div>
  );
}

function PictureLinkedin() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[16px] overflow-clip relative shrink-0 w-[16px]" data-name="Picture → linkedin">
      <LinkedinSvgFill />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <PictureLinkedin />
    </div>
  );
}

function Link29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <Container23 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4e56] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">LinkedIn</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[19.79%_-1.18%_13.54%_6.35%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.416px_-2.666px] mask-size-[16px_16px]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
        <g id="Group">
          <path d={svgPaths.p28ac0900} fill="var(--fill-0, #6C6D75)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-[3.13%_-3.75%_-3.13%_3.75%]" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function YoutubeSvg() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="youtube.svg">
      <ClipPathGroup3 />
    </div>
  );
}

function YoutubeSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="youtube.svg fill">
      <YoutubeSvg />
    </div>
  );
}

function PictureYoutube() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[16px] overflow-clip relative shrink-0 w-[16px]" data-name="Picture → youtube">
      <YoutubeSvgFill />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <PictureYoutube />
    </div>
  );
}

function Link30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <Container24 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4e56] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">YouTube</p>
      </div>
    </div>
  );
}

function InstagramSvg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="instagram.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="instagram.svg">
          <path d={svgPaths.pe25c500} fill="var(--fill-0, #6C6D75)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function InstagramSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[16px]" data-name="instagram.svg fill">
      <InstagramSvg />
    </div>
  );
}

function PictureInstagram() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[16px] overflow-clip relative shrink-0 w-[16px]" data-name="Picture → instagram">
      <InstagramSvgFill />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <PictureInstagram />
    </div>
  );
}

function Link31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <Container25 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4e56] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Instagram</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute bottom-[2.94%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[16px_16px] right-0 top-[2.94%]" data-name="Group" style={{ maskImage: `url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p33bcf700} fill="var(--fill-0, #6C6D75)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute bottom-[2.94%] contents left-0 right-0 top-[2.94%]" data-name="Clip path group">
      <Group4 />
    </div>
  );
}

function RedditSvg() {
  return (
    <div className="h-[17px] overflow-clip relative shrink-0 w-[16px]" data-name="Reddit.svg">
      <ClipPathGroup4 />
    </div>
  );
}

function RedditSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[17px] items-center justify-center overflow-clip relative shrink-0 w-[16px]" data-name="Reddit.svg fill">
      <RedditSvg />
    </div>
  );
}

function PictureReddit() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[16px] overflow-clip relative shrink-0 w-[16px]" data-name="Picture → Reddit">
      <RedditSvgFill />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <PictureReddit />
    </div>
  );
}

function Link32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Link">
      <Container26 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4d4e56] text-[14px] text-nowrap">
        <p className="leading-[21px] whitespace-pre">Reddit</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[11.8px] items-start relative shrink-0 w-full" data-name="Container">
      <Link27 />
      <Link28 />
      <Link29 />
      <Link30 />
      <Link31 />
      <Link32 />
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip pb-[132px] pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[208px]" data-name="Container">
      <Button4 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-start justify-center pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container11 />
      <Container15 />
      <Container19 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c6d75] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">2025 Saily. All rights reserved.</p>
      </div>
    </div>
  );
}

function Link33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c6d75] text-[12px] text-nowrap">
        <p className="[text-underline-position:from-font] decoration-solid leading-[18px] underline whitespace-pre">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c6d75] text-[12px] text-nowrap">
        <p className="[text-underline-position:from-font] decoration-solid leading-[18px] underline whitespace-pre">Terms of Service</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6c6d75] text-[12px] text-center text-nowrap">
        <p className="[text-underline-position:from-font] decoration-solid leading-[18px] underline whitespace-pre">Cookie Preference</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link33 />
      <Link34 />
      <Button5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center relative self-stretch shrink-0" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-0 left-[1.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[37.489px_24px] right-[0.32%] top-0" data-name="Group" style={{ maskImage: `url('${imgGroup2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g id="Group">
          <path d={svgPaths.p3a6c1600} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pd260000} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p465d500} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p33563860} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p23abbf0} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p1136ce00} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p3d30db80} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute bottom-0 contents left-[1.03%] right-[0.32%] top-0" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function ApplePaySvg() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[38px]" data-name="apple-pay.svg">
      <ClipPathGroup5 />
    </div>
  );
}

function ApplePaySvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[38px]" data-name="apple-pay.svg fill">
      <ApplePaySvg />
    </div>
  );
}

function PictureApplePay() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[38px] overflow-clip relative shrink-0 w-[38px]" data-name="Picture → apple pay">
      <ApplePaySvgFill />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <PictureApplePay />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-0 left-[1.87%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.018px_0px] mask-size-[45.12px_24px] right-[0.04%] top-0" data-name="Group" style={{ maskImage: `url('${imgGroup3}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 24">
        <g id="Group">
          <path d={svgPaths.p27f0a400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p311d3fc0} fill="var(--fill-0, #3C4043)" id="Vector_2" />
          <path d={svgPaths.p3b61ef00} fill="var(--fill-0, #3C4043)" id="Vector_3" />
          <path d={svgPaths.pfb95280} fill="var(--fill-0, #3C4043)" id="Vector_4" />
          <path d={svgPaths.p27a20f00} fill="var(--fill-0, #3C4043)" id="Vector_5" />
          <path d={svgPaths.p145ec000} fill="var(--fill-0, #4285F4)" id="Vector_6" />
          <path d={svgPaths.pc7de880} fill="var(--fill-0, #34A853)" id="Vector_7" />
          <path d={svgPaths.p3fe60870} fill="var(--fill-0, #FABB05)" id="Vector_8" />
          <path d={svgPaths.p140fff80} fill="var(--fill-0, #E94235)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute bottom-0 contents left-[1.91%] right-0 top-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function GooglePaySvg() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[46px]" data-name="google-pay.svg">
      <ClipPathGroup6 />
    </div>
  );
}

function GooglePaySvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[46px]" data-name="google-pay.svg fill">
      <GooglePaySvg />
    </div>
  );
}

function PictureGooglePay() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[46px] overflow-clip relative shrink-0 w-[46px]" data-name="Picture → google pay">
      <GooglePaySvgFill />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <PictureGooglePay />
    </div>
  );
}

function VisaSvg() {
  return (
    <div className="h-[24px] relative shrink-0 w-[36px]" data-name="visa.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 24">
        <g id="visa.svg">
          <path clipRule="evenodd" d={svgPaths.p2e7c7800} fill="var(--fill-0, #1A1F71)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VisaSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[36px]" data-name="visa.svg fill">
      <VisaSvg />
    </div>
  );
}

function PictureVisa() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[36px] overflow-clip relative shrink-0 w-[36px]" data-name="Picture → visa">
      <VisaSvgFill />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <PictureVisa />
    </div>
  );
}

function MastercardSvg() {
  return (
    <div className="h-[24px] relative shrink-0 w-[29px]" data-name="mastercard.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 24">
        <g id="mastercard.svg">
          <path clipRule="evenodd" d={svgPaths.p2df2d100} fill="var(--fill-0, #F22F12)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p18725a00} fill="var(--fill-0, #F79F1A)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p39e02400} fill="var(--fill-0, #FF5F01)" fillRule="evenodd" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function MastercardSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[29px]" data-name="mastercard.svg fill">
      <MastercardSvg />
    </div>
  );
}

function PictureMastercard() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[29px] overflow-clip relative shrink-0 w-[29px]" data-name="Picture → mastercard">
      <MastercardSvgFill />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <PictureMastercard />
    </div>
  );
}

function AmexSvg() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="amex.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g clipPath="url(#clip0_24_3765)" id="amex.svg">
          <path d={svgPaths.p2c98de00} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.pa7fdca0} fill="var(--fill-0, #006FCF)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_24_3765">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AmexSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[25px]" data-name="amex.svg fill">
      <AmexSvg />
    </div>
  );
}

function PictureAmex() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[25px] overflow-clip relative shrink-0 w-[25px]" data-name="Picture → amex">
      <AmexSvgFill />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <PictureAmex />
    </div>
  );
}

function Component16Svg() {
  return (
    <div className="h-[24px] relative shrink-0 w-[44px]" data-name="16.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 24">
        <g id="16.svg">
          <path clipRule="evenodd" d={svgPaths.p29859d00} fill="var(--fill-0, #201D1C)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p26c9e900} fill="var(--fill-0, #201D1C)" id="Vector_2" />
          <path d={svgPaths.p38521e30} fill="var(--fill-0, #201D1C)" id="Vector_3" />
          <path d={svgPaths.p2ea0ee00} fill="var(--fill-0, #201D1C)" id="Vector_4" />
          <path d={svgPaths.p257b1800} fill="var(--fill-0, #201D1C)" id="Vector_5" />
          <path d={svgPaths.pb81b6f0} fill="var(--fill-0, #201D1C)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p21346c00} fill="var(--fill-0, #201D1C)" fillRule="evenodd" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p20d7fd00} fill="var(--fill-0, #201D1C)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.p3013400} fill="var(--fill-0, #201D1C)" fillRule="evenodd" id="Vector_9" />
          <path clipRule="evenodd" d={svgPaths.p1f4f1800} fill="url(#paint0_linear_24_3809)" fillRule="evenodd" id="Vector_10" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_24_3809" x1="19.5696" x2="19.5696" y1="16.5181" y2="8.80198">
            <stop stopColor="#E0481E" />
            <stop offset="1" stopColor="#F59314" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Component16SvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[44px]" data-name="16.svg fill">
      <Component16Svg />
    </div>
  );
}

function PictureDiscover() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[44px] overflow-clip relative shrink-0 w-[44px]" data-name="Picture → discover">
      <Component16SvgFill />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <PictureDiscover />
    </div>
  );
}

function UnionPaySvg() {
  return (
    <div className="h-[23.385px] relative shrink-0 w-[38px]" data-name="union-pay.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g clipPath="url(#clip0_24_3788)" id="union-pay.svg">
          <path d={svgPaths.p318f8280} fill="var(--fill-0, #E21836)" id="Vector" />
          <path d={svgPaths.p1ab508f1} fill="var(--fill-0, #00447C)" id="Vector_2" />
          <path d={svgPaths.p390b9480} fill="var(--fill-0, #007B84)" id="Vector_3" />
          <path d={svgPaths.p3d633480} fill="var(--fill-0, #FEFEFE)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_24_3788">
            <rect fill="white" height="23.3846" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UnionPaySvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[23.38px] items-center justify-center overflow-clip relative shrink-0 w-[38px]" data-name="union-pay.svg fill">
      <UnionPaySvg />
    </div>
  );
}

function PictureUnionPay() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[38px] overflow-clip relative shrink-0 w-[38px]" data-name="Picture → union pay">
      <UnionPaySvgFill />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <PictureUnionPay />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[0.43%_1.89%_0.43%_1.57%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.1px] mask-size-[30.129px_23.25px]" data-name="Group" style={{ maskImage: `url('${imgGroup4}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 24">
        <g id="Group">
          <path d={svgPaths.p24e77280} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p274d2980} fill="url(#paint0_linear_24_3743)" id="Vector_2" />
          <path d={svgPaths.p2cea3100} fill="url(#paint1_linear_24_3743)" id="Vector_3" />
          <path d={svgPaths.pd5ada80} fill="url(#paint2_linear_24_3743)" id="Vector_4" />
          <path d={svgPaths.p2d986500} fill="url(#paint3_linear_24_3743)" id="Vector_5" />
          <path d={svgPaths.p1e0b3100} fill="url(#paint4_linear_24_3743)" id="Vector_6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_24_3743" x1="20.0646" x2="28.2849" y1="12.8072" y2="12.8072">
            <stop stopColor="#007940" />
            <stop offset="0.2285" stopColor="#00873F" />
            <stop offset="0.7433" stopColor="#40A737" />
            <stop offset="1" stopColor="#5CB531" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_24_3743" x1="20.0645" x2="28.2856" y1="11.5258" y2="11.5258">
            <stop stopColor="#007940" />
            <stop offset="0.2285" stopColor="#00873F" />
            <stop offset="0.7433" stopColor="#40A737" />
            <stop offset="1" stopColor="#5CB531" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_24_3743" x1="20.0644" x2="28.285" y1="10.132" y2="10.132">
            <stop stopColor="#007940" />
            <stop offset="0.2285" stopColor="#00873F" />
            <stop offset="0.7433" stopColor="#40A737" />
            <stop offset="1" stopColor="#5CB531" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_24_3743" x1="1.66054" x2="10.0081" y1="11.5258" y2="11.5258">
            <stop stopColor="#1F286F" />
            <stop offset="0.4751" stopColor="#004E94" />
            <stop offset="0.8261" stopColor="#0066B1" />
            <stop offset="1" stopColor="#006FBC" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_24_3743" x1="10.819" x2="18.9265" y1="11.5258" y2="11.5258">
            <stop stopColor="#6C2C2F" />
            <stop offset="0.1735" stopColor="#882730" />
            <stop offset="0.5731" stopColor="#BE1833" />
            <stop offset="0.8585" stopColor="#DC0436" />
            <stop offset="1" stopColor="#E60039" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div className="absolute bottom-0 contents left-[1.25%] right-[1.56%] top-0" data-name="Clip path group">
      <Group7 />
    </div>
  );
}

function JcbSvg() {
  return (
    <div className="h-[23.25px] overflow-clip relative shrink-0 w-[31px]" data-name="jcb.svg">
      <ClipPathGroup7 />
    </div>
  );
}

function JcbSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[23.25px] items-center justify-center overflow-clip relative shrink-0 w-[31px]" data-name="jcb.svg fill">
      <JcbSvg />
    </div>
  );
}

function PictureJcb() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[31px] overflow-clip relative shrink-0 w-[31px]" data-name="Picture → jcb">
      <JcbSvgFill />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <PictureJcb />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative self-stretch shrink-0" data-name="Container">
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[1168px] px-0 py-[48px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Separator />
      <Container30 />
      <Separator />
      <Container43 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-white relative size-full" data-name="Footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[136px] py-0 relative size-full">
          <Container44 />
        </div>
      </div>
    </div>
  );
}