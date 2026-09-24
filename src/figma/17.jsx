const imgIosSignal = "assets/figma/9662a877-37e1-44c7-88b2-ea5b1a530bde.svg";
const imgIosWifiSignal = "assets/figma/e37bbc84-5f77-4a34-a61c-734e1a02be93.svg";
const imgIosBatteryFull = "assets/figma/e9330412-83d6-446b-81ae-837ba2cfcbcb.svg";
const imgBeninMapReal = "assets/figma/933a021b-97d2-419b-8008-fa8a59819f90.svg";
const imgPinPulsing = "assets/figma/489d8c9c-09f0-4578-8c5c-63d5bcb41750.svg";
const imgLine = "assets/figma/40dd8a2c-5c9c-41e1-a243-aefdae2945e7.svg";
const imgRegionHighlightSouth = "assets/figma/6059a503-d9a6-43dd-9793-22a59c81ceb4.svg";
const imgBj = "assets/figma/c26d0806-bca1-43ed-8472-30877e632299.svg";

function Component17() {
  return (
    <div className="bg-[#140b05] content-stretch flex flex-col items-start relative size-full" data-node-id="1:1316" data-name="17">
      <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full" data-node-id="1:1317" data-name="status-bar">
        <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="1:1318">
          9:41
        </p>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:1319" data-name="status-icons">
          <div className="relative shrink-0 size-[18px]" data-node-id="1:1320" data-name="ios-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosSignal} />
          </div>
          <div className="relative shrink-0 size-[18px]" data-node-id="1:1322" data-name="ios-wifi-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosWifiSignal} />
          </div>
          <div className="h-[18px] relative shrink-0 w-[25px]" data-node-id="1:1324" data-name="ios-battery-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosBatteryFull} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between px-[20px] py-[12px] relative shrink-0 w-full" data-node-id="1:1326" data-name="header">
        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-node-id="1:1327" data-name="btn-back">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:1328">
            ←
          </p>
        </div>
        <p className="[word-break:break-word] font-['Monument_Extended:Ultrabold'] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:1329">
          ORIGINE DU PLAT
        </p>
        <div className="relative shrink-0 size-[40px]" data-node-id="1:1330" data-name="spacer" />
      </div>
      <div className="h-[340px] relative shrink-0 w-full" data-node-id="1:1331" data-name="map-container">
        <div className="-translate-x-1/2 absolute blur-[48px] left-1/2 opacity-35 rounded-[120px] size-[240px] top-[60px]" data-node-id="1:1332" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -16.8 -16.8 0 120 120)'><stop stop-color='rgba(212,135,58,1)' offset='0'/><stop stop-color='rgba(212,135,58,0)' offset='0.7'/></radialGradient></defs></svg>\")" }} data-name="glow" />
        <div className="absolute h-[280px] left-[116.17px] top-[40px] w-[157.655px]" data-node-id="1:1333" data-name="benin-map-real">
          <div className="absolute inset-[-0.27%_-0.49%_-0.3%_-0.49%]">
            <img alt="" className="block max-w-none size-full" src={imgBeninMapReal} />
          </div>
        </div>
        <div className="absolute left-[171.35px] size-[24px] top-[269.6px]" data-node-id="1:1334" data-name="pin-pulsing">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPinPulsing} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[2px] items-center left-[340px] top-[20px]" data-node-id="1:1339" data-name="compass">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#8a7a60] text-[9px] whitespace-nowrap" data-node-id="1:1340">
            N
          </p>
          <div className="flex h-[12px] items-center justify-center relative shrink-0 w-0" data-node-id="1:1341">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[12px]" data-name="Line">
                <div className="absolute inset-[-1.2px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[40px] left-[139.82px] top-[241.6px] w-[70px]" data-node-id="1:1342" data-name="region-highlight-south">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRegionHighlightSouth} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative shrink-0 w-full" data-node-id="1:1343" data-name="bottom-sheet">
        <div className="[word-break:break-word] bg-[#312921] border-[1.2px] border-[rgba(200,135,58,0.12)] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] p-[16px] relative rounded-[16px] shrink-0 w-full whitespace-nowrap" data-node-id="1:1344" data-name="dish-region-card">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:1345" data-name="Frame">
            <p className="font-['Monument_Extended:Ultrabold'] not-italic relative shrink-0 text-[24px] text-white" data-node-id="1:1346">
              AMIWO
            </p>
            <p className="font-['Montserrat:Bold'] font-bold relative shrink-0 text-[#e8b84b] text-[11px] uppercase" data-node-id="1:1347">
              SUD DU BÉNIN
            </p>
          </div>
          <p className="font-['Montserrat:SemiBold'] font-semibold relative shrink-0 text-[#8a7a60] text-[12px]" data-node-id="1:1348">
            Porto-Novo · Abomey · Bohicon
          </p>
        </div>
        <div className="[word-break:break-word] bg-[#312921] border-[1.2px] border-[rgba(200,135,58,0.12)] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:1349" data-name="story-card">
          <p className="font-['Monument_Extended:Ultrabold'] leading-[normal] not-italic relative shrink-0 text-[#d4873a] text-[11px] whitespace-nowrap" data-node-id="1:1350">{`HISTOIRE & TRADITION`}</p>
          <p className="font-['Montserrat:Medium'] font-medium leading-[1.4] min-w-full relative shrink-0 text-[13px] text-[rgba(255,255,255,0.7)] w-[min-content]" data-node-id="1:1351">{`L'Amiwo est une pâte de maïs cuite dans une sauce tomate épicée, originaire du sud du Bénin. Ce plat festif est incontournable lors des cérémonies du peuple Fon.`}</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:1352" data-name="tags-row">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="1:1353" data-name="tag-pill">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#f5ead6] text-[12px] whitespace-nowrap" data-node-id="1:1354">
              🇧🇯 Bénin
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="1:1355" data-name="tag-pill">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#f5ead6] text-[12px] whitespace-nowrap" data-node-id="1:1356">{`🌍 Afrique de l'Ouest`}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[12px] relative shrink-0 w-full" data-node-id="1:1357" data-name="cta-block">
          <div className="content-stretch drop-shadow-[0px_4px_12px_rgba(212,135,58,0.18)] flex flex-col items-center justify-center py-[16px] relative rounded-[18px] shrink-0 w-full" data-node-id="1:1358" style={{ backgroundImage: "linear-gradient(171.3545774657464deg, rgb(212, 135, 58) 0%, rgb(184, 104, 40) 100%)" }} data-name="primary-cta">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#140b05] text-[16px] whitespace-nowrap" data-node-id="1:1359">
              VOIR LA RECETTE
            </p>
          </div>
        </div>
      </div>
      <div className="h-[90.4px] relative shrink-0 w-[50.9px]" data-node-id="1:1360" data-name="BJ">
        <div className="absolute inset-[-1.13%_-2.01%_-1.25%_-2.02%]">
          <img alt="" className="block max-w-none size-full" src={imgBj} />
        </div>
      </div>
    </div>
  );
}
