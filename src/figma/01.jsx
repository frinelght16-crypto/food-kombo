const imgGroup = "assets/figma/89479973-2e2a-439e-a1a1-7f022a5f59db.svg";
const imgGroup1 = "assets/figma/f730a12d-adb4-42ef-86ab-b5a75beda52f.svg";
const imgGroup2 = "assets/figma/f2b7e2d4-e560-4e60-8b59-5ab84cb3299f.svg";
const imgIosSignal = "assets/figma/10e6dd15-401f-4963-a77a-543d9bca8fca.svg";
const imgIosWifiSignal = "assets/figma/4ef6c524-14e1-40f1-9fe4-bb713db890b8.svg";
const imgIosBatteryFull = "assets/figma/cb3de6e1-7216-4a00-916f-f9075db83a14.svg";

function Component01() {
  return (
    <a className="bg-[#140b05] block cursor-pointer relative size-full" data-node-id="1:293" data-name="01">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+10.95px)] top-[calc(50%-1.94px)]" data-node-id="1:294" data-name="Calque 1">
        <div className="absolute content-stretch flex flex-col items-start left-[133px] top-[450.53px] w-[157.906px]" data-node-id="1:295" data-name="Container">
          <div className="flex h-[65.271px] items-center justify-center mb-[-24px] relative shrink-0 w-full" data-node-id="1:296">
            <div className="flex-none rotate-[-4.89deg] w-full">
              <p className="[word-break:break-word] font-['Monument_Extended:Ultrabold'] leading-[normal] not-italic relative text-[#bb6c2a] text-[43.462px] text-left w-full">FOOD</p>
            </div>
          </div>
          <div className="flex h-[52.318px] items-center justify-center relative shrink-0 w-full" data-node-id="1:297">
            <div className="flex-none rotate-[-4.89deg] w-full">
              <p className="[word-break:break-word] font-['Monument_Extended:Ultrabold'] leading-[normal] not-italic relative text-[#c90505] text-[32.445px] text-left w-full">KOMBO</p>
            </div>
          </div>
        </div>
        <div className="absolute contents inset-[37.3%_35.56%_49.2%_36.05%]" data-node-id="1:298" data-name="Group">
          <div className="absolute inset-[44.06%_35.56%_49.2%_36.05%]" data-node-id="1:299" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
          </div>
          <div className="absolute inset-[41.13%_37.98%_54.14%_38.75%]" data-node-id="1:302" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
          </div>
          <div className="absolute inset-[37.3%_40.3%_57.99%_41.66%]" data-node-id="1:305" data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 px-[24px] top-[18px] w-[402px]" data-node-id="1:308" data-name="status-bar">
        <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-left text-white whitespace-nowrap" data-node-id="1:309">
          9:41
        </p>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:310" data-name="status-icons">
          <div className="relative shrink-0 size-[18px]" data-node-id="1:311" data-name="ios-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosSignal} />
          </div>
          <div className="relative shrink-0 size-[18px]" data-node-id="1:313" data-name="ios-wifi-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosWifiSignal} />
          </div>
          <div className="h-[18px] relative shrink-0 w-[25px]" data-node-id="1:315" data-name="ios-battery-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosBatteryFull} />
          </div>
        </div>
      </div>
    </a>
  );
}
