import { motion } from "motion/react";
const imgIosSignal = "assets/figma/8c8c05c1-f919-4a0f-8221-f637048d5fb7.svg";
const imgIosWifiSignal = "assets/figma/d1268f16-8dc7-4992-aa1f-7d4a594a45d4.svg";
const imgIosBatteryFull = "assets/figma/9ffe54fe-429b-46a3-b6e3-5c7988d93a04.svg";
const imgClock = "assets/figma/e158fd34-0e57-46dc-92e1-d98f23363198.svg";
const imgGroup = "assets/figma/bdfd4915-2c1f-4f1a-b4b7-c2af747edaae.svg";
const imgGroup1 = "assets/figma/1b73aa34-03dc-4406-8271-518efef4b9c3.svg";
const imgGroup2 = "assets/figma/d162ef90-3610-427b-8d8b-f551f4e60e75.svg";

function Component9() {
  return (
    <div className="bg-[#140b05] content-stretch flex flex-col items-start justify-between pb-[24px] relative size-full" data-node-id="1:1223" data-name="9">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="1:1224" data-name="Top-Section">
        <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full" data-node-id="1:1225" data-name="status-bar">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="1:1226">
            9:41
          </p>
          <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:1227" data-name="status-icons">
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="1:1228" data-name="Icon-ios-signal">
              <div className="relative shrink-0 size-[16px]" data-node-id="1:1229" data-name="ios-signal">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosSignal} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="1:1231" data-name="Icon-ios-wifi-signal">
              <div className="relative shrink-0 size-[16px]" data-node-id="1:1232" data-name="ios-wifi-signal">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosWifiSignal} />
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-node-id="1:1234" data-name="Icon-ios-battery-full">
              <div className="relative shrink-0 size-[20px]" data-node-id="1:1235" data-name="ios-battery-full">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosBatteryFull} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between px-[24px] relative shrink-0 w-full" data-node-id="1:1237" data-name="Header-Nav">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-node-id="1:1238" data-name="Button-Back">
            <p className="[word-break:break-word] font-['Montserrat:ExtraBold'] font-extrabold leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:1239">
              ←
            </p>
          </div>
          <div className="bg-[rgba(217,136,55,0.1)] border border-[#d4873a] border-solid content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-node-id="1:1240" data-name="Live-Timer">
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[14px]" data-node-id="1:1241" data-name="Icon-clock-filled">
              <div className="relative shrink-0 size-[14px]" data-node-id="1:1242" data-name="clock">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClock} />
              </div>
            </div>
            <p className="[word-break:break-word] font-['Monument_Extended:Regular'] leading-[normal] not-italic relative shrink-0 text-[#d4873a] text-[13px] whitespace-nowrap" data-node-id="1:1244">
              12:10
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-node-id="1:1245" data-name="Title-Block">
          <p className="[word-break:break-word] font-['Monument_Extended:Regular'] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-white w-full" data-node-id="1:1246">
            Régler le feu
          </p>
        </div>
      </div>
      <div className="content-stretch flex h-[280px] items-center justify-center px-[32px] relative shrink-0 w-full" data-node-id="1:1247" data-name="Gauge-Visualization-Area">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[56px] left-1/2 opacity-35 rounded-[128px] size-[256px] top-1/2" data-node-id="1:1248" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -18.102 -18.102 0 128 128)'><stop stop-color='rgba(212,135,58,1)' offset='0'/><stop stop-color='rgba(212,135,58,0)' offset='0.7'/></radialGradient></defs></svg>\")" }} data-name="Frame" />
        <div className="content-stretch flex flex-col gap-[16px] h-full items-center justify-center relative shrink-0 w-[100px]" data-node-id="1:1249" data-name="Scale-Meter">
          <p className="[word-break:break-word] font-['Monument_Extended:Regular'] leading-[normal] not-italic relative shrink-0 text-[#ff4b3e] text-[10px] whitespace-nowrap" data-node-id="1:1250">
            FORT
          </p>
          <div className="bg-[rgba(191,112,44,0.15)] content-stretch flex flex-col h-[160px] items-start justify-end overflow-clip relative rounded-[8px] shrink-0 w-[16px]" data-node-id="1:1251" data-name="Thermometer-Track">
            <div className="absolute bg-[#3ed67a] h-[60px] left-0 opacity-30 right-0 top-[50px]" data-node-id="1:1252" data-name="Ideal-Zone-Bar" />
            <div className="bg-gradient-to-b from-[#ffbe50] h-[100px] relative rounded-[8px] shrink-0 to-[#d4873a] w-full" data-node-id="1:1253" data-name="Current-Heat-Fill" />
          </div>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[8px] items-center right-[40px] top-1/2 w-[160px]" data-node-id="1:1254" data-name="Flame-Preview">
          <div className="h-[118px] relative shrink-0 w-[114.119px]" data-node-id="1:1255">
            <div className="absolute contents inset-0" data-node-id="I1:1255;6:107" data-name="Calque 2">
              <div className="absolute contents inset-0" data-node-id="I1:1255;6:111" data-name="Group">
                <motion.div className="absolute inset-[50.09%_0_0_0]" data-node-id="I1:1255;6:112" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                </motion.div>
                <motion.div className="absolute inset-[28.4%_8.52%_36.63%_9.51%]" data-node-id="I1:1255;6:115" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                </motion.div>
                <motion.div className="absolute inset-[0_16.72%_65.09%_19.76%]" data-node-id="I1:1255;6:118" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(62,214,122,0.12)] border border-[#3ed67a] border-solid content-stretch flex items-start px-[10px] py-[4px] relative rounded-[20px] shrink-0" data-node-id="1:1256" data-name="Ideal-Indicator-Badge">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#3ed67a] text-[9px] whitespace-nowrap" data-node-id="1:1257">
              ZONE IDÉALE
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-center px-[24px] relative shrink-0 w-full" data-node-id="1:1258" data-name="Status-Feedback-Group">
        <div className="bg-[rgba(217,136,55,0.1)] border border-[#d4873a] border-solid content-stretch flex items-center justify-center py-[12px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:1259" data-name="Status-Badge">
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] relative shrink-0 text-[15px] whitespace-nowrap" data-node-id="1:1260" data-name="Status-Inner">
            <p className="font-['Montserrat:Bold'] font-bold relative shrink-0 text-white" data-node-id="1:1261">{`Moyen — `}</p>
            <p className="font-['Montserrat:ExtraBold'] font-extrabold relative shrink-0 text-[#3ed67a]" data-node-id="1:1262">{`Parfait `}</p>
          </div>
        </div>
        <div className="bg-[#312921] border border-[rgba(200,135,58,0.12)] border-solid content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:1263" data-name="Instructions-Box">
          <p className="[word-break:break-word] font-['Montserrat:Regular'] font-normal leading-[0] relative shrink-0 text-[13px] text-center text-white w-full" data-node-id="1:1264">
            <span className="leading-[19px]">{`Ajustez l'intensité du feu pour la `}</span>
            <span className="font-['Montserrat:Bold'] font-bold leading-[19px] text-[#e8b84b]">cuisson idéale</span>
            <span className="leading-[19px]">{` de l'Atassi.`}</span>
          </p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[16px] px-[24px] relative shrink-0 w-full" data-node-id="1:1265" data-name="CTA-Block">
        <div className="[word-break:break-word] content-stretch flex gap-[6px] items-center justify-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="1:1266" data-name="Points-Alert">
          <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[14px] text-black" data-node-id="1:1267">
            🏅
          </p>
          <p className="font-['Monument_Extended:Regular'] relative shrink-0 text-[#3ed67a] text-[11px]" data-node-id="1:1268">
            +50 PTS SI BONNE TEMPÉRATURE
          </p>
        </div>
        <a className="content-stretch cursor-pointer drop-shadow-[0px_4px_12px_rgba(212,135,58,0.3)] flex flex-col items-center justify-center py-[16px] relative rounded-[18px] shrink-0 w-full" data-node-id="1:1269" style={{ backgroundImage: "linear-gradient(171.3545774657464deg, rgb(212, 135, 58) 0%, rgb(184, 104, 40) 100%)" }} data-name="Button-Primary">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#0c0805] text-[16px] text-left tracking-[1px] whitespace-nowrap" data-node-id="1:1270">
            VALIDER LA TEMPÉRATURE
          </p>
        </a>
      </div>
    </div>
  );
}
