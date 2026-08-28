import svgPaths from "./svg-48tva1fk9k";

function Component() {
  return (
    <div className="absolute inset-[4.76%_28.98%_45.24%_28.51%]" data-name="编组">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9017 10.5">
        <g id="ç¼ç»">
          <path d={svgPaths.p1b728500} fill="var(--fill-0, #1AAD19)" id="Fill-29" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute contents inset-[4.76%_28.98%_45.24%_28.51%]" data-name="画板">
      <Component />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute contents inset-[4.76%_28.98%_45.24%_28.51%]" data-name="页面-1">
      <Component2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[4.76%_28.98%_45.24%_28.51%]">
      <Component1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[4.76%_28.98%_45.24%_28.51%]">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[5.027px] left-[calc(50%+0.08px)] top-[calc(50%+5.97px)] translate-x-[-50%] translate-y-[-50%] w-[28.055px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0549 5.02717">
        <g id="Group 12">
          <path d={svgPaths.pa570a00} fill="var(--fill-0, #1AAD19)" id="å½¢ç¶ç»å" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[calc(50%+0.08px)] top-[calc(50%+5.97px)] translate-x-[-50%] translate-y-[-50%]">
      <Group4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[28px]">
      <Group3 />
      <Group5 />
    </div>
  );
}

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

function Frame() {
  return (
    <div className="absolute h-[11.45px] left-[44px] top-[4.77px] w-[27.893px]">
      <Group />
      <Group1 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <Frame1 />
      <Frame />
    </div>
  );
}