import svgPaths from "./svg-mc39lo0s3l";

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

function Group() {
  return (
    <div className="absolute contents inset-[4.76%_28.98%_45.24%_28.51%]">
      <Component1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[4.76%_28.98%_45.24%_28.51%]">
      <Group />
    </div>
  );
}

function Group2() {
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

function Group3() {
  return (
    <div className="absolute contents left-[calc(50%+0.08px)] top-[calc(50%+5.97px)] translate-x-[-50%] translate-y-[-50%]">
      <Group2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group1 />
      <Group3 />
    </div>
  );
}