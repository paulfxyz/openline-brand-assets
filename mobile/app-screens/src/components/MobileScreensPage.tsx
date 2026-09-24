import React, { useState } from "react";
import {
  Search, Plus, ArrowLeft, ChevronLeft, Check, Wifi, SignalHigh, BatteryFull,
  Home, Globe, User, CreditCard, ChevronRight, Headset, ShieldCheck, Lock,
  Gift, Copy, Clock, QrCode, Facebook, Mail, Phone, PartyPopper, Download, Wallet, X,
  Infinity as InfinityIcon, Folder, RefreshCw, Layers,
  HelpCircle, BookOpen, Tag, Pencil, FolderPlus, Trash2, Settings,
  Bell, LogOut, ChevronDown, Share2, Smartphone,
} from "lucide-react";
import {
  VisaLogo, MastercardLogo, AmexLogo, UnionPayLogo, AlipayLogo, WechatPayLogo,
  ApplePayLogo, GooglePayLogo, PayPalLogo, DiscoverLogo, DinersClubLogo, JCBLogo,
  BitcoinLogo, EthereumLogo, USDTLogo, XRPLogo, RevolutLogo, BLIKLogo, IDealLogo,
  TwintLogo, PixLogo, BancontactLogo,
} from "./PaymentLogos";

// Demo picker registry, built from the logo components supplied with this export.
// This is UI sample data, not a declaration of supported payment integrations.
const ALL_PAYMENT_METHODS = [
  { id: "visa", name: "Visa", Logo: VisaLogo },
  { id: "mastercard", name: "Mastercard", Logo: MastercardLogo },
  { id: "amex", name: "American Express", Logo: AmexLogo },
  { id: "unionpay", name: "UnionPay", Logo: UnionPayLogo },
  { id: "alipay", name: "Alipay", Logo: AlipayLogo },
  { id: "wechat-pay", name: "WeChat Pay", Logo: WechatPayLogo },
  { id: "apple-pay", name: "Apple Pay", Logo: ApplePayLogo },
  { id: "google-pay", name: "Google Pay", Logo: GooglePayLogo },
  { id: "paypal", name: "PayPal", Logo: PayPalLogo },
  { id: "discover", name: "Discover", Logo: DiscoverLogo },
  { id: "diners-club", name: "Diners Club", Logo: DinersClubLogo },
  { id: "jcb", name: "JCB", Logo: JCBLogo },
  { id: "bitcoin", name: "Bitcoin", Logo: BitcoinLogo },
  { id: "ethereum", name: "Ethereum", Logo: EthereumLogo },
  { id: "usdt", name: "USDT", Logo: USDTLogo },
  { id: "xrp", name: "XRP", Logo: XRPLogo },
  { id: "revolut", name: "Revolut", Logo: RevolutLogo },
  { id: "blik", name: "BLIK", Logo: BLIKLogo },
  { id: "ideal", name: "iDEAL", Logo: IDealLogo },
  { id: "twint", name: "TWINT", Logo: TwintLogo },
  { id: "pix", name: "Pix", Logo: PixLogo },
  { id: "bancontact", name: "Bancontact", Logo: BancontactLogo },
];

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}
import openlineLogo from "../assets/384308522d5465642033b4d908da028d55c6aeb6.png";

/* ============================================================================
   OPENLINE MOBILE - Milestone C: re-skinned app screens.
   Direct adaptation of the real ESIMDashboardPage / LoginPage / PlanSelectorPanel
   / CheckoutPage patterns. Shown as FLAT screen panels (no phone-bezel frame -
   the fixed-width device chrome + notch was causing the gap/layout bugs).
   Only standard Tailwind utilities used, plus inline style for anything that
   doesn't already exist elsewhere in the codebase (arbitrary bracket values
   that are brand-new silently fail to compile in this project).
   ========================================================================== */
/* ---------------------------------------------------------------------------
   Motion MVP for the app screens (Card 2 item 9). Deliberately restrained:
   things that would genuinely move in the real app - a data ring filling, a
   live dot breathing, the connected pill settling in, rows arriving. CSS
   keyframes only (see HANDOVER.md - JS-driven motion stalls in throttled
   contexts here), and everything is disabled under prefers-reduced-motion.
   --------------------------------------------------------------------------- */
export function AppScreenStyles() {
  return (
    <style>{`
      @keyframes olAppRise { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
      @keyframes olAppFill { from { width: 0 } }
      @keyframes olAppBreathe { 0%,100% { opacity: 1; transform: scale(1) } 50% { opacity: .55; transform: scale(.88) } }
      @keyframes olAppPop { 0% { opacity: 0; transform: scale(.9) } 60% { transform: scale(1.03) } 100% { opacity: 1; transform: scale(1) } }
      @keyframes olAppSweep { 0% { transform: translateX(-120%) } 100% { transform: translateX(320%) } }
      /* Openline mark, working. Used by the connection screen: the mark
         breathes while a ring tracks around it, so a slow load still looks
         like the app is doing something rather than frozen. */
      @keyframes olAppOrbit { to { transform: rotate(360deg) } }
      @keyframes olAppTrack { 0% { stroke-dashoffset: 190 } 50% { stroke-dashoffset: 48 } 100% { stroke-dashoffset: 190 } }
      /* Form controls: focus ring in brand orange, and a 16px font on the
         real control so iOS Safari does not zoom the page when it is tapped. */
      .ol-app-input { font-size: 16px; transition: border-color .15s ease, box-shadow .15s ease; }
      .ol-app-input::placeholder { color: #9CA3AF; }
      .ol-app-input:focus { border-color: #FF5314; box-shadow: 0 0 0 3px rgba(255,83,20,.16); }
      @media (prefers-reduced-motion: reduce) {
        .ol-app-motion *, .ol-app-motion { animation: none !important; }
      }
    `}</style>
  );
}

/* Deep-link params, read once at module load.

   The app router rewrites the URL to a bare "/<section>" in a mount effect
   (App.tsx), which strips the query string before this page renders - so
   reading window.location.search from inside the component always came back
   empty. Module scope runs while the bundle evaluates, before that effect. */
const LAUNCH_QUERY = typeof window === "undefined"
  ? new URLSearchParams()
  : new URLSearchParams(window.location.search);

export const SCREEN_W = 340;
export const SCREEN_H = 700;

function ScreenPanel({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="ol-app-motion shrink-0">
      <div style={{ width: SCREEN_W, height: SCREEN_H }} className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
        {children}
      </div>
      <p className="mt-4 text-center text-sm font-bold">{label}</p>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-4 text-xs font-semibold text-gray-900">
      <span>9:41</span>
      <div className="flex items-center gap-1.5"><SignalHigh className="h-3.5 w-3.5" /><Wifi className="h-3.5 w-3.5" /><BatteryFull className="h-3.5 w-3.5" /></div>
    </div>
  );
}

function AppHeader({ onHelp }: { onHelp?: () => void }) {
  return (
    <div className="flex items-center justify-between px-5" style={{ paddingTop: 28 }}>
      <div className="flex items-center gap-1.5">
        <img src={openlineLogo} alt="Openline" className="h-6 w-auto" />
        <span className="font-['Play',sans-serif] text-lg font-bold">Openline</span>
      </div>
      {/* Help (brief item 2): a "?" that opens the full-screen support
          modal - the same Zendesk view the web header opens. */}
      <button
        onClick={onHelp}
        className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-100"
        aria-label="Help"
      >
        <HelpCircle className="text-gray-700" style={{ width: 18, height: 18 }} />
        <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white" style={{ background: "#22c55e" }} />
      </button>
    </div>
  );
}

/* Full-screen in-app support modal (brief item 2: "same as the web one").
   Chat area is the same styled hold the web SupportChatWidget uses - Kerem
   mounts the real Zendesk view into it. */
function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-40 flex flex-col bg-white">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-orange-50">
            <Headset className="h-4 w-4 text-primary" />
          </span>
          <div>
            <p className="text-sm font-bold">Openline Support</p>
            <p className="text-xs text-muted-foreground">Live chat</p>
          </div>
        </div>
        <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
          <X className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      {/* Same correction as the web widget: a fake presence dot and a
          perpetual "connecting" state read as a broken chat rather than as
          reserved space. The real client is mounted at deployment. */}
      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50">
          <Headset className="h-5 w-5 text-primary" />
        </span>
        <p className="mt-1 text-sm font-bold">The live chat loads here</p>
        <p className="text-xs text-muted-foreground">
          Reserved space in the design - the chat client is connected at deployment.
        </p>
        <span
          className="mt-1 inline-flex items-center rounded-full px-2.5 py-1 font-semibold"
          style={{ background: "#F4F4F5", color: "#52525B", fontSize: 10.5 }}
        >
          Preview - chat not connected
        </span>
      </div>
      <div className="space-y-2 px-5 pb-8">
        {[
          { icon: BookOpen, label: "Knowledge base", sub: "2,180 articles" },
          { icon: Smartphone, label: "Device compatibility", sub: "9,400+ devices" },
        ].map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 rounded-2xl border-2 border-gray-100 p-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50">
              <Icon className="h-4 w-4 text-primary" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold">{label}</span>
              <span className="block text-xs text-muted-foreground">{sub}</span>
            </span>
            <ChevronRight className="h-4 w-4 text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

function TabBar({ active }: { active: string }) {
  const tabs = [["Home", Home], ["Plans", Globe], ["eSIMs", CreditCard], ["Me", User]] as const;
  return (
    <div className="flex items-center justify-around border-t border-gray-100 bg-white px-2" style={{ paddingTop: 10, paddingBottom: 20 }}>
      {tabs.map(([name, Icon]) => {
        const on = name === active;
        return (
          <div key={name} className={`flex flex-col items-center ${on ? "text-primary" : "text-gray-400"}`} style={{ gap: 2 }}>
            <span className={`flex h-8 w-8 items-center justify-center rounded-full ${on ? "bg-orange-50" : ""}`}>
              <Icon className="h-5 w-5" strokeWidth={on ? 2.4 : 2} />
            </span>
            <span className="font-bold" style={{ fontSize: 10 }}>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------------------------- LOGIN --------------------------------- */
export function LoginScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-6 pt-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
          <img src={openlineLogo} alt="Openline" className="h-9 w-auto" />
        </div>
        <h1 className="mt-5 text-center text-3xl font-bold">Aloha!</h1>
        <p className="mt-2 text-center text-muted-foreground">Sign in to your account - or create a new one</p>

        <div className="mt-8 space-y-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-gray-200 py-3.5 font-semibold hover:bg-gray-50">
            <AppleLogo className="h-5 w-5" /> Continue with Apple
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-gray-200 py-3.5 font-semibold hover:bg-gray-50">
            <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M23 12.2c0-.7-.06-1.4-.18-2H12v4h6.2a5.3 5.3 0 0 1-2.3 3.5l3.5 2.7A10 10 0 0 0 23 12.2z"/><path fill="#34A853" d="M12 23c2.7 0 5-1 6.6-2.6l-3.5-2.7c-1 .65-2.2 1-3.1 1a6 6 0 0 1-5.2-3.8l-3.4 2.6A10 10 0 0 0 12 23z"/><path fill="#FBBC04" d="M6.8 14.5A6 6 0 0 1 6.5 12c0-.9.15-1.7.4-2.5L3.4 6.9A10 10 0 0 0 3.4 17z"/><path fill="#EA4335" d="M12 5c1.6 0 3 .55 4.1 1.6L19 3.7A10 10 0 0 0 3.4 6.9l3.4 2.6A6 6 0 0 1 12 5z"/></svg> Continue with Google
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-gray-200 py-3.5 font-semibold hover:bg-gray-50">
            <Facebook className="h-5 w-5 text-blue-600 fill-blue-600" /> Continue with Facebook
          </button>
        </div>

        <div className="my-6 flex items-center gap-3 text-sm text-gray-400">
          <div className="h-px flex-1 bg-gray-200" />or continue with<div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 py-3 hover:bg-gray-50">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50"><Mail className="h-3.5 w-3.5 text-primary" /></span>
            <span className="text-sm font-bold">Email</span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 py-3 hover:bg-gray-50">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50"><Phone className="h-3.5 w-3.5 text-primary" /></span>
            <span className="text-sm font-bold">Phone</span>
          </button>
        </div>
      </div>
      <p className="px-6 pb-8 pt-3 text-center text-sm text-muted-foreground">
        New here? <span className="font-semibold text-primary">Create account</span>
      </p>
    </div>
  );
}

/* -------------------------------- DASHBOARD ------------------------------- */
export function DashboardScreen() {
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <div className="relative flex h-full flex-col bg-gray-50">
      <StatusBar />
      <AppHeader onHelp={() => setHelpOpen(true)} />
      <div className="mt-3 flex items-center justify-between px-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary/30 bg-orange-50 font-bold text-primary">A</span>
          <span className="text-lg font-bold">Hi, Alex!</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100"><Globe className="h-4 w-4 text-primary" /></span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100"><CreditCard className="h-4 w-4 text-green-700" /></span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100"><Gift className="h-4 w-4 text-blue-700" /></span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5" style={{ paddingTop: 16, paddingBottom: 20 }}>
        {/* hero stat card - the native-dashboard moment: your active plan, front and center */}
        <div
          className="rounded-3xl p-5 text-white"
          style={{
            background: "linear-gradient(135deg, #FF7A45, #FF5314)",
            boxShadow: "0 16px 32px -12px rgba(255,83,20,0.5)",
            animation: "olAppRise .5s cubic-bezier(.22,1,.36,1) both",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-sm font-semibold"><span>🇪🇺</span> Europe · 5G</span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
              {/* live dot actually breathes */}
              <span className="h-1.5 w-1.5 rounded-full bg-white" style={{ animation: "olAppBreathe 2.4s ease-in-out infinite" }} /> Connected
            </span>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <span className="font-['Play',sans-serif] leading-none" style={{ fontSize: 44 }}>6.8<span className="text-lg opacity-70"> GB</span></span>
            <span className="text-xs opacity-80">of 10 GB left</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/30">
            {/* usage fills to its real value on open, then holds */}
            <div className="h-full rounded-full bg-white" style={{ width: "68%", animation: "olAppFill 1.1s cubic-bezier(.22,1,.36,1) .2s both" }} />
          </div>
        </div>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-gray-100 bg-white py-3.5 text-sm font-bold shadow-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-50"><Plus className="h-4 w-4 text-primary" /></span>
          Buy a new eSIM
        </button>

        <div className="mt-4 flex items-center gap-2 rounded-xl border-2 border-gray-200 px-4 py-3">
          <Search className="h-4 w-4 text-gray-400" /><span className="text-sm text-gray-400">Search countries...</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="font-bold">eSIMs to Activate</h2>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary">View All <ChevronRight className="h-3.5 w-3.5" /></span>
        </div>

        <div className="mt-3 rounded-3xl border-2 border-dashed border-gray-300 bg-white p-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-bold"><span className="text-xl">🇯🇵</span> Japan</span>
            <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">Ready to Activate</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Purchased on Dec 27, 2025</p>
          <div className="mt-3 flex items-center justify-between rounded-xl border border-orange-200 bg-orange-50 p-3">
            <div>
              <p className="text-xs text-muted-foreground">Purchase code</p>
              <p className="font-mono text-sm font-bold">MOUNT34-RIVER90-STONE67</p>
            </div>
            <Copy className="h-4 w-4 text-primary" />
          </div>
          <p className="mt-3 text-sm font-bold">10GB plan</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> Use your purchase code within 30 days</p>
          <div className="mt-3 flex gap-2">
            <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-sm font-bold text-white">Activate Now <ChevronRight className="h-4 w-4" /></button>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-gray-200"><QrCode className="h-5 w-5 text-gray-700" /></span>
          </div>
        </div>
      </div>
      <TabBar active="Home" />
      {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}
    </div>
  );
}

/* --------------------------------- COUNTRIES ------------------------------- */
function CountriesScreen() {
  const regions = [
    { title: "Popular", items: [
      { flag: "🇺🇸", name: "United States", price: "$12" },
      { flag: "🇪🇺", name: "Europe (30+ countries)", price: "$19" },
      { flag: "🇯🇵", name: "Japan", price: "$10" },
      { flag: "🇹🇭", name: "Thailand", price: "$8" },
    ]},
    { title: "Asia", items: [
      { flag: "🇰🇷", name: "South Korea", price: "$9" },
      { flag: "🇸🇬", name: "Singapore", price: "$7" },
      { flag: "🇻🇳", name: "Vietnam", price: "$6" },
    ]},
    { title: "Americas", items: [
      { flag: "🇨🇦", name: "Canada", price: "$11" },
      { flag: "🇲🇽", name: "Mexico", price: "$9" },
    ]},
  ];
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="px-5 pt-3">
        <h1 className="text-2xl font-bold">Where to?</h1>
        <div className="mt-4 flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-4 py-3">
          <Search className="h-4 w-4 text-gray-400" /><span className="text-sm text-gray-400">Search 190+ countries...</span>
        </div>
      </div>
      <div className="mt-4 flex-1 overflow-y-auto px-5 pb-6">
        {regions.map((r) => (
          <div key={r.title} className="mb-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">{r.title}</p>
            <div className="space-y-2">
              {r.items.map((c) => (
                <div key={c.name} className="flex items-center justify-between rounded-2xl border-2 border-gray-100 bg-white p-3.5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.flag}</span>
                    <span className="font-semibold">{c.name}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="text-right">
                      <p className="font-semibold uppercase text-gray-400" style={{ fontSize: 9, letterSpacing: 0.4 }}>From</p>
                      <p className="font-['Play',sans-serif]" style={{ fontSize: 17, lineHeight: 1.1 }}>{c.price}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <TabBar active="Plans" />
    </div>
  );
}

/* ---------------------------------- PLANS --------------------------------- */
export function PlansScreen() {
  /* Brief item 4: step 1 is now a pure COUNTRY pick - no prices, no
     bundled plans - mirroring the quick-buy modal on the live site. The
     package type (unlimited vs fixed) is step 2 and its options step 3. */
  const popular = [
    { flag: "🇺🇸", name: "United States", meta: "12 networks" },
    { flag: "🇪🇺", name: "Europe", meta: "38 countries", badge: "Most popular" },
    { flag: "🇯🇵", name: "Japan", meta: "5 networks" },
    { flag: "🇹🇭", name: "Thailand", meta: "4 networks" },
    { flag: "🌍", name: "Global", meta: "190+ countries", badge: "Best value" },
  ];
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="px-5 pt-3">
        <h1 className="text-2xl font-bold">Where are you going?</h1>
        <p className="mt-1 text-xs text-muted-foreground">Step 1 of 3 · pick a destination</p>
        <div className="mt-4 flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-4 py-3">
          <Search className="h-4 w-4 text-gray-400" /><span className="text-sm text-gray-400">Search 190+ countries</span>
        </div>
        <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {["Popular", "Europe", "Asia", "Americas", "Africa"].map((c, i) => (
            <span key={c} className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold ${i === 0 ? "bg-primary text-white" : "border-2 border-gray-200 bg-white text-gray-700"}`}>{c}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex-1 space-y-2.5 overflow-y-auto px-5 pb-6">
        {popular.map((c) => (
          <div key={c.name} className="flex items-center gap-3 rounded-2xl border-2 border-gray-100 bg-white p-3.5 shadow-sm">
            <span className="text-2xl leading-none">{c.flag}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate font-bold">{c.name}</p>
                {c.badge && (
                  <span className="shrink-0 rounded-full bg-orange-50 px-2 py-0.5 font-bold text-primary" style={{ fontSize: 9 }}>{c.badge}</span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{c.meta}</p>
            </div>
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-300" />
          </div>
        ))}
      </div>
      <TabBar active="Plans" />
    </div>
  );
}


function CheckoutScreen() {
  const [paySheetOpen, setPaySheetOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("visa");
  return (
    <div className="relative flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="flex items-center gap-3 px-5 pt-3">
        <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        <h1 className="text-xl font-bold">Checkout</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-5" style={{ paddingTop: 20 }}>
        <div className="rounded-3xl border-2 border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3"><span className="text-2xl">🌍</span><div><p className="font-bold">Global Unlimited</p><p className="text-xs text-muted-foreground">30 days · Unlimited data</p></div></div>
            <span className="font-bold">$39</span>
          </div>
          <div className="mt-5 mb-4 h-px bg-gray-100" />
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>$39.00</span></div>
          <div className="mt-1.5 flex justify-between text-sm"><span className="text-muted-foreground">Taxes</span><span>$0.00</span></div>
          <div className="mt-3 flex justify-between border-t border-gray-100 pt-3"><span className="font-bold">Total</span><span className="font-['Play',sans-serif] text-xl text-primary">$39</span></div>
        </div>

        <p className="mb-2.5 mt-5 font-bold">Payment method</p>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between rounded-2xl border-2 border-primary bg-orange-50 p-3.5">
            <div className="flex items-center gap-3"><CreditCard className="h-5 w-5 text-primary" /><span className="font-semibold">•••• 4242</span></div>
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary"><Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /></span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white p-3.5">
            <AppleLogo className="h-5 w-5" /><span className="font-semibold">Apple Pay</span>
          </div>
        </div>
        <button onClick={() => setPaySheetOpen(true)} className="mt-3 flex w-full items-center justify-center gap-1.5 py-1 text-sm font-semibold text-primary">
          Change payment method <ChevronRight className="h-3.5 w-3.5" />
        </button>

        {/* codes + email (brief item 5: discount, referral, and an email
            field so the purchase code has somewhere to land) */}
        <p className="mb-2.5 mt-5 font-bold">Codes</p>
        <div className="space-y-2.5">
          {[
            { icon: Tag, label: "Discount code", placeholder: "SUMMER20" },
            { icon: Gift, label: "Referral code", placeholder: "FRIEND-4821" },
          ].map(({ icon: Icon, label, placeholder }) => (
            <div key={label} className="flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white p-2.5">
              <Icon className="h-4 w-4 shrink-0 text-gray-400" />
              <div className="min-w-0 flex-1">
                <p className="text-gray-400" style={{ fontSize: 9 }}>{label}</p>
                <p className="truncate text-sm font-semibold text-gray-300">{placeholder}</p>
              </div>
              <span className="shrink-0 rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-bold text-gray-500">Apply</span>
            </div>
          ))}
        </div>

        <p className="mb-2.5 mt-5 font-bold">Email</p>
        <div className="flex items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white p-2.5">
          <Mail className="h-4 w-4 shrink-0 text-gray-400" />
          <div className="min-w-0 flex-1">
            <p className="text-gray-400" style={{ fontSize: 9 }}>Receipt + purchase code go here</p>
            <p className="truncate text-sm font-semibold text-gray-300">you@email.com</p>
          </div>
        </div>
        <div className="h-4" />
      </div>
      <div className="px-5 pb-8 pt-3">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-white">
          <Lock className="h-4 w-4" /> Pay $39
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><ShieldCheck className="h-3.5 w-3.5" /> Encrypted & secure payment</p>
      </div>

      {/* change-payment bottom sheet - same grid of methods as the web checkout */}
      {paySheetOpen && (
        <div className="absolute inset-0 z-30 flex items-end" style={{ background: "rgba(15,17,21,0.45)" }} onClick={() => setPaySheetOpen(false)}>
          <div className="w-full rounded-t-3xl bg-white px-5 pb-6 pt-4" style={{ maxHeight: "78%", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-200" />
            <div className="mb-3 flex items-center justify-between">
              <p className="font-bold">Choose payment method</p>
              <button onClick={() => setPaySheetOpen(false)} className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"><X className="h-3.5 w-3.5 text-gray-600" /></button>
            </div>
            <div className="grid grid-cols-4" style={{ gap: 8 }}>
              {ALL_PAYMENT_METHODS.map(({ id, name, Logo }) => (
                <button
                  key={id}
                  title={name}
                  onClick={() => { setSelectedMethod(id); setPaySheetOpen(false); }}
                  className={`flex items-center justify-center rounded-xl border-2 p-1.5 transition-colors ${selectedMethod === id ? "border-primary bg-orange-50" : "border-gray-100 bg-white hover:border-gray-300"}`}
                >
                  <Logo />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------- ESIM READY -------------------------------
   Milestone E: in the mobile app, a completed purchase shows the eSIM
   details directly (QR + plan info, ready to use) instead of showing the
   purchase code first like the web checkout does. */
function QRBlock({ size = 120 }: { size?: number }) {
  const cells = 11;
  const on = (x: number, y: number) =>
    (x < 3 && y < 3) || (x > cells - 4 && y < 3) || (x < 3 && y > cells - 4) ||
    ((x * 7 + y * 13 + x * y) % 3 === 0);
  const s = size / cells;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {Array.from({ length: cells }).map((_, y) =>
        Array.from({ length: cells }).map((_, x) =>
          on(x, y) ? <rect key={`${x}-${y}`} x={x * s} y={y * s} width={s} height={s} fill="#0F1115" /> : null
        )
      )}
    </svg>
  );
}

/* -------------------------------- ESIMS LIST -------------------------------
   All the user's eSIMs with folders and every lifecycle state:
   to activate, to install, installed/active, expired, refunded. */
const ESIM_STATES = {
  toActivate: { label: "To activate", bg: "#dcfce7", color: "#15803d" },
  toInstall: { label: "To install", bg: "#dbeafe", color: "#1d4ed8" },
  active: { label: "Active", bg: "#dcfce7", color: "#15803d" },
  expired: { label: "Expired", bg: "#f1f5f9", color: "#64748b" },
  refunded: { label: "Refunded", bg: "#fee2e2", color: "#b91c1c" },
} as const;

function EsimsListScreen() {
  /* Brief item 3: every eSIM state gets the right actions, plus rename,
     folders (add/remove via modal) and a real progress bar.
     - purchase-code-only  -> Gift button alongside Activate
     - activated, not installed -> QR + details again
     - activated + installed -> Refill / top-up only
     - refunded / expired -> sensible info, no dead CTAs */
  const [sheet, setSheet] = useState<null | "rename" | "folders" | "qr">(null);
  const esims: {
    flag: string; name: string; meta: string; state: keyof typeof ESIM_STATES;
    usage?: number; used?: string; action?: string;
  }[] = [
    { flag: "🇯🇵", name: "Japan · 10GB", meta: "Purchase code · not activated", state: "toActivate", action: "Activate" },
    { flag: "🇹🇭", name: "Thailand · 5GB", meta: "Activated · not installed", state: "toInstall", action: "Show QR" },
    { flag: "🇪🇺", name: "Europe · Unlimited", meta: "6.8 GB of 10 GB left", state: "active", usage: 68, used: "6.8 / 10 GB", action: "Top up" },
    { flag: "🇺🇸", name: "USA · 3GB", meta: "Ended Nov 2", state: "expired", action: "Buy again" },
    { flag: "🇲🇽", name: "Mexico · 5GB", meta: "Refunded Oct 12 · $12.00 returned", state: "refunded" },
  ];
  return (
    <div className="relative flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="px-5 pt-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">My eSIMs</h1>
          <button
            onClick={() => setSheet("folders")}
            className="flex items-center gap-1.5 rounded-full border-2 border-gray-200 bg-white px-3 py-1.5 text-xs font-bold"
          >
            <FolderPlus className="h-3.5 w-3.5" /> Folders
          </button>
        </div>
        {/* filter by state + folder */}
        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {["All", "Active", "To activate", "Summer trip", "Work", "Archive"].map((f, i) => (
            <span
              key={f}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-bold ${i === 0 ? "bg-primary text-white" : "border-2 border-gray-200 bg-white text-gray-700"}`}
            >
              {i > 2 && <Folder className="h-3 w-3" />}{f}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 flex-1 space-y-2.5 overflow-y-auto px-5 pb-6">
        {esims.map((e, i) => {
          const s = ESIM_STATES[e.state];
          return (
            <div
              key={e.name}
              className={`rounded-2xl border-2 bg-white p-4 shadow-sm ${e.state === "active" ? "border-primary" : "border-gray-100"}`}
              style={{
                ...(e.state === "refunded" ? { opacity: 0.7 } : {}),
                animation: `olAppRise .45s cubic-bezier(.22,1,.36,1) ${i * 0.07}s both`,
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-start gap-2.5">
                  <span className="text-xl leading-none">{e.flag}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="truncate text-sm font-bold">{e.name}</p>
                      {/* rename (brief: edit icon next to the name) */}
                      <button onClick={() => setSheet("rename")} className="shrink-0">
                        <Pencil className="h-3 w-3 text-gray-400" />
                      </button>
                    </div>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">{e.meta}</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full px-2 py-0.5 font-semibold" style={{ background: s.bg, color: s.color, fontSize: 10 }}>
                  {s.label}
                </span>
              </div>

              {e.usage !== undefined && (
                <div className="mt-3">
                  <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${e.usage}%`, animation: "olAppFill 1s cubic-bezier(.22,1,.36,1) .3s both" }} />
                  </div>
                  <div className="mt-1 flex justify-between text-muted-foreground" style={{ fontSize: 10 }}>
                    <span>{e.used}</span><span>{100 - e.usage}% left</span>
                  </div>
                </div>
              )}

              {/* per-state actions */}
              {e.action && (
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => e.state === "toInstall" && setSheet("qr")}
                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-bold ${
                      e.state === "toActivate" || e.state === "active" ? "bg-primary text-white" : "border-2 border-gray-200 text-gray-700"
                    }`}
                  >
                    {e.state === "expired" && <RefreshCw className="h-3 w-3" />}
                    {e.state === "toInstall" && <QrCode className="h-3 w-3" />}
                    {e.action}
                  </button>
                  {/* a code that has not become an eSIM yet can still be gifted */}
                  {e.state === "toActivate" && (
                    <button className="flex items-center justify-center gap-1.5 rounded-lg border-2 border-gray-200 px-3 py-2.5 text-xs font-bold text-gray-700">
                      <Gift className="h-3.5 w-3.5" /> Gift
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <TabBar active="eSIMs" />

      {/* rename */}
      {sheet === "rename" && (
        <div className="absolute inset-0 z-30 flex items-center justify-center px-6" style={{ background: "rgba(15,17,21,0.45)" }} onClick={() => setSheet(null)}>
          <div className="w-full rounded-3xl bg-white p-5" onClick={(e) => e.stopPropagation()}>
            <p className="text-center text-lg font-bold">Rename this eSIM</p>
            <p className="mt-1 text-center text-xs text-muted-foreground">A name you'll recognise later - "Tokyo trip", "Work line"...</p>
            <div className="mt-4 rounded-2xl border-2 border-primary p-3">
              <p className="text-sm font-semibold">Japan · 10GB</p>
            </div>
            <button onClick={() => setSheet(null)} className="mt-3 w-full rounded-xl bg-primary py-3 text-sm font-bold text-white">Save name</button>
            <button onClick={() => setSheet(null)} className="mt-2 w-full rounded-xl py-2.5 text-sm font-semibold text-muted-foreground">Cancel</button>
          </div>
        </div>
      )}

      {/* folders: add + remove */}
      {sheet === "folders" && (
        <div className="absolute inset-0 z-30 flex items-end" style={{ background: "rgba(15,17,21,0.45)" }} onClick={() => setSheet(null)}>
          <div className="w-full rounded-t-3xl bg-white px-5 pb-8 pt-4" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gray-200" />
            <p className="font-bold">Folders</p>
            <p className="mt-1 text-xs text-muted-foreground">Group eSIMs by trip, client or anything else.</p>
            <div className="mt-3 space-y-2">
              {["Summer trip", "Work", "Archive"].map((f) => (
                <div key={f} className="flex items-center gap-3 rounded-2xl border-2 border-gray-100 p-3">
                  <Folder className="h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 flex-1 truncate text-sm font-semibold">{f}</span>
                  <button className="shrink-0"><Trash2 className="h-4 w-4 text-gray-400" /></button>
                </div>
              ))}
            </div>
            <button onClick={() => setSheet(null)} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white">
              <FolderPlus className="h-4 w-4" /> New folder
            </button>
          </div>
        </div>
      )}

      {/* QR for an activated-but-not-installed eSIM */}
      {sheet === "qr" && (
        <div className="absolute inset-0 z-30 flex items-center justify-center px-6" style={{ background: "rgba(15,17,21,0.45)" }} onClick={() => setSheet(null)}>
          <div className="w-full rounded-3xl bg-white p-5 text-center" onClick={(e) => e.stopPropagation()}>
            <p className="text-lg font-bold">Install your eSIM</p>
            <p className="mt-1 text-xs text-muted-foreground">Scan on the device you want to install it on.</p>
            <div className="mt-4 flex justify-center"><QRBlock size={140} /></div>
            <div className="mt-4 rounded-xl bg-gray-50 p-3 text-left">
              <p className="text-gray-400" style={{ fontSize: 9 }}>SM-DP+ ADDRESS</p>
              <p className="font-mono text-xs font-bold">consumer.e-sim.global</p>
              <p className="mt-2 text-gray-400" style={{ fontSize: 9 }}>ACTIVATION CODE</p>
              <p className="font-mono text-xs font-bold">K2-4RIVER-90MOUNT</p>
            </div>
            <button onClick={() => setSheet(null)} className="mt-3 w-full rounded-xl bg-primary py-3 text-sm font-bold text-white">Done</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------ PLANS · STEP 2 ------------------------------
   After picking a country: unlimited vs fixed package. */
function PlanTypeScreen() {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="flex items-center gap-3 px-5 pt-3">
        <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        <div>
          <h1 className="text-xl font-bold">🇯🇵 Japan</h1>
          <p className="text-xs text-muted-foreground">Step 2 of 3 · Choose plan type</p>
        </div>
      </div>
      <div className="flex-1 px-5" style={{ paddingTop: 20 }}>
        <div className="rounded-3xl border-2 border-primary bg-orange-50 p-5">
          <div className="flex items-start justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary"><InfinityIcon className="h-6 w-6 text-white" /></span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary"><Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /></span>
          </div>
          <p className="mt-3 font-['Play',sans-serif]" style={{ fontSize: 20 }}>Unlimited data</p>
          <p className="mt-1 text-sm text-muted-foreground">Full speed, no caps, no counting. Pick how many days you need.</p>
          <p className="mt-2 text-sm font-bold text-primary">from $3.60 / day</p>
        </div>
        <div className="mt-3 rounded-3xl border-2 border-gray-100 bg-white p-5 shadow-sm">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100"><Layers className="h-6 w-6 text-gray-600" /></span>
          <p className="mt-3 font-['Play',sans-serif]" style={{ fontSize: 20 }}>Fixed package</p>
          <p className="mt-1 text-sm text-muted-foreground">A set amount of data - 3, 5, 10 or 20 GB. Pay only for what you need.</p>
          <p className="mt-2 text-sm font-bold">from $8</p>
        </div>
      </div>
      <div className="px-5" style={{ paddingTop: 8, paddingBottom: 28 }}>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-bold text-white">
          Continue <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------ PLANS · STEP 3 ------------------------------
   Unlimited branch: pick the number of days (fixed branch would show
   package sizes here instead). */
function PlanDurationScreen() {
  const options = [
    { days: "7 days", price: "$25", per: "$3.60/day" },
    { days: "15 days", price: "$32", per: "$2.10/day" },
    { days: "30 days", price: "$39", per: "$1.30/day", selected: true, badge: "Best value" },
  ];
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="flex items-center gap-3 px-5 pt-3">
        <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        <div>
          <h1 className="text-xl font-bold">🇯🇵 Japan · Unlimited</h1>
          <p className="text-xs text-muted-foreground">Step 3 of 3 · How many days?</p>
        </div>
      </div>
      <div className="flex-1 space-y-2.5 px-5" style={{ paddingTop: 20 }}>
        {options.map((o) => (
          <div key={o.days} className={`flex items-center justify-between rounded-2xl border-2 p-4 ${o.selected ? "border-primary bg-orange-50" : "border-gray-100 bg-white shadow-sm"}`}>
            <div className="flex items-center gap-3">
              <span className={`flex h-5 w-5 items-center justify-center rounded-full ${o.selected ? "bg-primary" : "border-2 border-gray-300"}`}>
                {o.selected && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold">{o.days}</p>
                  {o.badge && <span className="rounded-full bg-primary px-1.5 py-0.5 font-bold text-white" style={{ fontSize: 9 }}>{o.badge.toUpperCase()}</span>}
                </div>
                <p className="text-xs text-muted-foreground">{o.per}</p>
              </div>
            </div>
            <p className={`font-['Play',sans-serif] text-xl ${o.selected ? "text-primary" : ""}`}>{o.price}</p>
          </div>
        ))}
        <p className="pt-1 text-center text-xs text-muted-foreground">Unlimited data · full speed · hotspot included</p>
      </div>
      <div className="px-5" style={{ paddingTop: 8, paddingBottom: 28 }}>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-bold text-white">
          Continue to checkout · $39
        </button>
      </div>
    </div>
  );
}

/* ---------------------------- SUCCESS · VIEW 1 ------------------------------
   Payment success + the purchase code, with the "activate now or later?"
   modal. View 2 (EsimProfileScreen) shows the profile once activated. */
function PaymentSuccessScreen() {
  /* Brief item 6: after a successful payment the user gets THREE options -
     activate now, activate later, or gift it to someone. "Gift it" opens a
     recipient-email modal; the ownership-transfer email itself is backend
     (Kerem) - the flow is mocked here end to end. */
  const [sheet, setSheet] = useState<null | "gift" | "later">(null);
  return (
    <div className="relative flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-5" style={{ paddingTop: 20 }}>
        <div className="flex flex-col items-center text-center">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
            style={{ animation: "olAppPop .55s cubic-bezier(.22,1,.36,1) both" }}
          >
            <Check className="h-8 w-8 text-green-600" strokeWidth={3} />
          </span>
          <h1 className="mt-4 text-2xl font-bold">Payment successful!</h1>
          <p className="mt-1 text-sm text-muted-foreground">Order #OL-28417 · Japan Unlimited · 30 days</p>
        </div>

        <div className="mt-4 rounded-3xl border-2 border-gray-100 bg-white p-4 shadow-sm">
          <p className="text-sm font-bold">Your purchase code</p>
          <div className="mt-2 flex items-center justify-between rounded-xl border border-orange-200 bg-orange-50 p-3">
            <p className="font-mono text-sm font-bold">MOUNT34-RIVER90-STONE67</p>
            <Copy className="h-4 w-4 shrink-0 text-primary" />
          </div>
          {/* padding fixed (brief item 6: this line sat too close to the block) */}
          <p className="text-xs text-muted-foreground" style={{ marginTop: 14, lineHeight: 1.6 }}>
            This code turns into your eSIM profile when you activate it. Activate
            now, or keep the code and do it when you're ready to travel.
          </p>
        </div>

        <p className="mb-2 mt-5 text-sm font-bold">What next?</p>
        <div className="space-y-2.5 pb-6">
          {[
            { key: "now", icon: QrCode, title: "Activate now", sub: "Show the QR code and install straight away", primary: true },
            { key: "later", icon: Clock, title: "Activate later", sub: "Keep the code - go to your dashboard" },
            { key: "gift", icon: Gift, title: "Gift it to someone", sub: "Send the code to a friend by email" },
          ].map(({ key, icon: Icon, title, sub, primary }) => (
            <button
              key={key}
              onClick={() => setSheet(key === "gift" ? "gift" : key === "later" ? "later" : null)}
              className={`flex w-full items-center gap-3 rounded-2xl p-3.5 text-left ${primary ? "bg-primary text-white" : "border-2 border-gray-200 bg-white"}`}
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${primary ? "bg-white/20" : "bg-orange-50"}`}>
                <Icon className={`${primary ? "text-white" : "text-primary"}`} style={{ width: 18, height: 18 }} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold">{title}</span>
                <span className={`block text-xs ${primary ? "text-white/80" : "text-muted-foreground"}`}>{sub}</span>
              </span>
              <ChevronRight className={`h-4 w-4 shrink-0 ${primary ? "text-white/70" : "text-gray-300"}`} />
            </button>
          ))}
        </div>
        <p className="flex items-center justify-center gap-1.5 pb-4 text-center text-xs text-muted-foreground">
          <Mail className="h-3.5 w-3.5" /> Code also sent to your email
        </p>
      </div>

      {/* gift flow - recipient email, then we email them a claim link */}
      {sheet === "gift" && (
        <div className="absolute inset-0 z-30 flex items-end" style={{ background: "rgba(15,17,21,0.45)" }} onClick={() => setSheet(null)}>
          <div className="w-full rounded-t-3xl bg-white px-5 pb-8 pt-4" onClick={(e) => e.stopPropagation()}>
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-gray-200" />
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
              <Gift className="h-6 w-6 text-primary" />
            </span>
            <p className="mt-3 text-center text-lg font-bold">Gift this eSIM</p>
            <p className="mt-1.5 text-center text-sm text-muted-foreground">
              We'll email them a link to take ownership of this purchase. They
              activate it whenever they want - the code stays unused until then.
            </p>
            <div className="mt-4 flex items-center gap-2 rounded-2xl border-2 border-gray-200 p-3">
              <Mail className="h-4 w-4 shrink-0 text-gray-400" />
              <div className="min-w-0 flex-1">
                <p className="text-gray-400" style={{ fontSize: 9 }}>Recipient's email</p>
                <p className="truncate text-sm font-semibold text-gray-300">friend@email.com</p>
              </div>
            </div>
            <button onClick={() => setSheet(null)} className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-white">
              <Share2 className="h-4 w-4" /> Send the gift
            </button>
            <button onClick={() => setSheet(null)} className="mt-2 w-full rounded-xl py-2.5 text-sm font-semibold text-muted-foreground">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* activate later confirmation */}
      {sheet === "later" && (
        <div className="absolute inset-0 z-30 flex items-center justify-center px-6" style={{ background: "rgba(15,17,21,0.45)" }} onClick={() => setSheet(null)}>
          <div className="w-full rounded-3xl bg-white p-5 text-center" onClick={(e) => e.stopPropagation()}>
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50">
              <Clock className="h-6 w-6 text-primary" />
            </span>
            <p className="mt-3 text-lg font-bold">Saved for later</p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Your code is in My eSIMs and in your inbox. Nothing starts counting
              until you activate it.
            </p>
            <button onClick={() => setSheet(null)} className="mt-4 w-full rounded-xl bg-primary py-3 text-sm font-bold text-white">
              Go to my eSIMs
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------------------- SUCCESS · VIEW 2 ------------------------------
   The eSIM profile, once the purchase code has been activated. */
function EsimProfileScreen() {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="flex-1 overflow-y-auto px-5" style={{ paddingTop: 16 }}>
        <div className="flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <PartyPopper className="h-7 w-7 text-green-600" />
          </span>
          <h1 className="mt-3 text-2xl font-bold">Your eSIM is ready</h1>
          <p className="mt-1 text-sm text-muted-foreground">Code activated - install the profile to get online</p>
        </div>

        <div className="mt-3 rounded-3xl border-2 border-gray-100 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇯🇵</span>
              <div>
                <p className="font-bold">Japan · Unlimited</p>
                <p className="text-xs text-muted-foreground">30 days · starts on install</p>
              </div>
            </div>
            <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">Activated</span>
          </div>
          <div className="mt-3 flex justify-center rounded-2xl bg-gray-50 p-3">
            <QRBlock size={100} />
          </div>
          {/* Real-world lengths, tap to reveal and copy. Manual install needs
              all three, so all three have to be gettable off this screen. */}
          <div className="mt-2.5">
            <CopyableField label="ICCID" value="8944478100001234567" mask="8944 ··· 4567" />
            <CopyableField label="SM-DP+ address" value="consumer.rsp.openline.com" mask="consumer.rsp···" />
            <CopyableField label="Activation code" value="TN202612040982590B44A913" mask="TN2026···A913" />
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-white">
            <Download className="h-4 w-4" /> Add eSIM to this device
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-200 py-3 font-semibold">
            <Wallet className="h-4 w-4" /> Save to Apple Wallet
          </button>
        </div>
      </div>
      <div className="px-5" style={{ paddingTop: 8, paddingBottom: 24 }}>
        <button className="w-full text-center text-sm font-semibold text-primary">Go to my eSIMs</button>
      </div>
    </div>
  );
}

interface MobileScreensPageProps {
  onNavigate?: (section: string) => void;
}

/* ---------------------------------- ME -------------------------------------
   Brief item 8: the "Me" tab and settings were missing entirely. */
function MeScreen() {
  const stats = [
    ["12", "eSIMs"],
    ["8", "countries"],
    ["$142", "saved"],
  ] as const;
  const rows = [
    { icon: CreditCard, label: "Payment methods", sub: "Visa ·••• 4242" },
    { icon: Gift, label: "Referrals", sub: "3 friends joined · $45 earned" },
    { icon: Folder, label: "Folders", sub: "Summer trip, Work, Archive" },
    { icon: Settings, label: "Settings", sub: "Notifications, data, account" },
    { icon: Headset, label: "Help & support", sub: "Chat, guides, device check" },
  ];
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="px-5 pt-3">
        <h1 className="text-2xl font-bold">Me</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-4 pt-3">
        {/* identity card */}
        <div className="rounded-3xl border-2 border-gray-100 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">A</span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-bold">Alex Rivera</p>
              <p className="truncate text-xs text-muted-foreground">alex@email.com</p>
            </div>
            <span className="shrink-0 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-bold text-primary">Openline+</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-gray-100 pt-3">
            {stats.map(([big, label]) => (
              <div key={label} className="text-center">
                <p className="font-['Play',sans-serif] text-lg font-bold">{big}</p>
                <p className="text-muted-foreground" style={{ fontSize: 10 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* menu */}
        <div className="mt-3 overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-sm">
          {rows.map(({ icon: Icon, label, sub }, i) => (
            <div key={label} className={`flex items-center gap-3 p-3.5 ${i > 0 ? "border-t border-gray-100" : ""}`}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                <Icon className="h-4 w-4 text-gray-600" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block truncate text-xs text-muted-foreground">{sub}</span>
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-gray-300" />
            </div>
          ))}
        </div>

        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white py-3 text-sm font-semibold text-gray-600">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
      <TabBar active="Me" />
    </div>
  );
}


/* Small form-control primitives used by the settings reference section.
   Real state, so checked/pressed styling can be judged on a device. */
function CheckboxRow({ label, defaultChecked = false, disabled = false }: {
  label: string; defaultChecked?: boolean; disabled?: boolean;
}) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => setOn(!on)}
      className="mt-2.5 flex w-full items-center gap-2.5 text-left"
      style={{ opacity: disabled ? 0.45 : 1 }}
    >
      <span
        className="flex shrink-0 items-center justify-center rounded-md border-2"
        style={{
          width: 21, height: 21,
          background: on && !disabled ? "#FF5314" : "#FFFFFF",
          borderColor: on && !disabled ? "#FF5314" : "#D1D5DB",
        }}
      >
        {on && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function RadioGroupRows({ name, options }: { name: string; options: string[] }) {
  const [sel, setSel] = useState(0);
  return (
    <div role="radiogroup" aria-label={name}>
      {options.map((o, i) => (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={sel === i}
          onClick={() => setSel(i)}
          className="mt-2.5 flex w-full items-center gap-2.5 text-left"
        >
          <span
            className="flex shrink-0 items-center justify-center rounded-full border-2"
            style={{ width: 21, height: 21, borderColor: sel === i ? "#FF5314" : "#D1D5DB" }}
          >
            {sel === i && <span className="rounded-full" style={{ width: 11, height: 11, background: "#FF5314" }} />}
          </span>
          <span className="text-sm font-medium">{o}</span>
        </button>
      ))}
    </div>
  );
}


/* Tap-to-reveal / tap-to-copy field for eSIM credentials (client request 14/9).

   These are long in reality - a 19-digit ICCID, a full SM-DP+ hostname, and a
   ~24-character activation code - and the screen previously showed a truncated
   ICCID, no activation code at all, and nothing you could copy. Collapsed by
   default so the card stays readable; one tap reveals the full value, wraps it,
   and copies it. */
function CopyableField({ label, value, mask }: { label: string; value: string; mask?: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const tap = () => {
    setOpen(true);
    try {
      navigator.clipboard?.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked (insecure context / denied) - the reveal still works */
    }
  };

  return (
    <button type="button" onClick={tap} className="mt-1.5 w-full text-left">
      <span className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">{label}</span>
        <span className="flex min-w-0 items-center gap-1.5">
          {!open && <span className="truncate font-mono text-xs font-semibold">{mask ?? value}</span>}
          <span className="shrink-0 text-primary">
            {copied ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <Copy className="h-3.5 w-3.5" />}
          </span>
        </span>
      </span>
      {open && (
        <span
          className="mt-1 block break-all rounded-lg bg-gray-50 px-2 py-1.5 font-mono font-semibold"
          style={{ fontSize: 10.5, lineHeight: 1.5 }}
        >
          {value}
        </span>
      )}
      {copied && <span className="mt-0.5 block text-primary" style={{ fontSize: 9.5 }}>Copied to clipboard</span>}
    </button>
  );
}


/* ----------------------- CONNECTION / SLOW NETWORK -------------------------
   Client request 14/9: a loading state for when signal is poor and a screen
   takes time to arrive. Built as a low-opacity scrim over the screen you came
   from rather than a blank page, so context is never lost - and it reuses the
   Openline mark as the spinner, as asked.

   Two states on one screen so the app team can see both: "slow" (still trying)
   and "offline" (nothing to try with).
   --------------------------------------------------------------------------- */
function ConnectionMark({ size = 72 }: { size?: number }) {
  const r = size / 2 - 5;
  return (
    <span className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: "absolute", inset: 0, animation: "olAppOrbit 1.9s linear infinite" }}
        aria-hidden
      >
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,83,20,.16)" strokeWidth={4} />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke="#FF5314" strokeWidth={4} strokeLinecap="round"
          strokeDasharray={2 * Math.PI * r}
          style={{ animation: "olAppTrack 1.9s ease-in-out infinite" }}
        />
      </svg>
      <img
        src={openlineLogo}
        alt=""
        style={{ width: size * 0.42, height: "auto", animation: "olAppBreathe 2.2s ease-in-out infinite" }}
      />
    </span>
  );
}

function ConnectionScreen() {
  const [offline, setOffline] = useState(false);
  return (
    <div className="relative flex h-full flex-col bg-gray-50">
      {/* the screen you were on, still there underneath */}
      <div style={{ filter: "blur(2px)", opacity: 0.4, pointerEvents: "none" }} className="flex h-full flex-col">
        <DashboardScreen />
      </div>

      {/* the scrim */}
      <div className="absolute inset-0 flex items-center justify-center px-6" style={{ background: "rgba(255,255,255,0.72)" }}>
        <div className="w-full rounded-3xl border-2 border-gray-100 bg-white p-6 text-center shadow-xl">
          {offline ? (
            <span className="mx-auto flex items-center justify-center rounded-full bg-gray-100" style={{ width: 72, height: 72 }}>
              <Wifi className="h-8 w-8 text-gray-400" />
            </span>
          ) : (
            <span className="mx-auto block w-fit"><ConnectionMark /></span>
          )}

          <p className="mt-4 text-base font-bold">
            {offline ? "No connection" : "Taking longer than usual"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {offline
              ? "We'll pick up where you left off as soon as you're back online."
              : "Weak signal. Still loading - your data is safe."}
          </p>

          {offline && (
            <button className="mt-4 w-full rounded-xl py-3 text-sm font-bold text-white" style={{ background: "#FF5314" }}>
              Try again
            </button>
          )}
          <button
            onClick={() => setOffline(!offline)}
            className="mt-2 w-full rounded-xl border-2 border-gray-200 py-2.5 text-xs font-semibold text-muted-foreground"
          >
            Preview: show {offline ? "slow connection" : "offline"} state
          </button>
        </div>
      </div>
    </div>
  );
}


/* ============================ VARIANT STATES ==============================
   Client request A3 (14 Sep): show as many options and variants as possible so
   they can be validated before the build, instead of surfacing mid-TestFlight
   as another review round. These are the states that get discovered late:
   empty, failed, denied, and dense.
   ========================================================================== */
function VariantShell({ title, children, tab = "eSIMs" }: { title: string; children: React.ReactNode; tab?: string }) {
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="px-5 pt-3"><h1 className="text-2xl font-bold">{title}</h1></div>
      <div className="flex-1 overflow-y-auto px-5 pb-6 pt-4">{children}</div>
      <TabBar active={tab} />
    </div>
  );
}

function EsimsEmptyScreen() {
  return (
    <VariantShell title="My eSIMs">
      <div className="flex h-full flex-col items-center justify-center text-center" style={{ minHeight: 380 }}>
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
          <Globe className="h-8 w-8 text-primary" />
        </span>
        <p className="mt-4 text-base font-bold">No eSIMs yet</p>
        <p className="mt-1 text-sm text-muted-foreground" style={{ maxWidth: 220 }}>Pick a destination and you will be online in about 30 seconds.</p>
        <button className="mt-5 rounded-xl px-5 py-3 text-sm font-bold text-white" style={{ background: "#FF5314" }}>Browse destinations</button>
        <button className="mt-2 text-xs font-semibold text-primary">I have a purchase code</button>
      </div>
    </VariantShell>
  );
}

function CountriesNoResultsScreen() {
  return (
    <VariantShell title="Where to?" tab="Plans">
      <div className="flex items-center gap-2 rounded-xl border-2 border-primary bg-white px-4 py-3">
        <Search className="h-4 w-4 text-gray-400" /><span className="text-sm">Atlantis</span>
      </div>
      <div className="mt-8 text-center">
        <p className="text-base font-bold">Nothing for "Atlantis"</p>
        <p className="mt-1 text-sm text-muted-foreground">We cover 190+ countries. Try a nearby one, or check the spelling.</p>
      </div>
      <p className="mb-2 mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Did you mean</p>
      {[["🇬🇷", "Greece", "$9"], ["🇵🇹", "Portugal", "$8"], ["🇲🇹", "Malta", "$9"]].map(([f, n, pr]) => (
        <div key={n} className="mb-2 flex items-center justify-between rounded-2xl border-2 border-gray-100 bg-white p-3.5">
          <span className="flex items-center gap-2.5 text-sm font-semibold"><span className="text-lg">{f}</span>{n}</span>
          <span className="text-sm font-bold text-primary">from {pr}</span>
        </div>
      ))}
    </VariantShell>
  );
}

function CheckoutDeclinedScreen() {
  return (
    <VariantShell title="Checkout" tab="Plans">
      <div className="rounded-2xl border-2 bg-white p-4" style={{ borderColor: "#FCA5A5", background: "#FEF2F2" }}>
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: "#DC2626" }}>
            <X className="h-4 w-4 text-white" strokeWidth={3} />
          </span>
          <div>
            <p className="text-sm font-bold" style={{ color: "#991B1B" }}>Payment declined</p>
            <p className="mt-0.5 text-xs" style={{ color: "#B91C1C" }}>Your bank did not approve the charge. Nothing was taken. Try another method or contact your bank.</p>
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-2xl border-2 border-gray-100 bg-white p-4">
        <div className="flex items-center justify-between"><p className="text-sm font-bold">Japan · 10GB</p><p className="text-sm font-bold">$12.00</p></div>
        <p className="mt-0.5 text-xs text-muted-foreground">30 days · starts on install</p>
      </div>
      <p className="mb-2 mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">Try another way</p>
      {[["Apple Pay", "Instant"], ["Visa ···· 4242", "Retry this card"], ["PayPal", "Redirects to PayPal"]].map(([n, sub], i) => (
        <div key={n} className={`mb-2 flex items-center justify-between rounded-2xl border-2 bg-white p-3.5 ${i === 0 ? "border-primary" : "border-gray-100"}`}>
          <span><span className="block text-sm font-semibold">{n}</span><span className="block text-xs text-muted-foreground">{sub}</span></span>
          <ChevronRight className="h-4 w-4 text-gray-300" />
        </div>
      ))}
      <button className="mt-3 w-full rounded-xl py-3.5 text-sm font-bold text-white" style={{ background: "#FF5314" }}>Retry with Apple Pay</button>
    </VariantShell>
  );
}

function LoginErrorScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <StatusBar />
      <div className="flex-1 px-6 pt-6">
        <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        <h1 className="mt-6 text-2xl font-bold">Check your email</h1>
        <p className="mt-1 text-sm text-muted-foreground">We sent a 6-digit code to <b className="text-foreground">alex@example.com</b></p>
        <div className="mt-6 flex justify-between gap-2">
          {["4", "8", "2", "1", "9", "0"].map((d, i) => (
            <span key={i} className="flex h-12 flex-1 items-center justify-center rounded-xl border-2 text-lg font-bold" style={{ borderColor: "#DC2626", background: "#FEF2F2", color: "#991B1B" }}>{d}</span>
          ))}
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#DC2626" }}>
          <X className="h-3.5 w-3.5" strokeWidth={3} /> That code is not right. 2 attempts left.
        </p>
        <button className="mt-6 w-full rounded-xl py-3.5 text-sm font-bold text-white" style={{ background: "#FF5314" }}>Try again</button>
        <button className="mt-3 w-full text-center text-xs font-semibold text-primary">Send a new code</button>
      </div>
    </div>
  );
}

function EsimsLongListScreen() {
  const rows = [
    ["🇯🇵", "Japan · Unlimited", "active", "4.1 GB used"], ["🇹🇭", "Thailand · 5GB", "active", "1.2 GB used"],
    ["🇪🇺", "Europe · 20GB", "toInstall", "Activated · not installed"], ["🇺🇸", "USA · 10GB", "toActivate", "Purchase code"],
    ["🇰🇷", "South Korea · 3GB", "active", "0.4 GB used"], ["🇻🇳", "Vietnam · 5GB", "expired", "Ended Aug 2"],
    ["🇸🇬", "Singapore · 1GB", "expired", "Ended Jul 19"], ["🇲🇽", "Mexico · 5GB", "refunded", "Refunded Jun 30"],
    ["🇨🇦", "Canada · 3GB", "expired", "Ended May 3"],
  ] as const;
  return (
    <VariantShell title="My eSIMs">
      <p className="mb-3 text-xs text-muted-foreground" style={{ marginTop: -8 }}>9 eSIMs · scroll to check density and the state chips at volume</p>
      {rows.map(([f, n, st, meta]) => {
        const sm = ESIM_STATES[st];
        return (
          <div key={n} className="mb-2 flex items-center justify-between rounded-2xl border-2 border-gray-100 bg-white p-3">
            <span className="flex min-w-0 items-center gap-2.5">
              <span className="text-lg">{f}</span>
              <span className="min-w-0"><span className="block truncate text-sm font-bold">{n}</span><span className="block truncate text-xs text-muted-foreground">{meta}</span></span>
            </span>
            <span className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: sm.bg, color: sm.color }}>{sm.label}</span>
          </div>
        );
      })}
    </VariantShell>
  );
}

function PermissionPromptScreen() {
  return (
    <div className="relative flex h-full flex-col bg-gray-50">
      <div style={{ filter: "blur(2px)", opacity: 0.45, pointerEvents: "none" }} className="flex h-full flex-col"><DashboardScreen /></div>
      <div className="absolute inset-0 flex items-end" style={{ background: "rgba(0,0,0,0.35)" }}>
        <div className="w-full rounded-t-3xl bg-white p-5 pb-8">
          <span className="mx-auto block h-1 w-10 rounded-full bg-gray-200" />
          <span className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50">
            <Bell className="h-7 w-7 text-primary" />
          </span>
          <p className="mt-4 text-center text-lg font-bold">Know before you run out</p>
          <p className="mx-auto mt-1 text-center text-sm text-muted-foreground" style={{ maxWidth: 250 }}>We will tell you at 50%, 80% and 100% of your data, and when a plan is about to end. Nothing else.</p>
          <button className="mt-5 w-full rounded-xl py-3.5 text-sm font-bold text-white" style={{ background: "#FF5314" }}>Allow notifications</button>
          <button className="mt-2 w-full py-2.5 text-sm font-semibold text-muted-foreground">Not now</button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------- SETTINGS ---------------------------------- */
function SettingsScreen() {
  const toggles = [
    { icon: Bell, label: "Data usage alerts", sub: "At 50%, 80% and 100%", on: true },
    { icon: RefreshCw, label: "Auto network switching", sub: "Always pick the best signal", on: true },
    { icon: ShieldCheck, label: "Ad & tracker blocking", sub: "On every plan", on: true },
    { icon: Bell, label: "Marketing emails", sub: "Offers and travel tips", on: false },
  ];
  return (
    <div className="flex h-full flex-col bg-gray-50">
      <StatusBar />
      <div className="flex items-center gap-3 px-5 pt-3">
        <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
        <h1 className="text-xl font-bold">Settings</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-6 pt-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Preferences</p>
        <div className="overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-sm">
          {toggles.map(({ icon: Icon, label, sub, on }, i) => (
            <div key={label} className={`flex items-center gap-3 p-3.5 ${i > 0 ? "border-t border-gray-100" : ""}`}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100">
                <Icon className="h-4 w-4 text-gray-600" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block truncate text-xs text-muted-foreground">{sub}</span>
              </span>
              {/* switch */}
              <span
                className="relative shrink-0 rounded-full"
                style={{ width: 40, height: 23, background: on ? "#FF5314" : "#E5E7EB" }}
              >
                <span
                  className="absolute rounded-full bg-white shadow"
                  style={{ width: 19, height: 19, top: 2, left: on ? 19 : 2 }}
                />
              </span>
            </div>
          ))}
        </div>

        <p className="mb-2 mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">Account</p>
        <div className="overflow-hidden rounded-3xl border-2 border-gray-100 bg-white shadow-sm">
          {[
            ["Language", "English"],
            ["Currency", "USD ($)"],
            ["Privacy & data", "Manage"],
          ].map(([label, value], i) => (
            <div key={label} className={`flex items-center justify-between p-3.5 ${i > 0 ? "border-t border-gray-100" : ""}`}>
              <span className="text-sm font-semibold">{label}</span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                {value} <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
          ))}
        </div>
        {/* Form-control reference (client request 2/9): the input types the
            app team will need, in app styling, so they can be reviewed on a
            real device before anyone builds a form with them. Live state, so
            the pressed/checked treatments are checkable by touch. */}
        <p className="mb-2 mt-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">Form elements</p>
        <div className="rounded-3xl border-2 border-gray-100 bg-white p-3.5 shadow-sm">
          <label className="block text-xs font-semibold text-muted-foreground">Display name</label>
          <input
            type="text"
            defaultValue="Paul Fleury"
            className="ol-app-input mt-1.5 w-full rounded-xl border-2 border-gray-200 bg-white px-3 text-sm font-medium outline-none"
            style={{ height: 42 }}
          />

          <label className="mt-3.5 block text-xs font-semibold text-muted-foreground">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="ol-app-input mt-1.5 w-full rounded-xl border-2 border-gray-200 bg-white px-3 text-sm font-medium outline-none"
            style={{ height: 42 }}
          />

          <label className="mt-3.5 block text-xs font-semibold text-muted-foreground">Tell us about your trip</label>
          <textarea
            rows={3}
            placeholder="Where are you heading?"
            className="ol-app-input mt-1.5 w-full resize-none rounded-xl border-2 border-gray-200 bg-white p-3 text-sm font-medium outline-none"
          />

          <label className="mt-3.5 block text-xs font-semibold text-muted-foreground">Select a country</label>
          <div className="relative mt-1.5">
            <select
              className="ol-app-input w-full appearance-none rounded-xl border-2 border-gray-200 bg-white px-3 text-sm font-medium outline-none"
              style={{ height: 42 }}
              defaultValue="jp"
            >
              <option value="jp">🇯🇵 Japan</option>
              <option value="pt">🇵🇹 Portugal</option>
              <option value="sg">🇸🇬 Singapore</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="mt-3 rounded-3xl border-2 border-gray-100 bg-white p-3.5 shadow-sm">
          <p className="text-xs font-semibold text-muted-foreground">Checkboxes</p>
          <CheckboxRow label="Email me my purchase code" defaultChecked />
          <CheckboxRow label="Auto top-up at 10% remaining" />
          <CheckboxRow label="Unavailable on this plan" disabled />

          <p className="mt-4 text-xs font-semibold text-muted-foreground">Radio</p>
          <RadioGroupRows
            name="plan-kind"
            options={["Unlimited data", "Fixed package", "Pay as you go"]}
          />
        </div>

        <div className="mt-3 rounded-3xl border-2 border-gray-100 bg-white p-3.5 shadow-sm">
          <p className="mb-2.5 text-xs font-semibold text-muted-foreground">Buttons</p>
          <button
            className="w-full rounded-xl text-sm font-bold text-white active:brightness-95"
            style={{ height: 46, background: "#FF5314" }}
          >
            Primary action
          </button>
          <button
            className="mt-2 w-full rounded-xl border-2 border-gray-900 bg-white text-sm font-bold active:bg-gray-50"
            style={{ height: 46 }}
          >
            Secondary
          </button>
          <div className="mt-2 flex gap-2">
            <button className="flex-1 rounded-xl border-2 border-gray-200 bg-white text-xs font-bold text-gray-600 active:bg-gray-50" style={{ height: 40 }}>
              Tertiary
            </button>
            <button className="flex-1 rounded-xl text-xs font-bold text-white active:brightness-95" style={{ height: 40, background: "#DC2626" }}>
              Destructive
            </button>
          </div>
          <button
            disabled
            className="mt-2 w-full cursor-not-allowed rounded-xl bg-gray-100 text-sm font-bold text-gray-400"
            style={{ height: 46 }}
          >
            Disabled
          </button>
        </div>

        <p className="mt-4 text-center text-muted-foreground" style={{ fontSize: 10 }}>Openline Mobile · v2.4.1</p>
      </div>
      <TabBar active="Me" />
    </div>
  );
}

/* ---------------------------------------------------------------------------
   DEVICE VIEW (client request 2/9)

   The gallery lays all twelve screens side by side, which is right on a desktop
   and useless on a phone - the frames end up smaller than the phone showing
   them. This mode renders ONE screen scaled to fill the actual viewport, with a
   switcher, so the screens can be reviewed at true size on a real handset.

   The screen is rendered at its native 340x700 and scaled with a transform, so
   every layout inside stays pixel-exact instead of reflowing at a new width -
   what you judge on the phone is what the gallery shows.
   --------------------------------------------------------------------------- */
function DeviceView({
  screens, index, setIndex, onExit,
}: {
  screens: { label: string; node: React.ReactNode }[];
  index: number;
  setIndex: (n: number) => void;
  onExit: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [pickerOpen, setPickerOpen] = useState(false);
  const CHROME = 116;                       // switcher bar + label

  React.useEffect(() => {
    const fit = () => {
      const w = window.innerWidth - 24;
      const h = window.innerHeight - CHROME;
      setScale(Math.min(w / SCREEN_W, h / SCREEN_H, 1.25));
    };
    fit();
    window.addEventListener("resize", fit);
    window.addEventListener("orientationchange", fit);
    return () => {
      window.removeEventListener("resize", fit);
      window.removeEventListener("orientationchange", fit);
    };
  }, []);

  const go = (d: number) => setIndex((index + d + screens.length) % screens.length);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gray-100" style={{ overscrollBehavior: "contain" }}>
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-3" style={{ height: 46 }}>
        <button onClick={onExit} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600">
          <ArrowLeft className="h-4 w-4" /> Gallery
        </button>
        <button
          onClick={() => setPickerOpen(!pickerOpen)}
          className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-bold"
        >
          {index + 1}/{screens.length} · {screens[index].label}
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
        <span style={{ width: 58 }} />
      </div>

      {/* the screen, scaled to the device */}
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <div style={{ width: SCREEN_W * scale, height: SCREEN_H * scale }}>
          <div
            className="ol-app-motion flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg"
            style={{
              width: SCREEN_W, height: SCREEN_H,
              transform: `scale(${scale})`, transformOrigin: "top left",
            }}
          >
            {screens[index].node}
          </div>
        </div>
      </div>

      {/* switcher */}
      <div className="flex items-center justify-between gap-2 border-t border-gray-200 bg-white px-3" style={{ height: 70, paddingBottom: "env(safe-area-inset-bottom)" }}>
        <button
          onClick={() => go(-1)}
          className="flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white active:bg-gray-50"
          style={{ width: 58, height: 44 }}
          aria-label="Previous screen"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="min-w-0 flex-1 truncate text-center text-sm font-bold">{screens[index].label}</span>
        <button
          onClick={() => go(1)}
          className="flex items-center justify-center rounded-xl text-white active:brightness-95"
          style={{ width: 58, height: 44, background: "#FF5314" }}
          aria-label="Next screen"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* jump-to picker */}
      {pickerOpen && (
        <div className="absolute inset-0 z-10 bg-black/40" onClick={() => setPickerOpen(false)}>
          <div
            className="absolute overflow-hidden rounded-2xl bg-white shadow-2xl"
            style={{ top: 52, left: 12, right: 12, maxHeight: "72vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            {screens.map((sc, i) => (
              <button
                key={sc.label}
                onClick={() => { setIndex(i); setPickerOpen(false); }}
                className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm ${i > 0 ? "border-t border-gray-100" : ""}`}
                style={{ background: i === index ? "#FFF4F0" : "#fff", fontWeight: i === index ? 700 : 500 }}
              >
                {sc.label}
                {i === index && <Check className="h-4 w-4" style={{ color: "#FF5314" }} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function MobileScreensPage({ onNavigate }: MobileScreensPageProps) {
  const screens = [
    { label: "Login", node: <LoginScreen /> },
    { label: "Dashboard", node: <DashboardScreen /> },
    { label: "My eSIMs", node: <EsimsListScreen /> },
    { label: "Countries", node: <CountriesScreen /> },
    { label: "Plans · 1 · country", node: <PlansScreen /> },
    { label: "Plans · 2 · package type", node: <PlanTypeScreen /> },
    { label: "Plans · 3 · options", node: <PlanDurationScreen /> },
    { label: "Checkout", node: <CheckoutScreen /> },
    { label: "Payment success + code", node: <PaymentSuccessScreen /> },
    { label: "eSIM profile (activated)", node: <EsimProfileScreen /> },
    { label: "Me", node: <MeScreen /> },
    { label: "Settings", node: <SettingsScreen /> },
    { label: "Slow connection / offline", node: <ConnectionScreen /> },
    /* variant states (A3) - the ones that get discovered mid-build */
    { label: "Variant · No eSIMs yet", node: <EsimsEmptyScreen /> },
    { label: "Variant · Search, no results", node: <CountriesNoResultsScreen /> },
    { label: "Variant · Payment declined", node: <CheckoutDeclinedScreen /> },
    { label: "Variant · Wrong login code", node: <LoginErrorScreen /> },
    { label: "Variant · 9 eSIMs, dense list", node: <EsimsLongListScreen /> },
    { label: "Variant · Notifications prompt", node: <PermissionPromptScreen /> },
  ];

  /* Open straight into device view on a phone, or when the URL says so -
     ?view=device&screen=settings, so a single link can be sent to a handset. */
  const [device, setDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    if (LAUNCH_QUERY.get("view") === "device") return true;
    if (LAUNCH_QUERY.get("view") === "gallery") return false;
    return window.innerWidth < 820;
  });
  const [index, setIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const want = LAUNCH_QUERY.get("screen");
    if (!want) return 0;
    const norm = (x: string) => x.toLowerCase().replace(/[^a-z0-9]/g, "");
    const exact = screens.findIndex((s) => norm(s.label) === norm(want));
    const i = exact >= 0 ? exact : screens.findIndex((s) => norm(s.label).includes(norm(want)));
    return i < 0 ? 0 : i;
  });

  if (device) {
    return (
      <>
        <AppScreenStyles />
        <DeviceView screens={screens} index={index} setIndex={setIndex} onExit={() => setDevice(false)} />
      </>
    );
  }

  return (
    <main className="bg-white">
      <AppScreenStyles />
      <section className="px-5 md:px-12" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="mx-auto max-w-6xl">
          <button onClick={() => onNavigate?.("app")} className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Openline Mobile
          </button>
          <h1 className="text-4xl font-bold md:text-5xl">The mobile app, screen by screen.</h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            The core screens re-skinned for Openline Mobile - direct extensions of our real app UI. Ready to hand to the app team as the starting template.
          </p>

          <button
            onClick={() => setDevice(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-gray-900 bg-white px-4 py-2.5 text-sm font-bold active:bg-gray-50"
          >
            <Smartphone className="h-4 w-4" /> Open on-device view
          </button>
          <p className="mt-2 text-xs text-muted-foreground">
            One screen at a time, scaled to the viewport, with a switcher. Opens automatically on a phone.
          </p>

          <div className="mt-12 flex flex-wrap justify-center md:justify-start" style={{ gap: 40 }}>
            {screens.map((s) => (
              <ScreenPanel key={s.label} label={s.label}>{s.node}</ScreenPanel>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
