import svgPaths from "./svg-sn4342690k";

function Img({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[24px] relative shrink-0 w-[38px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 24">
        <g id="Img">{children}</g>
      </svg>
    </div>
  );
}

function Img1() {
  return (
    <Img>
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
      <g id="Img_2">
        <path d={svgPaths.pd308d80} fill="var(--fill-0, #005B9A)" id="Vector_3" />
        <path d={svgPaths.p2d4faf80} fill="var(--fill-0, #E9292D)" id="Vector_4" />
        <path d={svgPaths.pe0d6e80} fill="var(--fill-0, #0E73B9)" id="Vector_5" />
        <path d={svgPaths.pa5181f0} fill="var(--fill-0, #059DA4)" id="Vector_6" />
        <path d={svgPaths.p30ca0f00} fill="var(--fill-0, white)" id="Vector_7" />
      </g>
      <g id="Group 3">
        <path d={svgPaths.p23661d00} fill="var(--fill-0, #006FCF)" id="Vector_8" />
        <path d={svgPaths.p26131440} fill="var(--fill-0, white)" id="Vector_9" />
        <path d={svgPaths.p34830c00} fill="var(--fill-0, #006FCF)" id="Vector_10" />
        <path d={svgPaths.p35366e00} fill="var(--fill-0, #006FCF)" id="Vector_11" />
        <path d={svgPaths.pe4d3600} fill="var(--fill-0, white)" id="Vector_12" />
        <path d={svgPaths.p332fa330} fill="var(--fill-0, #006FCF)" id="Vector_13" />
        <path d={svgPaths.p264d4280} fill="var(--fill-0, #006FCF)" id="Vector_14" />
      </g>
    </Img>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="Item">
      <Img1 />
    </div>
  );
}

function Img2() {
  return (
    <Img>
      <path d={svgPaths.p265aae00} fill="var(--fill-0, black)" id="Vector" opacity="0.07" />
      <path d={svgPaths.p1e9ee00} fill="var(--fill-0, white)" id="Vector_2" />
      <g id="Img_2">
        <path d={svgPaths.pd308d80} fill="var(--fill-0, #005B9A)" id="Vector_3" />
        <path d={svgPaths.p2d4faf80} fill="var(--fill-0, #E9292D)" id="Vector_4" />
        <path d={svgPaths.pe0d6e80} fill="var(--fill-0, #0E73B9)" id="Vector_5" />
        <path d={svgPaths.pa5181f0} fill="var(--fill-0, #059DA4)" id="Vector_6" />
        <path d={svgPaths.p30ca0f00} fill="var(--fill-0, white)" id="Vector_7" />
      </g>
    </Img>
  );
}

function Item1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[54px] top-0" data-name="Item">
      <Img2 />
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

function Group1() {
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

function Group2() {
  return (
    <div className="absolute contents inset-[27.6%_13.42%_24.69%_13.18%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Img3() {
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
      <Group2 />
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[108px] top-0" data-name="Item">
      <Img3 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}