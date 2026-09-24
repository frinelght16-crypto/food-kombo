# Food Kombo

Reconstruction des 18 frames Figma, avec les visuels du dossier App AR FOOD COMBO.

## Lancer l’application

1. Installe les dépendances avec npm install.
2. Lance npm run dev.
3. Ouvre l’adresse locale affichée par Vite. Le navigateur doit être sur localhost ou HTTPS pour autoriser la caméra.

## GitHub Pages

Le build de production est généré dans `dist` avec `npm run build`. Le workflow `.github/workflows/pages.yml` le publie automatiquement après un push sur `main`. Dans les paramètres du dépôt, sélectionne **Settings → Pages → GitHub Actions** comme source de publication.

## Cartes et réalité augmentée

Le scanner et les écrans utilisent directement les sept PNG du dossier fourni : Viande, Riz, Haricot, Oignon, Tomate, Marmite et Friture. Au premier scan, Food Kombo prépare leurs repères d’image et les garde dans le stockage local du navigateur.

L’écran AR affiche la photo Atassi du dossier fourni au-dessus de la carte Riz reconnue. Cette version utilise l’image 2D choisie pour la maquette.

## Frames

01 splash · 02 accueil · 03 repas · 04 recette demandée · 05 défi · 06 caméra · 07 cartes détectées · 08 combinaison · 09 température · 10 cuisson · 11 aperçu AR · 12 succès · 13 Atassi · 14 Amiwo · 15 Djongoli · 16–18 origines.

Pour ouvrir directement une frame, ajoute ?frame=13 à l’adresse locale.
