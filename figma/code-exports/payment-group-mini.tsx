import svgPaths from "./svg-25upigwq69";

function Group() {
  return (
    <div className="absolute inset-[0_73.12%_19.54%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49635 9.2135">
        <g id="Group">
          <path d={svgPaths.p255b0000} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pc1e4e40} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[5.65%_0_0_35.67%]" data-name="Group">
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

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group />
      <Group1 />
    </div>
  );
}