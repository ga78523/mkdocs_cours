# Tutoriel MkDocs

## Installation

Assure-toi d’avoir **Python 3** et **pip** installés.  
Puis installe MkDocs avec :

```bash
pip install mkdocs
```


Optionnel mais recommandé : installer un thème moderne comme Material for MkDocs :

```bash
pip install mkdocs-material
```

## Création d’un projet

Dans le dossier où tu veux ton site, lance :

``` bash
mkdocs new projet
cd projet
```

Cela crée la structure suivante :

```bash
projet/
├── docs/
│   └── index.md   # Page d’accueil
└── mkdocs.yml     # Fichier de configuration
```

## Lancer le serveur local

``` bash
mkdocs serve
```

Ouvre ton navigateur avec l'adresse `http://127.0.0.1:8000` pour voir le site.

## Ajouter du contenu

Mets tes fichiers Markdown dans `docs/`.

Exemple :

``` bash
docs/
├── index.md
├── tutoriel.md
└── api.md
```

Dans `mkdocs.yml`, déclare la navigation :

``` yaml
site_name: "Ma Documentation"
theme:
  name: material   # ou mkdocs (par défaut)

nav:
  - Accueil: index.md
  - Analyse immeuble: immeuble.md
  - analyse du code : code.md
```

## Personnaliser le thème

Avec `Material, tu peux activer des options utiles :

``` yaml
theme:
  name: material
  features:
    - navigation.tabs
    - search.highlight
    - content.code.copy
```

Tu peux aussi ajouter un logo, favicon, couleurs, etc.

## Générer le site statique

Quand ton site est prêt :

``` bash
mkdocs build
```

Cela crée un dossier `site/` contenant les fichiers HTML/CSS/JS prêts à être déployés (par ex. sur GitHub Pages, Netlify, Vercel…).

## Déploiement rapide sur GitHub Pages

Si ton projet est dans un dépôt GitHub :

``` bash
mkdocs gh-deploy
```

Cela génère et pousse le site sur la branche `gh-pages`. 