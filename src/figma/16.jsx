const imgIosSignal = "assets/figma/d8702610-7950-4fbc-bf0e-0e3f6697e986.svg";
const imgIosWifiSignal = "assets/figma/ce90ab49-c316-4104-8e81-9d85f88ad2d7.svg";
const imgIosBatteryFull = "assets/figma/e7bb1523-46e2-49a1-9422-cbcd72d12fc2.svg";
const imgBeninMapReal = "assets/figma/ca51345d-221f-4e3d-a00b-6b34b853574e.svg";
const imgPinPulsing = "assets/figma/889508cd-4f74-46a6-8f2e-b355431c3940.svg";
const imgLine = "assets/figma/b9bdec5e-14f3-4250-880a-91ee7351d395.svg";
const imgRegionHighlightSouth = "assets/figma/314aaf81-a368-4246-aafe-11faf29d5615.svg";
const imgBj = "assets/figma/97c191c6-e4be-4a3b-a3ae-4604d89ebf63.svg";

function Component16() {
  return (
    <div className="bg-[#140b05] content-stretch flex flex-col items-start relative size-full" data-node-id="1:1271" data-name="16">
      <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full" data-node-id="1:1272" data-name="status-bar">
        <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="1:1273">
          9:41
        </p>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:1274" data-name="status-icons">
          <div className="relative shrink-0 size-[18px]" data-node-id="1:1275" data-name="ios-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosSignal} />
          </div>
          <div className="relative shrink-0 size-[18px]" data-node-id="1:1277" data-name="ios-wifi-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosWifiSignal} />
          </div>
          <div className="h-[18px] relative shrink-0 w-[25px]" data-node-id="1:1279" data-name="ios-battery-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosBatteryFull} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between px-[20px] py-[12px] relative shrink-0 w-full" data-node-id="1:1281" data-name="header">
        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-node-id="1:1282" data-name="btn-back">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:1283">
            ←
          </p>
        </div>
        <p className="[word-break:break-word] font-['Monument_Extended:Ultrabold'] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:1284">
          ORIGINE DU PLAT
        </p>
        <div className="relative shrink-0 size-[40px]" data-node-id="1:1285" data-name="spacer" />
      </div>
      <div className="h-[340px] relative shrink-0 w-full" data-node-id="1:1286" data-name="map-container">
        <div className="-translate-x-1/2 absolute blur-[48px] left-1/2 opacity-35 rounded-[120px] size-[240px] top-[60px]" data-node-id="1:1287" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -16.8 -16.8 0 120 120)'><stop stop-color='rgba(212,135,58,1)' offset='0'/><stop stop-color='rgba(212,135,58,0)' offset='0.7'/></radialGradient></defs></svg>\")" }} data-name="glow" />
        <div className="absolute h-[280px] left-[116.17px] top-[40px] w-[157.655px]" data-node-id="1:1288" data-name="benin-map-real">
          <div className="absolute inset-[-0.27%_-0.49%_-0.3%_-0.49%]">
            <img alt="" className="block max-w-none size-full" src={imgBeninMapReal} />
          </div>
        </div>
        <div className="absolute left-[171.35px] size-[24px] top-[269.6px]" data-node-id="1:1289" data-name="pin-pulsing">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPinPulsing} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[2px] items-center left-[340px] top-[20px]" data-node-id="1:1294" data-name="compass">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#8a7a60] text-[9px] whitespace-nowrap" data-node-id="1:1295">
            N
          </p>
          <div className="flex h-[12px] items-center justify-center relative shrink-0 w-0" data-node-id="1:1296">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[12px]" data-name="Line">
                <div className="absolute inset-[-1.2px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[40px] left-[139.82px] top-[241.6px] w-[70px]" data-node-id="1:1297" data-name="region-highlight-south">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRegionHighlightSouth} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative shrink-0 w-full" data-node-id="1:1298" data-name="bottom-sheet">
        <div className="[word-break:break-word] bg-[#312921] border-[1.2px] border-[rgba(200,135,58,0.12)] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] p-[16px] relative rounded-[16px] shrink-0 w-full whitespace-nowrap" data-node-id="1:1299" data-name="dish-region-card">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:1300" data-name="Frame">
            <p className="font-['Monument_Extended:Ultrabold'] not-italic relative shrink-0 text-[24px] text-white" data-node-id="1:1301">
              ATASSI
            </p>
            <p className="font-['Montserrat:Bold'] font-bold relative shrink-0 text-[#e8b84b] text-[11px] uppercase" data-node-id="1:1302">
              SUD DU BÉNIN
            </p>
          </div>
          <p className="font-['Montserrat:SemiBold'] font-semibold relative shrink-0 text-[#8a7a60] text-[12px]" data-node-id="1:1303">
            Porto-Novo · Cotonou · Ouidah
          </p>
        </div>
        <div className="[word-break:break-word] bg-[#312921] border-[1.2px] border-[rgba(200,135,58,0.12)] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:1304" data-name="story-card">
          <p className="font-['Monument_Extended:Ultrabold'] leading-[normal] not-italic relative shrink-0 text-[#d4873a] text-[11px] whitespace-nowrap" data-node-id="1:1305">{`HISTOIRE & TRADITION`}</p>
          <p className="font-['Montserrat:Medium'] font-medium leading-[1.4] min-w-full relative shrink-0 text-[13px] text-[rgba(255,255,255,0.7)] w-[min-content]" data-node-id="1:1306">{`Ce plat est originaire du sud du Bénin, une région connue pour sa cuisine à base de riz et haricots. L'Atassi est traditionnellement préparé lors des grandes cérémonies familiales.`}</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:1307" data-name="tags-row">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="1:1308" data-name="tag-pill">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#f5ead6] text-[12px] whitespace-nowrap" data-node-id="1:1309">
              🇧🇯 Bénin
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="1:1310" data-name="tag-pill">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#f5ead6] text-[12px] whitespace-nowrap" data-node-id="1:1311">{`🌍 Afrique de l'Ouest`}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[12px] relative shrink-0 w-full" data-node-id="1:1312" data-name="cta-block">
          <div className="content-stretch drop-shadow-[0px_4px_12px_rgba(212,135,58,0.18)] flex flex-col items-center justify-center py-[16px] relative rounded-[18px] shrink-0 w-full" data-node-id="1:1313" style={{ backgroundImage: "linear-gradient(171.3545774657464deg, rgb(212, 135, 58) 0%, rgb(184, 104, 40) 100%)" }} data-name="primary-cta">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#140b05] text-[16px] whitespace-nowrap" data-node-id="1:1314">
              VOIR LA RECETTE
            </p>
          </div>
        </div>
      </div>
      <div className="h-[90.4px] relative shrink-0 w-[50.9px]" data-node-id="1:1315" data-name="BJ">
        <div className="absolute inset-[-1.13%_-2.01%_-1.25%_-2.02%]">
          <img alt="" className="block max-w-none size-full" src={imgBj} />
        </div>
      </div>
    </div>
  );
}
