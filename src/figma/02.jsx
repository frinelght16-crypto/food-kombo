import { motion } from "motion/react";
const imgIosSignal = "assets/figma/03c61112-9126-4a07-9e9a-13a41f917a98.svg";
const imgIosWifiSignal = "assets/figma/7c0aa117-5c47-463a-820c-24b1f6076a30.svg";
const imgIosBatteryFull = "assets/figma/9a4dbe53-7173-4063-b607-44160b10ab72.svg";
const imgIcon = "assets/figma/3b467a98-c7b9-449d-92c1-2184d82f63ac.svg";
const imgIosSignal1 = "assets/figma/881c2ba6-20dd-4e87-97ed-90002831e1fd.svg";
const imgIosWifiSignal1 = "assets/figma/98deab24-25ce-41a6-b8a2-97aa4f555ee2.svg";
const imgIosBatteryFull1 = "assets/figma/f88edf10-7f4d-4d84-9ada-cb2ad22be7e8.svg";
const imgGroup = "assets/figma/2becd9b1-bee1-4590-a09a-76a64380e30f.svg";
const imgGroup1 = "assets/figma/e2a18f18-1971-4f8f-81df-49c3e1044815.svg";
const imgGroup2 = "assets/figma/ba586df5-af24-4c64-9925-1401d4788aa7.svg";
const imgStar = "assets/figma/2189bf53-50dc-40de-9520-400ccf25d70b.svg";

function Component2() {
  return (
    <div className="bg-[#f4f4e8] relative size-full" data-node-id="1:317" data-name="2">
      <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 px-[24px] top-[18px] w-[402px]" data-node-id="1:318" data-name="status-bar">
        <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#1a1716] text-[15px] whitespace-nowrap" data-node-id="1:319">
          9:41
        </p>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:320" data-name="status-icons">
          <div className="relative shrink-0 size-[18px]" data-node-id="1:321" data-name="ios-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosSignal} />
          </div>
          <div className="relative shrink-0 size-[18px]" data-node-id="1:323" data-name="ios-wifi-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosWifiSignal} />
          </div>
          <div className="h-[18px] relative shrink-0 w-[25px]" data-node-id="1:325" data-name="ios-battery-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosBatteryFull} />
          </div>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#0c0805] h-[874px] items-start left-0 overflow-clip to-[#0c0805] top-0 via-[#1a0e06] via-[55%] w-[402px]" data-node-id="1:327" data-name="HomeScreen">
        <div className="content-stretch flex h-[61.111px] items-start justify-center pt-[48px] relative shrink-0 w-full" data-node-id="1:328" data-name="Container" />
        <div className="flex-[495.408_0_0] min-h-px relative w-[390px]" data-node-id="1:329" data-name="Placeholder for HomeScreen">
          <div className="-translate-x-1/2 absolute content-stretch cursor-pointer flex flex-col gap-[10px] items-start left-[calc(50%+5px)] pb-[40px] pt-[12px] px-[24px] top-[637.89px] w-[390px]" data-node-id="1:330" data-name="Container">
            <a className="content-stretch drop-shadow-[0px_0px_25px_rgba(212,135,58,0.18)] flex flex-col items-center justify-center py-[16px] relative rounded-[18px] shrink-0 w-[342.014px]" data-node-id="1:331" style={{ backgroundImage: "linear-gradient(170.37513615385225deg, rgb(212, 135, 58) 0%, rgb(184, 104, 40) 100%)" }} data-name="Button">
              <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[25.5px] relative shrink-0 text-[#0c0805] text-[18px] text-center tracking-[1.02px] whitespace-nowrap" data-node-id="1:332">
                JOUER
              </p>
            </a>
            <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="1:333" data-name="Container">
              <a className="bg-[rgba(217,136,55,0.1)] border-[1.111px] border-[rgba(212,135,58,0.9)] border-solid content-stretch flex flex-[147.785_0_0] flex-col h-[42.708px] items-center justify-center min-w-px px-[8px] py-[12px] relative rounded-[16px]" data-node-id="1:334" data-name="Button">
                <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[16.5px] relative shrink-0 text-[#d4873a] text-[11px] text-center tracking-[0.55px] whitespace-nowrap" data-node-id="1:335">
                  CARNET DE RECETTES
                </p>
              </a>
              <a className="bg-[rgba(217,136,55,0.1)] border-[1.111px] border-[rgba(212,135,58,0.9)] border-solid content-stretch flex flex-[147.785_0_0] flex-col h-[42.708px] items-center justify-center min-w-px px-[8px] py-[12px] relative rounded-[16px]" data-node-id="1:336" data-name="Button">
                <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[16.5px] relative shrink-0 text-[#d4873a] text-[11px] text-center tracking-[0.55px] whitespace-nowrap" data-node-id="1:337">
                  DÉCOUVRIR
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col h-[260px] items-start left-0 opacity-18 top-0" data-node-id="1:338" data-name="Container">
          <div className="h-[260px] relative shrink-0 w-[390px]" data-node-id="1:339" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 px-[24px] top-[18px] w-[402px]" data-node-id="1:342" data-name="status-bar">
        <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="1:343">
          9:41
        </p>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:344" data-name="status-icons">
          <div className="relative shrink-0 size-[18px]" data-node-id="1:345" data-name="ios-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosSignal1} />
          </div>
          <div className="relative shrink-0 size-[18px]" data-node-id="1:347" data-name="ios-wifi-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosWifiSignal1} />
          </div>
          <div className="h-[18px] relative shrink-0 w-[25px]" data-node-id="1:349" data-name="ios-battery-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosBatteryFull1} />
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[56px] left-1/2 opacity-28 rounded-[128px] size-[256px] top-1/2" data-node-id="1:351" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -18.102 -18.102 0 128 128)'><stop stop-color='rgba(212,135,58,1)' offset='0'/><stop stop-color='rgba(212,135,58,0)' offset='0.7'/></radialGradient></defs></svg>\")" }} data-name="Container" />
      <div className="absolute contents left-[calc(20%+16.57px)] top-[337px]" data-node-id="1:352" data-name="Icon Group">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[118px] left-[calc(50%+0.06px)] top-[calc(50%-36px)] w-[114.119px]" data-node-id="1:353">
          <div className="absolute contents inset-0" data-node-id="I1:353;6:107" data-name="Calque 2">
            <div className="absolute contents inset-0" data-node-id="I1:353;6:111" data-name="Group">
              <motion.div className="absolute inset-[50.09%_0_0_0]" data-node-id="I1:353;6:112" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
              </motion.div>
              <motion.div className="absolute inset-[28.4%_8.52%_36.63%_9.51%]" data-node-id="I1:353;6:115" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
              </motion.div>
              <motion.div className="absolute inset-[0_16.72%_65.09%_19.76%]" data-node-id="I1:353;6:118" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute flex items-center justify-center left-[calc(20%+33.6px)] size-[34.059px] top-[337px]" data-node-id="1:354">
          <div className="flex-none rotate-[14.33deg]">
            <p className="[word-break:break-word] blur-[1px] font-['Monument_Extended:Regular'] leading-[normal] not-italic opacity-95 relative text-[28px] text-center text-white whitespace-nowrap">🌶️</p>
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute blur-[1px] font-['Monument_Extended:Regular'] leading-[normal] left-[calc(60%+56.8px)] not-italic opacity-95 text-[34px] text-center text-white top-[473px] whitespace-nowrap" data-node-id="1:355">
          🍅
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute blur-[1px] font-['Monument_Extended:Regular'] leading-[normal] left-[calc(20%+53.6px)] not-italic opacity-95 text-[28px] text-center text-white top-[480px] whitespace-nowrap" data-node-id="1:356">
          🧄
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute blur-[1px] font-['Monument_Extended:Regular'] leading-[normal] left-[calc(60%+68.3px)] not-italic opacity-95 text-[30px] text-center text-white top-[358px] whitespace-nowrap" data-node-id="1:357">
          🧅
        </p>
      </div>
      <div className="absolute bg-[#312921] border border-[rgba(200,135,58,0.12)] border-solid content-stretch flex gap-[8px] items-center left-[calc(60%+32.8px)] px-[12px] py-[8px] rounded-[100px] top-[83px]" data-node-id="1:367" data-name="Points Counter">
        <div className="relative shrink-0 size-[14px]" data-node-id="1:368" data-name="star">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStar} />
        </div>
        <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#d4873a] text-[12px] whitespace-nowrap" data-node-id="1:370">
          250 pts
        </p>
      </div>
    </div>
  );
}
