import imgEurope from "figma:asset/3c60a20fc53b5cd23230001defc942f424aa79fe.png";
import imgAsia from "figma:asset/c88ebfc43375088038c010e070a6fd16bba64441.png";
import imgAmerica from "figma:asset/7b6bfd8b358dae931aa8eae5fb2202158a5ae003.png";
import imgAfrica from "figma:asset/d33a861cc9f6990114e9208193eb7860779e8374.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[2793px] left-0 top-0 w-[2731px]" data-name="europe">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[146.65%] left-0 max-w-none top-[-46.65%] w-full" src={imgEurope} />
        </div>
      </div>
      <div className="absolute h-[2731px] left-[3310px] top-[62px] w-[3130px]" data-name="asia">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-17.22%] max-w-none top-0 w-[130.86%]" src={imgAsia} />
        </div>
      </div>
      <div className="absolute h-[2304px] left-[871px] top-[2833px] w-[2612px]" data-name="america">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-33.35%] max-w-none top-0 w-[156.81%]" src={imgAmerica} />
        </div>
      </div>
      <div className="absolute h-[3276px] left-[4690px] top-[2833px] w-[3542px]" data-name="africa">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-15.64%] max-w-none top-0 w-[115.64%]" src={imgAfrica} />
        </div>
      </div>
    </div>
  );
}