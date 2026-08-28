import svgPaths from "./svg-epj6gnoxke";
import imgAlipayLogo2020Svg1 from "figma:asset/97a08d2aa9ed1221f93aeca7bc6d20121ed3e7e0.png";
import imgWechatPayLogo1 from "figma:asset/1295aaf1aa3c6e413470efbbd8c9d07c7ac3b67b.png";
import imgBitcoinSvg1 from "figma:asset/f64bf82db37062af6c558481bf68b1272221f183.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        {children}
      </svg>
    </div>
  );
}

function Img3({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Img">{children}</g>
    </Wrapper>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[4.17%_2.63%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
        <path d={svgPaths.pc76d200} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Helper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 38 24" className="block size-full">
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
    </svg>
  );
}

function Img() {
  return (
    <Img3>
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
      <path d={svgPaths.p48b5900} fill="var(--fill-0, #142688)" id="Vector_3" />
    </Img3>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img />
    </div>
  );
}

function Img1() {
  return (
    <Img3>
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
      <path d={svgPaths.p38ddbcf1} fill="var(--fill-0, #EB001B)" id="Vector_3" />
      <path d={svgPaths.p18fa3b80} fill="var(--fill-0, #F79E1B)" id="Vector_4" />
      <path d={svgPaths.p25c08400} fill="var(--fill-0, #FF5F00)" id="Vector_5" />
    </Img3>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img1 />
    </div>
  );
}

function Img2() {
  return (
    <Img3>
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
      <g id="Group 3">
        <path d={svgPaths.p23661d00} fill="var(--fill-0, #006FCF)" id="Vector_3" />
        <path d={svgPaths.p26131440} fill="var(--fill-0, white)" id="Vector_4" />
        <path d={svgPaths.p34830c00} fill="var(--fill-0, #006FCF)" id="Vector_5" />
        <path d={svgPaths.p35366e00} fill="var(--fill-0, #006FCF)" id="Vector_6" />
        <path d={svgPaths.pe4d3600} fill="var(--fill-0, white)" id="Vector_7" />
        <path d={svgPaths.p332fa330} fill="var(--fill-0, #006FCF)" id="Vector_8" />
        <path d={svgPaths.p264d4280} fill="var(--fill-0, #006FCF)" id="Vector_9" />
      </g>
    </Img3>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img2 />
    </div>
  );
}

function Img4() {
  return (
    <Img3>
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
      <g id="Img_2">
        <path d={svgPaths.pd308d80} fill="var(--fill-0, #005B9A)" id="Vector_3" />
        <path d={svgPaths.p2d4faf80} fill="var(--fill-0, #E9292D)" id="Vector_4" />
        <path d={svgPaths.pe0d6e80} fill="var(--fill-0, #0E73B9)" id="Vector_5" />
        <path d={svgPaths.pa5181f0} fill="var(--fill-0, #059DA4)" id="Vector_6" />
        <path d={svgPaths.p30ca0f00} fill="var(--fill-0, white)" id="Vector_7" />
      </g>
    </Img3>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img4 />
    </div>
  );
}

function Img5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]" data-name="Img">
      <Helper />
      <Vector />
      <div className="absolute h-[8px] left-[calc(50%+0.5px)] top-[8px] translate-x-[-50%] w-[31px]" data-name="Alipay_logo_(2020).svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAlipayLogo2020Svg1} />
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img5 />
    </div>
  );
}

function Img6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]" data-name="Img">
      <Helper />
      <Vector />
      <div className="absolute h-[10px] left-1/2 top-[3px] translate-x-[-50%] w-[12px]" data-name="wechat-pay-logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.07%] left-0 max-w-none top-[-0.03%] w-[316.67%]" src={imgWechatPayLogo1} />
        </div>
      </div>
      <div className="absolute h-[12px] left-[calc(50%+0.5px)] top-[11px] translate-x-[-50%] w-[29px]" data-name="wechat-pay-logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.07%] left-[-58.33%] max-w-none top-[-0.03%] w-[158.33%]" src={imgWechatPayLogo1} />
        </div>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img6 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[27.6%_67.09%_34.01%_13.18%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49635 9.2135">
        <g id="Group">
          <path d={svgPaths.p255b0000} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pc1e4e40} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[30.3%_13.42%_24.69%_39.36%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9439 10.8029">
        <g id="Group">
          <path d={svgPaths.p1b020600} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1b08bb00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p214c4400} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[27.6%_13.42%_24.69%_13.18%]" data-name="Group">
      <Group />
      <Group3 />
    </div>
  );
}

function Img7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]" data-name="Img">
      <div className="absolute inset-[0_0.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.4888 23.9998">
          <path d={svgPaths.p2deae000} fill="var(--fill-0, #E4E4E4)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[3.33%_2.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8889 22.4001">
          <path d={svgPaths.p173addc0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group4 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img7 />
    </div>
  );
}

function Img8() {
  return (
    <Img3>
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
      <path d={svgPaths.p23a0a00} fill="var(--fill-0, #5F6368)" id="Vector_3" />
      <path d={svgPaths.p19460580} fill="var(--fill-0, #4285F4)" id="Vector_4" />
      <path d={svgPaths.p27416f0} fill="var(--fill-0, #34A853)" id="Vector_5" />
      <path d={svgPaths.p364a2480} fill="var(--fill-0, #FBBC04)" id="Vector_6" />
      <path d={svgPaths.p3b30d00} fill="var(--fill-0, #EA4335)" id="Vector_7" />
    </Img3>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img8 />
    </div>
  );
}

function Img9() {
  return (
    <Img3>
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
      <path d={svgPaths.p29d6b600} fill="var(--fill-0, #003087)" id="Vector_3" />
      <path d={svgPaths.p9604c00} fill="var(--fill-0, #3086C8)" id="Vector_4" />
      <path d={svgPaths.p3154e900} fill="var(--fill-0, #012169)" id="Vector_5" />
    </Img3>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img9 />
    </div>
  );
}

function Img10() {
  return (
    <Wrapper>
      <g id="Img">
        <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
        <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
        <path d={svgPaths.p37736080} fill="var(--fill-0, #231F20)" id="Vector_3" />
        <path d={svgPaths.p8dd84c0} fill="url(#paint0_linear_8037_797)" id="Vector_4" />
        <path d={svgPaths.p8dd84c0} fill="url(#paint1_linear_8037_797)" id="Vector_5" opacity="0.65" />
        <path d={svgPaths.pc39b000} fill="var(--fill-0, #231F20)" id="Vector_6" />
        <path d={svgPaths.p1b3508c0} fill="var(--fill-0, #231F20)" id="Vector_7" />
        <path d={svgPaths.pe6d5300} fill="var(--fill-0, #F48120)" id="Vector_8" />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8037_797" x1="21.6565" x2="19.6315" y1="12.275" y2="9.10405">
          <stop stopColor="#F89F20" />
          <stop offset="0.25" stopColor="#F79A20" />
          <stop offset="0.533" stopColor="#F68D20" />
          <stop offset="0.62" stopColor="#F58720" />
          <stop offset="0.723" stopColor="#F48120" />
          <stop offset="1" stopColor="#F37521" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_8037_797" x1="21.3375" x2="18.3775" y1="12.232" y2="6.44605">
          <stop stopColor="#F58720" />
          <stop offset="0.359" stopColor="#E16F27" />
          <stop offset="0.703" stopColor="#D4602C" />
          <stop offset="0.982" stopColor="#D05B2E" />
        </linearGradient>
      </defs>
    </Wrapper>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img10 />
    </div>
  );
}

function Img11() {
  return (
    <Img3>
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
      <path d={svgPaths.p361e0470} fill="var(--fill-0, #3086C8)" id="Vector_3" />
    </Img3>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img11 />
    </div>
  );
}

function Img12() {
  return (
    <Wrapper>
      <g id="Group">
        <g id="Group_2">
          <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
          <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <path clipRule="evenodd" d={svgPaths.p2ab66ff0} fill="var(--fill-0, #006EBC)" fillRule="evenodd" id="Vector_3" />
        <path clipRule="evenodd" d={svgPaths.p17cec4b1} fill="var(--fill-0, #F00036)" fillRule="evenodd" id="Vector_4" />
        <path clipRule="evenodd" d={svgPaths.p32033c80} fill="var(--fill-0, #2AB419)" fillRule="evenodd" id="Vector_5" />
        <path d={svgPaths.p125b9f00} fill="var(--fill-0, white)" id="Vector_6" />
      </g>
    </Wrapper>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img12 />
    </div>
  );
}

function Btc() {
  return (
    <div className="absolute h-[5.23px] left-[48.69%] right-[16.17%] top-[calc(50%+0.45px)] translate-y-[-50%]" data-name="BTC">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3538 5.23012">
        <g id="BTC">
          <path d={svgPaths.peb4350} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p2e0acb80} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          <path d={svgPaths.p2a71be60} fill="var(--fill-0, #5B5B5B)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[48.69%] right-[16.17%] top-[calc(50%+0.45px)] translate-y-[-50%]">
      <Btc />
    </div>
  );
}

function Img13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]" data-name="Img">
      <Helper />
      <Vector />
      <Group2 />
      <div className="absolute left-[5px] size-[11px] top-[7px]" data-name="Bitcoin.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBitcoinSvg1} />
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img13 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[19.77%_60.53%_19.77%_15.79%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14.5111">
        <g id="Group 1">
          <path d={svgPaths.p275a3900} fill="var(--fill-0, #8A92B2)" id="Vector" />
          <path d={svgPaths.p36e43400} fill="var(--fill-0, #62688F)" id="Vector_2" />
          <path d={svgPaths.p3fa86030} fill="var(--fill-0, #454A75)" id="Vector_3" />
          <path d={svgPaths.p1e217c80} fill="var(--fill-0, #8A92B2)" id="Vector_4" />
          <path d={svgPaths.p1e845400} fill="var(--fill-0, #62688F)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Eth() {
  return (
    <div className="absolute h-[5.091px] left-[46.06%] right-[19.52%] top-[calc(50%+0.45px)] translate-y-[-50%]" data-name="ETH">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0791 5.09091">
        <g id="ETH">
          <path d={svgPaths.p3bcc17c0} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p3226d780} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          <path d={svgPaths.p11eaf380} fill="var(--fill-0, #5B5B5B)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[15.79%] right-[19.52%] top-[4.74px]">
      <Group1 />
      <Eth />
    </div>
  );
}

function Img14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]" data-name="Img">
      <Helper />
      <Vector />
      <Group5 />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img14 />
    </div>
  );
}

function Usdt() {
  return (
    <div className="absolute h-[5.238px] left-[43.43%] right-[8.25%] top-[calc(50%+0.46px)] translate-y-[-50%]" data-name="USDT">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3645 5.23757">
        <g id="USDT">
          <path d={svgPaths.p9a00480} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p704170} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          <path d={svgPaths.p3350ca00} fill="var(--fill-0, #5B5B5B)" id="Vector_3" />
          <path d={svgPaths.p13519500} fill="var(--fill-0, #5B5B5B)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[43.43%] right-[8.25%] top-[calc(50%+0.46px)] translate-y-[-50%]">
      <Usdt />
    </div>
  );
}

function ImgBlockchainUsdt() {
  return (
    <div className="absolute contents inset-0" data-name="img_blockchain_usdt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <path d={svgPaths.p32f47d00} fill="var(--fill-0, #27A17C)" id="æ¤­åå½¢" />
      </svg>
      <div className="absolute inset-[22.92%_16.67%_16.67%_16.67%]" data-name="形状结合">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33333 6.64583">
          <path clipRule="evenodd" d={svgPaths.p13556e80} fill="var(--fill-0, white)" fillRule="evenodd" id="å½¢ç¶ç»å" />
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute contents inset-0" data-name="页面-1">
      <ImgBlockchainUsdt />
    </div>
  );
}

function IconUsdt() {
  return (
    <div className="absolute aspect-[240/240] left-0 overflow-clip right-0 top-0" data-name="icon_usdt 1">
      <Component />
    </div>
  );
}

function Xrp1() {
  return (
    <div className="absolute left-[3px] overflow-clip size-[11px] top-[7px]" data-name="xrp 1">
      <IconUsdt />
    </div>
  );
}

function Img15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]" data-name="Img">
      <Helper />
      <Vector />
      <Group6 />
      <Xrp1 />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img15 />
    </div>
  );
}

function Xrp() {
  return (
    <div className="absolute h-[5.091px] left-[47.88%] right-[16.86%] top-[calc(50%+0.45px)] translate-y-[-50%]" data-name="XRP">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3955 5.09091">
        <g id="XRP">
          <path d={svgPaths.p17ca2600} fill="var(--fill-0, #5B5B5B)" id="Vector" />
          <path d={svgPaths.p20f18600} fill="var(--fill-0, #5B5B5B)" id="Vector_2" />
          <path d={svgPaths.p3ab52100} fill="var(--fill-0, #5B5B5B)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[47.88%] right-[16.86%] top-[calc(50%+0.45px)] translate-y-[-50%]">
      <Xrp />
    </div>
  );
}

function Xrp2() {
  return (
    <div className="absolute left-[5px] overflow-clip size-[11px] top-[7px]" data-name="xrp 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Group">
          <path d={svgPaths.p32f47d00} fill="var(--fill-0, #23292F)" id="Vector" />
          <path d={svgPaths.pc9a7700} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Img16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]" data-name="Img">
      <Helper />
      <Vector />
      <Group7 />
      <Xrp2 />
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <Img16 />
    </div>
  );
}

export default function List() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_16px] items-center relative size-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
    </div>
  );
}