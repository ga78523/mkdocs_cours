# Installation de Visual Studio Code et de ses extensions pour développer en Python

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

## Installer Python

* Télécharge Python depuis le site officiel : [https://www.python.org/downloads/](https://www.python.org/downloads/)
* Lance l’installateur et coche **Add Python to PATH** avant d’installer.

## Configurer l’interpréteur Python

* Dans VS Code, tape `Ctrl+Shift+P` (palette de commandes).
* Cherche Python : Select Interpreter.
* Choisis ton installation de Python (par ex. Python 3.13.7).

## Tester ton projet Python dans VS Code

* Crée un dossier pour ton projet (par ex. C:\MesProjetsPython\hello).
* Ouvre VS Code → File → Open Folder → choisis ton dossier.
* Crée un fichier `hello.py` avec le code suivant : 

``` py
print("Hello world")
```

## Installer les extensions utiles

* Clique sur l’icône Extensions (ou Ctrl+Shift+X) et installe :

    * Python (Microsoft) → support complet pour Python (autocomplétion, linting, debugging).
    * Pylance → autocomplétion plus intelligente et rapide.
    * Jupyter → si tu veux utiliser des notebooks `.ipynb` dans VS Code.

## Tester son programme

Clique sur la flèche verte pour exécuter ton programme.

