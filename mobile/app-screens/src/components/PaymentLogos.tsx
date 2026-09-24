import svgPaths from "../imports/svg-q7em3ukaic";
import newSvgPaths from "../imports/svg-sn4342690k";
import imgAlipayLogo2020Svg1 from "../assets/97a08d2aa9ed1221f93aeca7bc6d20121ed3e7e0.png";
import imgWechatPayLogo1 from "../assets/1295aaf1aa3c6e413470efbbd8c9d07c7ac3b67b.png";
import imgBitcoinSvg1 from "../assets/f64bf82db37062af6c558481bf68b1272221f183.png";

// Visa
export function VisaLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g>
          <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
          <path d={svgPaths.p1e9ee00} fill="white" />
          <path d={svgPaths.p48b5900} fill="#142688" />
        </g>
      </svg>
    </div>
  );
}

// Mastercard
export function MastercardLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g>
          <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
          <path d={svgPaths.p1e9ee00} fill="white" />
          <path d={svgPaths.p38ddbcf1} fill="#EB001B" />
          <path d={svgPaths.p18fa3b80} fill="#F79E1B" />
          <path d={svgPaths.p25c08400} fill="#FF5F00" />
        </g>
      </svg>
    </div>
  );
}

// AMEX
export function AmexLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g>
          <path d={newSvgPaths.p265aae00} fill="black" opacity="0.07" />
          <path d={newSvgPaths.p1e9ee00} fill="white" />
          <path d={newSvgPaths.pd308d80} fill="#005B9A" />
          <path d={newSvgPaths.p2d4faf80} fill="#E9292D" />
          <path d={newSvgPaths.pe0d6e80} fill="#0E73B9" />
          <path d={newSvgPaths.pa5181f0} fill="#059DA4" />
          <path d={newSvgPaths.p30ca0f00} fill="white" />
          <g>
            <path d={newSvgPaths.p23661d00} fill="#006FCF" />
            <path d={newSvgPaths.p26131440} fill="white" />
            <path d={newSvgPaths.p34830c00} fill="#006FCF" />
            <path d={newSvgPaths.p35366e00} fill="#006FCF" />
            <path d={newSvgPaths.pe4d3600} fill="white" />
            <path d={newSvgPaths.p332fa330} fill="#006FCF" />
            <path d={newSvgPaths.p264d4280} fill="#006FCF" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// UnionPay
export function UnionPayLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g>
          <path d={newSvgPaths.p265aae00} fill="black" opacity="0.07" />
          <path d={newSvgPaths.p1e9ee00} fill="white" />
          <g>
            <path d={newSvgPaths.pd308d80} fill="#005B9A" />
            <path d={newSvgPaths.p2d4faf80} fill="#E9292D" />
            <path d={newSvgPaths.pe0d6e80} fill="#0E73B9" />
            <path d={newSvgPaths.pa5181f0} fill="#059DA4" />
            <path d={newSvgPaths.p30ca0f00} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Alipay
export function AlipayLogo() {
  return (
    <div className="h-[32px] w-[50.67px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="white" />
        </svg>
      </div>
      <div className="absolute h-[10.67px] left-[calc(50%+0.67px)] top-[10.67px] translate-x-[-50%] w-[41.33px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAlipayLogo2020Svg1} />
      </div>
    </div>
  );
}

// WeChat Pay
export function WechatPayLogo() {
  return (
    <div className="h-[32px] w-[50.67px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="white" />
        </svg>
      </div>
      <div className="absolute h-[13.33px] left-1/2 top-[4px] translate-x-[-50%] w-[16px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.07%] left-0 max-w-none top-[-0.03%] w-[316.67%]" src={imgWechatPayLogo1} />
        </div>
      </div>
      <div className="absolute h-[16px] left-[calc(50%+0.67px)] top-[14.67px] translate-x-[-50%] w-[38.67px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.07%] left-[-58.33%] max-w-none top-[-0.03%] w-[158.33%]" src={imgWechatPayLogo1} />
        </div>
      </div>
    </div>
  );
}

// Apple Pay
export function ApplePayLogo() {
  return (
    <div className="h-[32px] w-[50.67px] relative">
      <div className="absolute inset-[0_0.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.4888 23.9998">
          <path d={newSvgPaths.p2deae000} fill="#E4E4E4" />
        </svg>
      </div>
      <div className="absolute inset-[3.33%_2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.8889 22.4001">
          <path d={newSvgPaths.p173addc0} fill="white" />
        </svg>
      </div>
      <div className="absolute inset-[27.6%_67.09%_34.01%_13.18%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49635 9.2135">
          <g>
            <path d={newSvgPaths.p255b0000} fill="black" />
            <path d={newSvgPaths.pc1e4e40} fill="black" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[30.3%_13.42%_24.69%_39.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9439 10.8029">
          <g>
            <path d={newSvgPaths.p1b020600} fill="black" />
            <path d={newSvgPaths.p1b08bb00} fill="black" />
            <path d={newSvgPaths.p214c4400} fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Google Pay
export function GooglePayLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g>
          <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
          <path d={svgPaths.p1e9ee00} fill="white" />
          <path d={svgPaths.p23a0a00} fill="#5F6368" />
          <path d={svgPaths.p19460580} fill="#4285F4" />
          <path d={svgPaths.p27416f0} fill="#34A853" />
          <path d={svgPaths.p364a2480} fill="#FBBC04" />
          <path d={svgPaths.p3b30d00} fill="#EA4335" />
        </g>
      </svg>
    </div>
  );
}

// PayPal
export function PayPalLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g>
          <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
          <path d={svgPaths.p1e9ee00} fill="white" />
          <path d={svgPaths.p29d6b600} fill="#003087" />
          <path d={svgPaths.p9604c00} fill="#3086C8" />
          <path d={svgPaths.p3154e900} fill="#012169" />
        </g>
      </svg>
    </div>
  );
}

// Discover
export function DiscoverLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g>
          <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
          <path d={svgPaths.p1e9ee00} fill="white" />
          <path d={svgPaths.p37736080} fill="#231F20" />
          <path d={svgPaths.p8dd84c0} fill="url(#paint0_linear_discover)" />
          <path d={svgPaths.p8dd84c0} fill="url(#paint1_linear_discover)" opacity="0.65" />
          <path d={svgPaths.pc39b000} fill="#231F20" />
          <path d={svgPaths.p1b3508c0} fill="#231F20" />
          <path d={svgPaths.pe6d5300} fill="#F48120" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_discover" x1="21.6565" x2="19.6315" y1="12.275" y2="9.10405">
            <stop stopColor="#F89F20" />
            <stop offset="0.25" stopColor="#F79A20" />
            <stop offset="0.533" stopColor="#F68D20" />
            <stop offset="0.62" stopColor="#F58720" />
            <stop offset="0.723" stopColor="#F48120" />
            <stop offset="1" stopColor="#F37521" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_discover" x1="21.3375" x2="18.3775" y1="12.232" y2="6.44605">
            <stop stopColor="#F58720" />
            <stop offset="0.359" stopColor="#E16F27" />
            <stop offset="0.703" stopColor="#D4602C" />
            <stop offset="0.982" stopColor="#D05B2E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Diners Club
export function DinersClubLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g>
          <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
          <path d={svgPaths.p1e9ee00} fill="white" />
          <path d={svgPaths.p361e0470} fill="#3086C8" />
        </g>
      </svg>
    </div>
  );
}

// JCB
export function JCBLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g>
          <g>
            <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
            <path d={svgPaths.p1e9ee00} fill="white" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p2ab66ff0} fill="#006EBC" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p17cec4b1} fill="#F00036" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p32033c80} fill="#2AB419" fillRule="evenodd" />
          <path d={svgPaths.p125b9f00} fill="white" />
        </g>
      </svg>
    </div>
  );
}

// Bitcoin
export function BitcoinLogo() {
  return (
    <div className="h-[32px] w-[50.67px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="white" />
        </svg>
      </div>
      <div className="absolute h-[6.97px] left-[48.69%] right-[16.17%] top-[calc(50%+0.6px)] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3538 5.23012">
          <g>
            <path d={svgPaths.peb4350} fill="#5B5B5B" />
            <path d={svgPaths.p2e0acb80} fill="#5B5B5B" />
            <path d={svgPaths.p2a71be60} fill="#5B5B5B" />
          </g>
        </svg>
      </div>
      <div className="absolute left-[6.67px] size-[14.67px] top-[9.33px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBitcoinSvg1} />
      </div>
    </div>
  );
}

// Ethereum
export function EthereumLogo() {
  return (
    <div className="h-[32px] w-[50.67px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="white" />
        </svg>
      </div>
      <div className="absolute inset-[19.77%_60.53%_19.77%_15.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14.5111">
          <g>
            <path d={svgPaths.p275a3900} fill="#8A92B2" />
            <path d={svgPaths.p36e43400} fill="#62688F" />
            <path d={svgPaths.p3fa86030} fill="#454A75" />
            <path d={svgPaths.p1e217c80} fill="#8A92B2" />
            <path d={svgPaths.p1e845400} fill="#62688F" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[6.79px] left-[46.06%] right-[19.52%] top-[calc(50%+0.6px)] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0791 5.09091">
          <g>
            <path d={svgPaths.p3bcc17c0} fill="#5B5B5B" />
            <path d={svgPaths.p3226d780} fill="#5B5B5B" />
            <path d={svgPaths.p11eaf380} fill="#5B5B5B" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// USDT
export function USDTLogo() {
  return (
    <div className="h-[32px] w-[50.67px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="white" />
        </svg>
      </div>
      <div className="absolute h-[6.98px] left-[43.43%] right-[8.25%] top-[calc(50%+0.61px)] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3645 5.23757">
          <g>
            <path d={svgPaths.p9a00480} fill="#5B5B5B" />
            <path d={svgPaths.p704170} fill="#5B5B5B" />
            <path d={svgPaths.p3350ca00} fill="#5B5B5B" />
            <path d={svgPaths.p13519500} fill="#5B5B5B" />
          </g>
        </svg>
      </div>
      <div className="absolute left-[4px] overflow-clip size-[14.67px] top-[9.33px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p32f47d00} fill="#27A17C" />
        </svg>
        <div className="absolute inset-[22.92%_16.67%_16.67%_16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33333 6.64583">
            <path clipRule="evenodd" d={svgPaths.p13556e80} fill="white" fillRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// XRP
export function XRPLogo() {
  return (
    <div className="h-[32px] w-[50.67px] relative">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path d={svgPaths.p265aae00} fill="black" opacity="0.07" />
      </svg>
      <div className="absolute inset-[4.17%_2.63%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 22">
          <path d={svgPaths.pc76d200} fill="white" />
        </svg>
      </div>
      <div className="absolute h-[6.79px] left-[47.88%] right-[16.86%] top-[calc(50%+0.6px)] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3955 5.09091">
          <g>
            <path d={svgPaths.p17ca2600} fill="#5B5B5B" />
            <path d={svgPaths.p20f18600} fill="#5B5B5B" />
            <path d={svgPaths.p3ab52100} fill="#5B5B5B" />
          </g>
        </svg>
      </div>
      <div className="absolute left-[6.67px] overflow-clip size-[14.67px] top-[9.33px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g>
            <path d={svgPaths.p32f47d00} fill="#23292F" />
            <path d={svgPaths.pc9a7700} fill="white" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// ─── New payment methods ───────────────────────────────────────────────────────

// Revolut
export function RevolutLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path fill="black" fillOpacity="0.07" d="M2 0h34a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
        <path fill="white" d="M2 1h34a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        <text x="19" y="14.8" textAnchor="middle" fill="#191C1F" fontSize="6.5" fontWeight="800" fontFamily="Arial,Helvetica,sans-serif" letterSpacing="-0.2">Revolut</text>
      </svg>
    </div>
  );
}

// BLIK
export function BLIKLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path fill="black" fillOpacity="0.07" d="M2 0h34a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
        <path fill="white" d="M2 1h34a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        {/* 3-line B mark */}
        <rect x="3" y="7.5" width="6" height="1.6" rx="0.8" fill="#FF5E00"/>
        <rect x="3" y="11.2" width="6" height="1.6" rx="0.8" fill="#FF5E00"/>
        <rect x="3" y="14.9" width="6" height="1.6" rx="0.8" fill="#FF5E00"/>
        {/* BLIK wordmark */}
        <text x="24.5" y="15.5" textAnchor="middle" fill="#FF5E00" fontSize="9" fontWeight="900" fontFamily="'Arial Black',Arial,Helvetica,sans-serif" letterSpacing="0.5">BLIK</text>
      </svg>
    </div>
  );
}

// iDEAL
export function IDealLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path fill="black" fillOpacity="0.07" d="M2 0h34a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
        <path fill="white" d="M2 1h34a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        <text x="19" y="15" textAnchor="middle" fill="#CC0066" fontSize="7.5" fontWeight="700" fontFamily="Arial,Helvetica,sans-serif">iDEAL</text>
      </svg>
    </div>
  );
}

// TWINT
export function TwintLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path fill="black" fillOpacity="0.07" d="M2 0h34a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
        <path fill="white" d="M2 1h34a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        <text x="19" y="15" textAnchor="middle" fill="#E7151B" fontSize="7.5" fontWeight="900" fontFamily="'Arial Black',Arial,Helvetica,sans-serif" letterSpacing="0.4">TWINT</text>
      </svg>
    </div>
  );
}

// Pix
export function PixLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <path fill="black" fillOpacity="0.07" d="M2 0h34a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
        <path fill="white" d="M2 1h34a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        {/* Pix 4-petal pinwheel mark centered at (9, 12) */}
        <path d="M9,12 L12.5,8.5 L9,5 L5.5,8.5 Z" fill="#32BCAD"/>
        <path d="M9,12 L12.5,8.5 L16,12 L12.5,15.5 Z" fill="#1BA99F"/>
        <path d="M9,12 L12.5,15.5 L9,19 L5.5,15.5 Z" fill="#32BCAD"/>
        <path d="M9,12 L5.5,15.5 L2,12 L5.5,8.5 Z" fill="#1BA99F"/>
        {/* Pix wordmark */}
        <text x="26.5" y="15" textAnchor="middle" fill="#32BCAD" fontSize="7.5" fontWeight="700" fontFamily="Arial,Helvetica,sans-serif">Pix</text>
      </svg>
    </div>
  );
}

// Bancontact
export function BancontactLogo() {
  return (
    <div className="h-[32px] w-[50.67px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        {/* Card outer border */}
        <path fill="black" fillOpacity="0.07" d="M2 0h34a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
        {/* Blue card background */}
        <path fill="#003882" d="M2 1h34a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        {/* Yellow left section */}
        <path fill="#FDD835" d="M2 1h12v22H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
        {/* bc lettermark on yellow */}
        <text x="7.5" y="15.5" textAnchor="middle" fill="#003882" fontSize="8.5" fontWeight="900" fontFamily="'Arial Black',Arial,Helvetica,sans-serif">bc</text>
        {/* bancontact wordmark split over two lines on blue */}
        <text x="25.5" y="11" textAnchor="middle" fill="white" fontSize="4.8" fontWeight="600" fontFamily="Arial,Helvetica,sans-serif">ban</text>
        <text x="25.5" y="17.5" textAnchor="middle" fill="white" fontSize="4.8" fontWeight="600" fontFamily="Arial,Helvetica,sans-serif">contact</text>
      </svg>
    </div>
  );
}