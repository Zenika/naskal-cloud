# Naskal Benchmark — Cloud Providers 2026

**POC genere par IA** — Developpe dans le cadre d'une demo client.

## Description

Interface interactive de benchmark des fournisseurs cloud 2026. Visualisation quadrant Gartner-style avec scoring sur 11 dimensions et 36 sous-dimensions, graphiques de ponderation et tableaux comparatifs.

## Stack

Vanilla HTML / CSS / JS — aucun framework, aucun build system.

## Architecture

```
front/
├── index.html              # Page principale (SPA)
├── styles.css              # Styles globaux (dark theme, design tokens)
└── js/
    ├── config.js           # Constantes et configuration
    ├── models.js           # Classes metier (Dimension, Vendor, AnalysisAxis...)
    ├── data.js             # Donnees initiales et singleton benchmarkModel
    ├── utils.js            # Fonctions utilitaires (scores, couleurs)
    ├── renderer-table.js   # Rendu du tableau comparatif
    ├── renderer-graph.js   # Rendu du graphe SVG de ponderation
    ├── renderer-quadrant.js# Rendu du quadrant Gartner-style
    ├── weights.js          # Slider de modification des poids
    └── app.js              # Bootstrap de l'application
```

## Lancement

Ouvrir `index.html` directement dans un navigateur.

## Evolution vers la production

Cette architecture modulaire est concue pour se connecter a un moteur de calcul et une base de donnees. Le point de branchement principal est `data.js`, qui pourrait etre remplace par des appels API sans impacter les renderers.

Axes d'evolution identifies :

- **Chargement asynchrone** : remplacement des donnees statiques par des appels `fetch` vers un backend
- **Persistance des poids** : sauvegarde serveur des ponderations utilisateur
- **Build system** : migration vers Vite pour bundling, variables d'environnement et minification
- **Authentification** : couche d'acces securise a ajouter
