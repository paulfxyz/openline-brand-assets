import imgAirtelEmblem from "figma:asset/f6427f94f2eead9dfe6b94ba14ec94b9a6c4fc49.png";
import imgPlayTelecommunicationsLogo2013 from "figma:asset/58713c80b4b7c293abe54fbb1d0e7d3170bdebdd.png";
import imgTurkcellLogoBrandlogosNetPyzuv from "figma:asset/ce6fb4e18857f2dadd24962120d89cc294fec64e.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[112.5px] left-0 top-0 w-[200px]" data-name="Airtel-Emblem">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAirtelEmblem} />
      </div>
      <div className="absolute h-[64.677px] left-[507px] top-[477px] w-[200px]" data-name="Play_Telecommunications_logo_2013">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlayTelecommunicationsLogo2013} />
      </div>
      <div className="absolute h-[44.972px] left-[1081px] top-0 w-[200px]" data-name="turkcell-logo_brandlogos.net_pyzuv">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTurkcellLogoBrandlogosNetPyzuv} />
      </div>
    </div>
  );
}