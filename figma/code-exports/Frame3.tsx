import img1 from "figma:asset/f14c8c8f2f7f82ac47398b3eb380d970c315e931.png";
import img2 from "figma:asset/ea923ef302cbbf31df0f6c78e0c8e0a07ab879f7.png";

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[2732px] left-0 top-[132px] w-[4096px]" data-name="1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute h-[3132px] left-[4601px] top-0 w-[2731px]" data-name="2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.78%] left-0 max-w-none top-[-30.78%] w-full" src={img2} />
        </div>
      </div>
    </div>
  );
}