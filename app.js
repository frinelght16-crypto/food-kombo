(() => {
  'use strict';

  const sizes = {
    '01': [402, 874], '02': [402, 874], '03': [402, 874], '04': [402, 874],
    '05': [390, 844], '06': [402, 874], '07': [402, 874], '08': [402, 874],
    '09': [390, 844], '10': [402, 874], '11': [402, 874], '12': [402, 874],
    '13': [402, 1161], '14': [402, 1260], '15': [402, 1220],
    '16': [390, 844], '17': [390, 844], '18': [390, 844]
  };
  const cards = [
    { name: 'viande', file: 'assets/cards/targets/viande.png' },
    { name: 'riz', file: 'assets/cards/targets/riz.png' },
    { name: 'haricot', file: 'assets/cards/targets/haricot.png' },
    { name: 'oignon', file: 'assets/cards/targets/oignon.png' },
    { name: 'tomate', file: 'assets/cards/targets/tomate.png' },
    { name: 'marmite', file: 'assets/cards/targets/marmite.png' },
    { name: 'friture', file: 'assets/cards/targets/friture.png' }
  ];
  const previous = {
    '02': '01', '03': '01', '04': '03', '05': '04', '06': '05', '07': '06',
    '08': '07', '09': '08', '10': '09', '11': '10', '12': '11',
    '13': '03', '14': '03', '15': '03', '16': '13', '17': '14', '18': '15'
  };
  const app = document.getElementById('app');
  const screens = window.FOOD_KOMBO_FIGMA_SCREENS;
  const foundCards = new Set();
  let current = '01';
  let autoAdvanceTimer = null;
  let compilePromise = null;
  let targetUrl = null;
  let cameraScene = null;
  let cameraMode = null;
  let cameraStream = null;
  let cameraVideo = null;
  let cameraFailed = false;
  let cameraPermissionPromise = null;

  const cleanText = value => String(value || '').replace(/\s+/g, ' ').trim().toLocaleLowerCase('fr');
  const twoDigits = value => String(value).padStart(2, '0');

  function setPrompt(message) {
    if (!app.firstElementChild) return;
    const id = current === '06' ? '1:445' : current === '11' ? '1:486' : null;
    const target = id && app.querySelector('[data-node-id="' + id + '"]');
    if (target) target.textContent = message;
  }

  function destroyCamera() {
    if (cameraScene) {
      try {
        const system = cameraScene.systems && cameraScene.systems['mindar-image-system'];
        if (system && typeof system.stop === 'function') system.stop();
      } catch (_) {}
      cameraScene.remove();
    }
    if (cameraVideo) cameraVideo.remove();
    if (cameraStream) cameraStream.getTracks().forEach(track => track.stop());
    cameraVideo = null;
    cameraStream = null;
    cameraPermissionPromise = null;
    cameraScene = null;
    cameraMode = null;
  }

  function findLabel(label) {
    const root = app.firstElementChild;
    if (!root) return null;
    const wanted = cleanText(label);
    const candidates = Array.from(root.querySelectorAll('p, span, a, div'))
      .filter(element => cleanText(element.textContent) === wanted);
    candidates.sort((a, b) => a.textContent.length - b.textContent.length);
    return candidates[0] || null;
  }

  function bindAction(label, route) {
    const labelNode = findLabel(label);
    if (!labelNode) return;
    let target = labelNode.closest('a');
    if (!target) {
      let parent = labelNode.parentElement;
      for (let i = 0; parent && parent !== app.firstElementChild && i < 5; i += 1) {
        if (/button/i.test(parent.getAttribute('data-name') || '')) {
          target = parent;
          break;
        }
        parent = parent.parentElement;
      }
    }
    target = target || labelNode;
    target.dataset.route = route;
    target.setAttribute('role', 'button');
    target.setAttribute('tabindex', '0');
  }

  function bindBack() {
    const destination = previous[current];
    if (!destination) return;
    const arrow = findLabel('←') || findLabel('‹');
    if (!arrow) return;
    const button = arrow.closest('a') || arrow.closest('[data-name*="Button"]') || arrow;
    button.dataset.route = destination;
    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');
  }

  function useProvidedCardArt() {
    const root = app.firstElementChild;
    const replacement = current === '07'
      ? ['viande', 'riz', 'haricot', 'friture', 'oignon', 'tomate']
      : current === '08'
        ? ['riz', 'haricot', 'viande', 'friture', 'oignon', 'marmite']
        : null;
    if (!replacement) return;
    const imageNodes = root.querySelectorAll('[data-name*="iPhone 16"] img');
    imageNodes.forEach((image, index) => {
      const name = replacement[index];
      if (name) {
        image.src = 'assets/cards/' + name + '.png';
        image.alt = 'Carte ' + name;
      }
    });
  }

  function bindScreenActions() {
    bindBack();
    if (current === '01') return;
    if (current === '02') {
      bindAction('JOUER', '03');
      bindAction('CARNET DE RECETTES', '03');
      return;
    }
    if (current === '03') {
      bindAction('Atassi', '04');
      bindAction('Amiwo', '14');
      bindAction('Djongoli', '15');
      return;
    }
    if (current === '04' || current === '05') {
      bindAction('LANCER LE DÉFI', current === '04' ? '05' : '06');
      return;
    }
    if (current === '06') {
      bindAction('Scanner les cartes', '07');
      return;
    }
    if (current === '07') {
      bindAction('Cartes détectées', '08');
      return;
    }
    if (current === '08') {
      bindAction('Régler le feu', '09');
      return;
    }
    if (current === '09') {
      bindAction('VALIDER LA TEMPÉRATURE', '10');
      return;
    }
    if (current === '10') {
      bindAction('Parfait ✓', '11');
      bindAction('PARFAIT ✓', '11');
      return;
    }
    if (current === '11') {
      bindAction('Voir mon carnet', '12');
      return;
    }
    if (current === '12') {
      bindAction('VOIR MON CARNET', '03');
      return;
    }
    if (current === '13') {
      bindAction("Bénin · Afrique de l'Ouest · Cuisine traditionnelle", '16');
      bindAction('Mon carnet de recettes', '03');
      return;
    }
    if (current === '14') {
      bindAction("Bénin · Afrique de l'Ouest · Tradition Fon", '17');
      bindAction('Mon carnet de recettes', '03');
      return;
    }
    if (current === '15') {
      bindAction("Bénin · Afrique de l'Ouest · Cuisine Historique", '18');
      bindAction('Mon carnet de recettes', '03');
      return;
    }
    if (current === '16' || current === '17' || current === '18') {
      bindAction('VOIR LA RECETTE', current === '16' ? '13' : current === '17' ? '14' : '15');
    }
  }

  function mount(frame, continueAfterDetection) {
    if (autoAdvanceTimer) window.clearTimeout(autoAdvanceTimer);
    autoAdvanceTimer = null;
    destroyCamera();
    current = twoDigits(frame);
    if (!screens[current]) current = '01';
    const dimensions = sizes[current];
    app.dataset.frame = current;
    app.innerHTML = '<div class="frame-surface" data-frame="' + current + '" style="--design-width:' +
      dimensions[0] + 'px;--design-height:' + dimensions[1] + 'px">' + screens[current] + '</div>';
    fitSurface();
    useProvidedCardArt();
    bindScreenActions();

    if (current === '01') {
      autoAdvanceTimer = window.setTimeout(() => mount('03'), 2200);
    } else if (current === '06') {
      foundCards.clear();
      cameraFailed = false;
      startCamera('scan');
    } else if (current === '07' && continueAfterDetection) {
      autoAdvanceTimer = window.setTimeout(() => mount('08'), 1700);
    } else if (current === '11') {
      cameraFailed = false;
      startCamera('plate');
    }
  }

  function fitSurface() {
    const surface = app.firstElementChild;
    if (!surface) return;
    const designWidth = Number.parseFloat(surface.style.getPropertyValue('--design-width')) || 402;
    const designHeight = Number.parseFloat(surface.style.getPropertyValue('--design-height')) || 874;
    const viewportWidth = (document.documentElement && document.documentElement.clientWidth) || window.innerWidth;
    // Sur mobile, la maquette remplit toute la largeur disponible, quelle que
    // soit la largeur du téléphone. Sur desktop, on conserve sa taille de
    // référence pour éviter un agrandissement excessif.
    const scale = viewportWidth <= 600
      ? viewportWidth / designWidth
      : Math.min(1, viewportWidth / designWidth);
    surface.style.transform = 'scale(' + scale + ')';
    surface.style.transformOrigin = 'top center';
    surface.style.height = (designHeight * scale) + 'px';
    surface.style.marginBottom = '0px';
  }

  function requestCameraPermission() {
    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== 'function') {
      cameraFailed = true;
      showCameraError('Ce navigateur ne permet pas l’accès à la caméra. Ouvre le lien HTTPS dans Safari ou Chrome.');
      return Promise.resolve(null);
    }
    if (!cameraPermissionPromise) {
      cameraPermissionPromise = navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: { ideal: 'environment' } }
      }).then(stream => {
        cameraStream = stream;
        return true;
      }).catch(error => {
        cameraFailed = true;
        showCameraError(error && error.name === 'NotAllowedError'
          ? 'Autorise la caméra dans les réglages du navigateur puis réessaie.'
          : 'La caméra ne démarre pas. Vérifie que le lien est ouvert en HTTPS.');
        return false;
      });
    }
    return cameraPermissionPromise;
  }

  function database() {
    return new Promise((resolve, reject) => {
      if (!('indexedDB' in window)) {
        reject(new Error('Le stockage local du navigateur est indisponible.'));
        return;
      }
      const request = indexedDB.open('food-kombo-ar', 1);
      request.onupgradeneeded = () => request.result.createObjectStore('targets');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('Stockage indisponible.'));
    });
  }

  async function readCompiledTargets() {
    const db = await database();
    return new Promise((resolve, reject) => {
      const request = db.transaction('targets', 'readonly').objectStore('targets').get('cards-source-v3');
      request.onsuccess = () => {
        db.close();
        resolve(request.result || null);
      };
      request.onerror = () => {
        db.close();
        reject(request.error || new Error('Impossible de lire les cartes compilées.'));
      };
    });
  }

  async function saveCompiledTargets(data) {
    const db = await database();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('targets', 'readwrite');
      transaction.objectStore('targets').put(data, 'cards-source-v3');
      transaction.oncomplete = () => {
        db.close();
        resolve();
      };
      transaction.onerror = () => {
        db.close();
        reject(transaction.error || new Error('Impossible de garder les cartes compilées.'));
      };
    });
  }

  function loadCardImage(card) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Impossible de lire la carte ' + card.name + '.'));
      image.src = card.file;
    });
  }

  async function getTargetFile() {
    if (targetUrl) return targetUrl;
    if (compilePromise) return compilePromise;
    compilePromise = (async () => {
      try {
        const stored = await readCompiledTargets();
        if (stored) {
          targetUrl = URL.createObjectURL(new Blob([stored], { type: 'application/octet-stream' }));
          return targetUrl;
        }
      } catch (_) {}

      setPrompt('Préparation des sept cartes pour le scanner…');
      const moduleUrl = 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image.prod.js';
      const { Compiler } = await import(/* @vite-ignore */ moduleUrl);
      const images = await Promise.all(cards.map(loadCardImage));
      const compiler = new Compiler();
      await compiler.compileImageTargets(images, progress => {
        if (current === '06') setPrompt('Préparation des cartes : ' + Math.round(progress) + ' %');
      });
      const data = compiler.exportData();
      try {
        await saveCompiledTargets(data);
      } catch (_) {}
      targetUrl = URL.createObjectURL(new Blob([data], { type: 'application/octet-stream' }));
      return targetUrl;
    })();
    try {
      return await compilePromise;
    } catch (error) {
      compilePromise = null;
      throw error;
    }
  }

  function makeScene(mode, fileUrl) {
    const root = app.firstElementChild && app.firstElementChild.firstElementChild;
    if (!root) return null;
    const scene = document.createElement('a-scene');
    scene.id = 'ar-scene';
    scene.setAttribute('embedded', '');
    scene.setAttribute('mindar-image',
      'imageTargetSrc: ' + fileUrl + '; autoStart: true; maxTrack: 7; uiLoading: no; uiScanning: no; uiError: no; filterMinCF: 0.001; filterBeta: 1000');
    scene.setAttribute('vr-mode-ui', 'enabled: false');
    scene.setAttribute('device-orientation-permission-ui', 'enabled: false');
    scene.setAttribute('renderer', 'colorManagement: true; precision: mediump;');

    const assets = document.createElement('a-assets');
    if (mode === 'plate') {
      const meal = document.createElement('img');
      meal.id = 'dish-photo';
      meal.src = 'assets/meals/atassi.jpg';
      assets.appendChild(meal);
    }
    scene.appendChild(assets);

    cards.forEach((card, index) => {
      const target = document.createElement('a-entity');
      target.setAttribute('mindar-image-target', 'targetIndex: ' + index);
      target.addEventListener('targetFound', () => {
        if (mode === 'scan') cardFound(card.name);
      });
      if (mode === 'plate' && card.name === 'riz') {
        const plate = document.createElement('a-plane');
        plate.setAttribute('src', '#dish-photo');
        plate.setAttribute('position', '0 0 0.13');
        plate.setAttribute('width', '0.88');
        plate.setAttribute('height', '0.66');
        plate.setAttribute('material', 'shader: flat; side: double');
        plate.classList.add('ar-plate');
        target.appendChild(plate);
      }
      scene.appendChild(target);
    });

    root.prepend(scene);
    cameraScene = scene;
    cameraMode = mode;
    scene.addEventListener('arReady', () => {
      if (mode === 'scan') setPrompt('Caméra active : présente les cartes une à une dans le cadre.');
      if (mode === 'plate') setPrompt('Place la carte Riz devant la caméra pour voir l’Atassi.');
    });
    scene.addEventListener('arError', () => {
      showCameraError('Le mode AR a rencontré un problème. La caméra reste disponible en mode aperçu.');
      showCameraFallback();
    });
    window.setTimeout(() => {
      if (cameraScene === scene && !cameraFailed && current === (mode === 'scan' ? '06' : '11')) {
        if (!scene.hasLoaded) {
          showCameraError();
          showCameraFallback();
        }
      }
    }, 15000);
    return scene;
  }

  function showCameraFallback() {
    const root = app.firstElementChild;
    if (!root || cameraVideo) return;
    const attach = stream => {
      cameraStream = stream;
      const video = document.createElement('video');
      video.className = 'camera-preview';
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      video.srcObject = stream;
      root.prepend(video);
      cameraVideo = video;
    };
    if (cameraStream) {
      attach(cameraStream);
      return;
    }
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: 'environment' } } })
        .then(attach)
        .catch(() => {});
    }
  }

  function cardFound(name) {
    foundCards.add(name);
    window.onCardsDetected(Array.from(foundCards));
    if (foundCards.size >= 5 && current === '06') {
      setPrompt('Cinq cartes repérées. Préparation de la combinaison…');
      window.setTimeout(() => {
        if (current === '06') mount('07', true);
      }, 900);
    }
  }

  function showCameraError(customMessage) {
    cameraFailed = true;
    const message = customMessage || 'La caméra ne démarre pas. Ouvre Food Kombo en HTTPS et autorise son accès à la caméra.';
    setPrompt(message);
    let note = app.querySelector('.camera-note');
    if (!note && app.firstElementChild) {
      note = document.createElement('div');
      note.className = 'camera-note';
      app.firstElementChild.appendChild(note);
    }
    if (note) note.textContent = message;
    if (app.firstElementChild && !app.querySelector('.camera-retry')) {
      const retry = document.createElement('button');
      retry.className = 'camera-retry';
      retry.type = 'button';
      retry.textContent = 'ACTIVER LA CAMÉRA';
      retry.addEventListener('click', () => {
        cameraFailed = false;
        cameraPermissionPromise = null;
        requestCameraPermission().then(() => startCamera(cameraMode || 'scan'));
      });
      app.firstElementChild.appendChild(retry);
    }
  }

  async function startCamera(mode) {
    if (!window.AFRAME || !window.MINDAR) {
      showCameraError();
      return;
    }
    try {
      const permission = await requestCameraPermission();
      if (!permission) return;
      const fileUrl = await getTargetFile();
      if (current !== (mode === 'scan' ? '06' : '11')) return;
      makeScene(mode, fileUrl);
    } catch (error) {
      console.error('Food Kombo AR:', error);
      showCameraError();
    }
  }

  function navigateFromEvent(event) {
    const target = event.target.closest('[data-route]');
    if (!target) return false;
    const next = target.dataset.route;
    if (next === '06' || next === '11') requestCameraPermission();
    if (next === '07' && current === '06') {
      if (foundCards.size >= 5) {
        mount('07', true);
      } else if (cameraFailed) {
        cameraFailed = false;
        cameraPermissionPromise = null;
        requestCameraPermission().then(permission => {
          if (permission && current === '06') startCamera('scan');
        });
        setPrompt('Autorise la caméra, puis appuie à nouveau sur « Scanner les cartes ».');
      } else {
        setPrompt('Présente cinq cartes différentes pour continuer.');
      }
    } else {
      mount(next);
    }
    return true;
  }

  app.addEventListener('click', event => {
    if (navigateFromEvent(event)) return;
    if (current === '01') {
      mount('03');
      return;
    }
    if (current === '07' && event.target.closest('[data-node-id="1:530"], [data-node-id="1:535"]')) {
      mount('08');
      return;
    }
    if (current === '10' && event.target.closest('[data-node-id="1:660"], [data-node-id="1:662"], [data-node-id="1:664"]')) {
      mount('11');
    }
  });

  window.addEventListener('resize', fitSurface, { passive: true });
  if (window.visualViewport) window.visualViewport.addEventListener('resize', fitSurface, { passive: true });

  app.addEventListener('keydown', event => {
    const target = event.target.closest('[data-route]');
    if (target && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      target.click();
    }
  });

  window.onCardsDetected = names => {
    (names || []).forEach(name => {
      const normalized = String(name).trim().toLocaleLowerCase('fr');
      if (cards.some(card => card.name === normalized)) foundCards.add(normalized);
    });
  };

  window.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (/^[1-9]$/.test(event.key)) mount(twoDigits(event.key));
    if (/^[a-i]$/i.test(event.key) && event.shiftKey) {
      mount(twoDigits(event.key.toLowerCase().charCodeAt(0) - 96 + 9));
    }
  });

  const requestedFrame = new URLSearchParams(window.location.search).get('frame');
  mount(requestedFrame && sizes[twoDigits(requestedFrame)] ? twoDigits(requestedFrame) : '01');
})();
