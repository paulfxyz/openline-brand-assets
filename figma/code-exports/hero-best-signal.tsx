import svgPaths from "./svg-tu6za81yjd";
import imgGroup2 from "figma:asset/c82b8483a7df83fc4d66306b00545a7d88631dba.png";

function Badge() {
  return (
    <div className="absolute bg-[#ff5314] h-[26px] left-[502.44px] rounded-[1.67772e+07px] top-0 w-[147.117px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center overflow-clip px-[17px] py-[5px] relative rounded-[inherit] w-[147.117px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white whitespace-pre">Global Connectivity</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[71px] items-start left-[801.37px] top-0 w-[304px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[60px] not-italic relative shrink-0 text-[#ff5314] text-[60px] text-center text-nowrap tracking-[-1.2363px] whitespace-pre">Best Signal</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[47px] top-0">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[60px] left-[415.5px] not-italic text-[60px] text-center text-neutral-900 text-nowrap top-[0.5px] tracking-[-1.2363px] translate-x-[-50%] whitespace-pre">eSIMs That Always Get the</p>
      <Text />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[120px] left-0 top-[42px] w-[1152px]" data-name="Heading 1">
      <Group1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[60px] left-1/2 not-italic text-[60px] text-center text-neutral-900 top-[61px] tracking-[-1.2363px] translate-x-[-50%] w-[720px]">— At the Lowest Price</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[84px] leading-[28px] left-[192px] not-italic text-[20px] text-center text-neutral-500 top-[186px] tracking-[-0.4492px] w-[768px]" data-name="Paragraph">
      <p className="absolute left-[384.18px] text-nowrap top-0 translate-x-[-50%] whitespace-pre">Instant data in 190+ countries. No roaming bills. No SIM cards. No airport chaos.</p>
      <p className="absolute left-[384.5px] top-[28px] translate-x-[-50%] w-[915px]">Openline automatically switches between multiple tier-1 networks — so you always stay connected.</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute h-[56px] left-0 rounded-[8px] top-0 w-[672px]" data-name="Input">
      <div className="box-border content-stretch flex h-[56px] items-center overflow-clip pl-[48px] pr-[96px] py-[4px] relative rounded-[inherit] w-[672px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Where are you going? (e.g., Japan, Spain, USA...)</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M17.5 17.5L13.8833 13.8833" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#ff5314] box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center left-[585.97px] opacity-50 px-[16px] py-[8px] rounded-[8px] top-[8px] w-[78.031px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.1504px] whitespace-pre">Search</p>
    </div>
  );
}

function CountrySearchInput() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="CountrySearchInput">
      <Input />
      <Icon />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[20px] left-[289.47px] top-0 w-[129.008px]" data-name="Button">
      <p className="[text-underline-position:from-font] absolute decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-500 text-nowrap top-[0.5px] tracking-[-0.1504px] underline whitespace-pre">browse all countries</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[271.52px] not-italic text-[14px] text-center text-neutral-500 top-[0.5px] tracking-[-0.1504px] translate-x-[-50%] w-[36px]">→ Or</p>
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[88px] items-start left-[240px] top-[286px] w-[672px]" data-name="Container">
      <CountrySearchInput />
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[560px] relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Heading />
      <Paragraph />
      <Container />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%-15px)] top-[calc(50%+9.563px)] translate-x-[-50%] translate-y-[-50%]" data-name="Group">
      <div className="absolute h-[436px] left-[calc(50%-15px)] top-[calc(50%+9.563px)] translate-x-[-50%] translate-y-[-50%] w-[1006px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup2} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[316.875px] left-[-6px] top-[523px] w-[1350px]" data-name="Container">
      <Group />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p112fd400} id="Vector" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p20fd5380} id="Vector_2" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pdfd7e00} id="Vector_3" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pdff5a60} id="Vector_4" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 12V8" id="Vector_5" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,83,20,0.1)] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 top-0 tracking-[-0.3125px] w-[184px]">Powered by multiple Tier-1 networks</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_1] bg-white relative rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-0 relative size-full">
          <Container3 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,83,20,0.1)] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[163.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[163.5px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">1M+ travellers covered</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_2] bg-white relative rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-[16px] pr-0 py-0 relative size-full">
          <Container5 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 12L11 14L15 10" id="Vector_2" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(255,83,20,0.1)] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 top-[-0.5px] tracking-[-0.3125px] w-[133px]">No passport / KYC required</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_3] bg-white relative rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[16px] py-0 relative size-full">
          <Container7 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b8b3180} id="Vector" stroke="var(--stroke-0, #FF5314)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,83,20,0.1)] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[164.695px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[164.695px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Activate in 30 seconds</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:1_/_4] bg-white relative rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-[16px] pr-0 py-0 relative size-full">
          <Container9 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[80px] left-1/2 top-[748px] translate-x-[-50%] w-[1152px]" data-name="Container">
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex flex-col from-[#fff5f0] h-[944px] items-start overflow-clip pb-0 pt-[91px] px-[96px] relative shrink-0 to-[#ffffff] w-[1344px]" data-name="Hero">
      <Container1 />
      <Container2 />
      <Container11 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[59px] items-center relative size-full">
      <Hero />
    </div>
  );
}