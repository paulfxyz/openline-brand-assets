import imgPictureAGroupOfPeopleEnjoyingAUs5SailyCreditAfterReferringAFriend from "figma:asset/f4a962cbef5d1bfbcf0d2b1dd9ecda4d046c19e0.png";

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Container">
      <div className="basis-0 bg-white grow min-h-px min-w-px shrink-0 w-full" data-name="Background" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[44px] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.256px] w-full">
        <p className="mb-0">Refer a friend, and you’ll</p>
        <p>both get US$5!</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#4d4e56] text-[16px] w-full">
        <p className="mb-0">Invite your friends to use Saily and get US$5 in Saily</p>
        <p>credits while they get a US$5 discount!</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex items-start justify-center px-[29px] py-[12px] relative rounded-[1440px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[1440px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[64px] relative w-full">
          <Heading />
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function PictureAGroupOfPeopleEnjoyingAUs5SailyCreditAfterReferringAFriend() {
  return (
    <div className="h-[421.26px] max-w-[584.5px] relative shrink-0 w-[584.5px]" data-name="Picture → A group of people enjoying a US$5 Saily credit after referring a friend.">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPictureAGroupOfPeopleEnjoyingAUs5SailyCreditAfterReferringAFriend} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <PictureAGroupOfPeopleEnjoyingAUs5SailyCreditAfterReferringAFriend />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Container6 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#eef1f6] content-stretch flex items-start justify-center min-h-[421.26px] overflow-clip relative rounded-[40px] shrink-0 w-full" data-name="Background">
      <Container4 />
      <Container7 />
    </div>
  );
}

export default function Container8() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[135.5px] py-[64px] relative size-full">
          <Container />
          <Background />
        </div>
      </div>
    </div>
  );
}