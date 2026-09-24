const imgIosSignal = "assets/figma/29d74718-b67f-4539-b789-e784db7b6d5e.svg";
const imgIosWifiSignal = "assets/figma/c5d23ec5-478d-4604-b054-20d0f4d28c08.svg";
const imgIosBatteryFull = "assets/figma/a5c9c613-29bc-42fa-a4d8-71f13c4781a8.svg";
const imgBeninMapReal = "assets/figma/9f866218-9fd0-4f07-84f2-80d3a339ae55.svg";
const imgPinPulsing = "assets/figma/1d817f6c-a0b7-479a-8bef-85ee4b72d603.svg";
const imgLine = "assets/figma/cfd909ee-7966-4984-b42e-3871dee9f1e4.svg";
const imgRegionHighlightCenter = "assets/figma/87ab7d93-5cb5-4fe7-8d73-fb69f52cecf7.svg";
const imgBj = "assets/figma/2ddbba2a-3f7f-43dd-bec9-169c3f2ac2cb.svg";

function Component18() {
  return (
    <div className="bg-[#140b05] content-stretch flex flex-col items-start relative size-full" data-node-id="1:1361" data-name="18">
      <div className="content-stretch flex h-[44px] items-center justify-between px-[24px] relative shrink-0 w-full" data-node-id="1:1362" data-name="status-bar">
        <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[15px] text-white whitespace-nowrap" data-node-id="1:1363">
          9:41
        </p>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="1:1364" data-name="status-icons">
          <div className="relative shrink-0 size-[18px]" data-node-id="1:1365" data-name="ios-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosSignal} />
          </div>
          <div className="relative shrink-0 size-[18px]" data-node-id="1:1367" data-name="ios-wifi-signal">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosWifiSignal} />
          </div>
          <div className="h-[18px] relative shrink-0 w-[25px]" data-node-id="1:1369" data-name="ios-battery-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIosBatteryFull} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between px-[20px] py-[12px] relative shrink-0 w-full" data-node-id="1:1371" data-name="header">
        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-node-id="1:1372" data-name="btn-back">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" data-node-id="1:1373">
            ←
          </p>
        </div>
        <p className="[word-break:break-word] font-['Monument_Extended:Ultrabold'] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="1:1374">
          ORIGINE DU PLAT
        </p>
        <div className="relative shrink-0 size-[40px]" data-node-id="1:1375" data-name="spacer" />
      </div>
      <div className="h-[340px] relative shrink-0 w-full" data-node-id="1:1376" data-name="map-container">
        <div className="-translate-x-1/2 absolute blur-[48px] left-1/2 opacity-35 rounded-[120px] size-[240px] top-[60px]" data-node-id="1:1377" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -16.8 -16.8 0 120 120)'><stop stop-color='rgba(212,135,58,1)' offset='0'/><stop stop-color='rgba(212,135,58,0)' offset='0.7'/></radialGradient></defs></svg>\")" }} data-name="glow" />
        <div className="absolute h-[280px] left-[116.17px] top-[40px] w-[157.655px]" data-node-id="1:1378" data-name="benin-map-real">
          <div className="absolute inset-[-0.27%_-0.49%_-0.3%_-0.49%]">
            <img alt="" className="block max-w-none size-full" src={imgBeninMapReal} />
          </div>
        </div>
        <div className="absolute left-[179.23px] size-[24px] top-[194px]" data-node-id="1:1379" data-name="pin-pulsing">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPinPulsing} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[2px] items-center left-[340px] top-[20px]" data-node-id="1:1384" data-name="compass">
          <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#8a7a60] text-[9px] whitespace-nowrap" data-node-id="1:1385">
            N
          </p>
          <div className="flex h-[12px] items-center justify-center relative shrink-0 w-0" data-node-id="1:1386">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[12px]" data-name="Line">
                <div className="absolute inset-[-1.2px_0_0_0]">
                  <img alt="" className="block max-w-none size-full" src={imgLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[40px] left-[147.7px] top-[174.4px] w-[70px]" data-node-id="1:1387" data-name="region-highlight-center">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRegionHighlightCenter} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] relative shrink-0 w-full" data-node-id="1:1388" data-name="bottom-sheet">
        <div className="[word-break:break-word] bg-[#312921] border-[1.2px] border-[rgba(200,135,58,0.12)] border-solid content-stretch flex flex-col gap-[6px] items-start leading-[normal] p-[16px] relative rounded-[16px] shrink-0 w-full whitespace-nowrap" data-node-id="1:1389" data-name="dish-region-card">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="1:1390" data-name="Frame">
            <p className="font-['Monument_Extended:Ultrabold'] not-italic relative shrink-0 text-[24px] text-white" data-node-id="1:1391">
              DJONGOLI
            </p>
            <p className="font-['Montserrat:Bold'] font-bold relative shrink-0 text-[#e8b84b] text-[11px] uppercase" data-node-id="1:1392">
              CENTRE DU BÉNIN
            </p>
          </div>
          <p className="font-['Montserrat:SemiBold'] font-semibold relative shrink-0 text-[#8a7a60] text-[12px]" data-node-id="1:1393">
            Dassa · Savalou · Glazoué
          </p>
        </div>
        <div className="[word-break:break-word] bg-[#312921] border-[1.2px] border-[rgba(200,135,58,0.12)] border-solid content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="1:1394" data-name="story-card">
          <p className="font-['Monument_Extended:Ultrabold'] leading-[normal] not-italic relative shrink-0 text-[#d4873a] text-[11px] whitespace-nowrap" data-node-id="1:1395">{`HISTOIRE & TRADITION`}</p>
          <p className="font-['Montserrat:Medium'] font-medium leading-[1.4] min-w-full relative shrink-0 text-[13px] text-[rgba(255,255,255,0.7)] w-[min-content]" data-node-id="1:1396">
            Le Djongoli est une spécialité du centre du Bénin, à base de haricots blancs pilés et frits. Réputé pour donner de la force, il est historiquement préparé pour les voyageurs et agriculteurs.
          </p>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-node-id="1:1397" data-name="tags-row">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="1:1398" data-name="tag-pill">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#f5ead6] text-[12px] whitespace-nowrap" data-node-id="1:1399">
              🇧🇯 Bénin
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] border-solid content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-node-id="1:1400" data-name="tag-pill">
            <p className="[word-break:break-word] font-['Montserrat:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#f5ead6] text-[12px] whitespace-nowrap" data-node-id="1:1401">{`🌍 Afrique de l'Ouest`}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start pb-[24px] pt-[12px] relative shrink-0 w-full" data-node-id="1:1402" data-name="cta-block">
          <div className="content-stretch drop-shadow-[0px_4px_12px_rgba(212,135,58,0.18)] flex flex-col items-center justify-center py-[16px] relative rounded-[18px] shrink-0 w-full" data-node-id="1:1403" style={{ backgroundImage: "linear-gradient(171.3545774657464deg, rgb(212, 135, 58) 0%, rgb(184, 104, 40) 100%)" }} data-name="primary-cta">
            <p className="[word-break:break-word] font-['Montserrat:Bold'] font-bold leading-[normal] relative shrink-0 text-[#140b05] text-[16px] whitespace-nowrap" data-node-id="1:1404">
              VOIR LA RECETTE
            </p>
          </div>
        </div>
      </div>
      <div className="h-[90.4px] relative shrink-0 w-[50.9px]" data-node-id="1:1405" data-name="BJ">
        <div className="absolute inset-[-1.13%_-2.01%_-1.25%_-2.02%]">
          <img alt="" className="block max-w-none size-full" src={imgBj} />
        </div>
      </div>
    </div>
  );
}
