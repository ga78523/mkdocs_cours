# Installation de Visual Studio Code et de ses extensions pour développer en HTML et CSS

## Introduction

Visual Studio Code, souvent abrégé **VS Code**, est un éditeur de code
**open source** développé par **Microsoft**.

- Il a été **annoncé en 2015** et rapidement adopté grâce à sa légèreté
et sa rapidité.
- Contrairement à l'environnement complet **Visual Studio**, VS Code est
un **éditeur multiplateforme** (Windows, macOS, Linux) conçu pour être
simple mais extensible.
- Il repose sur **Electron** (technologie qui combine Node.js et
Chromium), ce qui lui permet de fonctionner sur différents systèmes tout
en offrant une interface moderne.
- Aujourd'hui, c'est l'un des éditeurs les plus utilisés au monde, avec
une très grande communauté et une énorme bibliothèque d'extensions.

## Les utilisations principales

VS Code est un **éditeur polyvalent** qui peut s'adapter à presque tous
les langages et besoins grâce à ses extensions.

### Développement Web

-   Écrire et tester du **HTML, CSS et JavaScript**
-   Frameworks modernes : **React, Angular, Vue.js**
-   Extensions comme *Live Server* pour voir son site en direct

### Programmation générale

-   Support natif de nombreux langages : **Python, C, C++, Java, Go,
    PHP, etc.**
-   Autocomplétion intelligente (IntelliSense)
-   Debugging intégré

### Gestion de projets

-   Intégration complète avec **Git et GitHub** (suivi des versions,
    commits, push/pull)
-   Terminal intégré pour exécuter directement des commandes

### Personnalisation

-   Grande bibliothèque d'extensions (thèmes, snippets, outils de productivité)
-   Personnalisation de l'apparence et des raccourcis clavier

## Télécharger et installer VS Code

* Va sur le site officiel : [https://code.visualstudio.com/](https://code.visualstudio.com/)

* Télécharge la version adaptée à ton système :

    * Windows : .exe
    * macOS : .dmg
    * Linux : .deb ou .rpm selon ta distribution

* Installe le programme (suis l’assistant et coche **"Ajouter au PATH"** quand proposé).

## Ouvrir VS Code

* Lance **Visual Studio Code.** Tu arrives sur un écran d’accueil (vide si c’est la première fois).

## Créer ton premier projet HTML

* Crée un dossier. Par exemple, **site_essai**
* Dans VS Code → File → Open Folder → choisis ton dossier.
* Crée un fichier `index.html`. Pour cela, effectue un clique droit dans l’explorateur de fichiers à gauche → New File → tape `index.html`.

## Installer les extensions utiles pour HTML

Dans VS Code :

* Clique sur l’icône Extensions (carré avec 4 carrés à gauche, ou Ctrl+Shift+X).
* Recherche et installe les extensions suivantes :

✅ Indispensables

* HTML CSS Support (by ecmel) → aide à l’autocomplétion HTML & CSS.
* IntelliSense for CSS class names in HTML → complète automatiquement les classes CSS dans tes fichiers HTML.
* Prettier - Code formatter → formate ton code (indentation, espaces) automatiquement (Shift+Alt+F).
* Live Server (by Ritwick Dey) → lance un petit serveur local et ouvre ton site dans le navigateur.
(Ensuite, clic droit sur index.html → Open with Live Server).

🔥 Bonus utiles

* Auto Rename Tag : quand tu modifies `<div>`, ça change automatiquement `</div>`.
* Path Intellisense : complète automatiquement les chemins de fichiers (/images/...).
* Highlight Matching Tag : surligne la balise ouvrante/fermante correspondante.

## Tester ton projet

Mets du contenu dans `index.html`, par exemple :

``` html linenums='1'
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon premier site</title>
</head>
<body>
    <h1>Bienvenue !</h1>
    <p>Ceci est ma première page HTML.</p>
</body>
</html>
```

Clique droit sur `index.html` → `Open with Live Server`.

Le navigateur s’ouvre avec ton site (et il se mettra à jour automatiquement quand tu modifies ton code 👍).

## Raccourcis pratiques

## ✨ Édition du code

-   **Indentation automatique** : `Alt + Shift + F`
-   **Dupliquer une ligne** : `Shift + Alt + ↑` ou `Shift + Alt + ↓`
-   **Déplacer une ligne** : `Alt + ↑` ou `Alt + ↓`
-   **Commenter / décommenter** : `Ctrl + /`
-   **Fermer une balise automatiquement** : *(via extension Auto Rename
    Tag)*

## 🔍 Navigation & sélection

-   **Multi-cursor** : `Alt + clic`
-   **Ajouter un curseur en dessous/dessus** : `Ctrl + Alt + ↓` ou
    `Ctrl + Alt + ↑`
-   **Sélectionner le mot suivant** : `Ctrl + D`
-   **Tout sélectionner** : `Ctrl + A`
-   **Aller à un fichier** : `Ctrl + P`
-   **Aller à une ligne** : `Ctrl + G`

## HTML / Emmet

-   **Structure de base** : `!` puis `Entrée`

-   **Exemple Emmet** : `div.container>ul>li*3`\
    génère :

    ``` html
    <div class="container">
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    ```

## 📂 Contrôle du projet

-   **Ouvrir le terminal intégré** : `Ctrl + ²` (ou \`Ctrl + \`\`)
-   **Ouvrir l'explorateur de fichiers** : `Ctrl + Shift + E`
-   **Rechercher dans tout le projet** : `Ctrl + Shift + F`
-   **Changer d'onglet/fichier** : `Ctrl + Tab`

## 🚀 Live Server

-   **Lancer Live Server** : clic droit sur `index.html` → *Open with
    Live Server*
-   **Raccourci (si activé)** : `Alt + L, Alt + O`




