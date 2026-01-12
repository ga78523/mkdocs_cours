# Bibliothèques et API

## Modularité

La modularité est un concept général qui peut se résumer en 4 phases :

* découper un ensemble en composants indépendants afin de rendre les gros projets réalisables .
* donner de la structure à l'ensemble dans le but de rendre les gros projets compréhensibles ;
* spécifier les liens entre les différents composants pour rendre les gros projets maintenables.
* identifier des sous composants indépendants avec l'objectif de rendre des bouts de projets réutilisables.

## Rappels sur les notions de modules, bibliothèque

Lorsque l'on cherche à écrire un programme, on utilise des souvent des structures déjà existantes. Ces structures sont disponibles dans des modules et/ou des bibliothèques. En python, il existe une bibliothèque native qui contient de nombreux outils . Il existe de nombreuses bibliothèques disponibles en langage python.

Différences entre package, module et bibliothèque

!!! Success "Définition : Module"
    Un module est un simple fichier contenant du code Python, généralement avec l’extension .py.
    Il regroupe des fonctions, des classes, des variables, etc., qui peuvent être importées et utilisées dans d’autres programmes pour organiser et réutiliser le code.

!!! Success "Définition : Package"
    Un package est un dossier contenant plusieurs modules (et éventuellement d’autres sous-packages).
    Il doit contenir un fichier spécial __init__.py pour être reconnu comme package par Python.
    Le package permet de structurer et d’organiser des ensembles de modules de façon hiérarchique.

!!! Success "Définition : Bibliothèque"
    Une bibliothèque (ou librairie) est un ensemble de modules et/ou de packages qui apportent des fonctionnalités réutilisables pour différents programmes. Elle peut contenir un ou plusieurs packages, voire des modules seuls.

Par exemple, la bibliothèque standard de Python regroupe de nombreux modules et packages pour diverses tâches (mathématiques, manipulation de fichiers, etc.).

Dans certains contextes, le terme « bibliothèque » désigne aussi des ensembles de codes précompilés dans d’autres langages, utilisables via des liaisons Python.

## API (Application Programming Interface)

### Principes généraux

#### Définition

!!! Success "Définition :API "
    Une API (Application Programming Interface), ou interface de programmation, est un ensemble normalisé de briques logicielles grâce auxquelles un système informatique offre des services à d’autres systèmes. 

Quand nous consultons la météo sur notre smartphone, il utilise l’API du service météo en question. La plupart des applications mobiles sont conçues autour d’une ou plusieurs API.

L’objectif d’une API est de fournir des fonctionnalités, sans révéler le fonctionnement
interne de l’application qui fournit les données. C’est en cela qu’on dit qu’une API est
en façade : on ne voit pas l’intérieur du bâtiment.

Concrètement, une API est constituée d’une bibliothèque logicielle, d’un service
web et d’une description qui spécifie comment les clients peuvent interagir avec la
plateforme logicielle qui fournit les données, appelée aussi fournisseur.

#### Comment procéder?

Généralement, pour utiliser une API, il faut effectuer une requête sur un serveur
web associé au fournisseur. Les éléments nécessaires à la requête sont précisés dans
la description de l’API. Afin de limiter le nombre d’accès ou d’identifier des accès
malveillants au serveur, il est souvent demandé une clé d’authentification. Cette clé
s’obtient sur le site web du fournisseur. Elle peut être gratuite ou payante, selon les cas.

#### Intérêt

Pourquoi utiliser une API pour s’interfacer à une base de données plutôt que de
télécharger simplement un ou plusieurs fichier(s) CSV de l’ensemble des données?

Quelques avantages :  

* les données changent très rapidement. Ce qui est vrai aujourd’hui peut-être faux demain. 
* Une API permet un lien permanent avec la base de données, on peut filtrer les données que l’on récupère, en fonction de multiples critères, et ne pas télécharger la totalité d’une base de données à chaque fois ;
* une API permet d’automatiser les requêtes et de les intégrer dans d’autres applications.

#### API Python

De nombreuses API disposent d’un wrapper Python : c’est un module Python qui
permet d’interroger la base de données du fournisseur de façon simplifiée, sans avoir
à écrire les requêtes Web, ni à interpréter les réponses. Celles-ci sont généralement
écrites au format JSON, qui est un format d’échange de données, au même titre
que le XML. À partir de ces réponses, le wrapper Python génère des listes ou des
dictionnaires, facilement manipulables.

Il existe beaucoup d'API. Pour avoir quelques API, consulter ce site : [API](https://github.com/discdiver/list-of-python-api-wrappers)

## Un exemple d'API : celle de la NASA

### Introduction

La NASA offre des API libres d'accès (avec une clé personnelle) permettant de parcourir des données collectées par des satellites, des téléscopes, des robots, etc...

Nous nous interesserons à l'API Mars Rover Photos. Cette API permet de consulter les photos prises par les différents Rovers sur Mars, à différentes dates.

### API NASA: Python 

* Aller sur le site [https://api.nasa.gov](https://api.nasa.gov), s'enregistrer puis obtenir une clé d'authentification.
* Sur vscode, installer `web-browser`, `json`, `requests`.
* Copier/Coller le code suivant :

``` py linenums="1" title="Programme 1 : Nasa"
import requests
import webbrowser
import json

nasa_key = "your_key"

url = f"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"

params = {
    "sol": 50,  # jour martien
    "camera": "FHAZ",  # type de caméra
    "api_key": nasa_key
}

response = requests.get(url, params=params)

data = response.json()

print(json.dumps(data,indent= 2))
```

On obtient la réponse suivante :

``` py linenums="1" title="Réponse"
{
  "photos": [
    {
      "id": 707,
      "sol": 50,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00050/opgs/edr/fcam/FRA_401936576EDR_F0042956FHAZ00305M_.JPG",
      "earth_date": "2012-09-26",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    },
    {
      "id": 9646,
      "sol": 50,
      "camera": {
        "id": 20,
        "name": "FHAZ",
        "rover_id": 5,
        "full_name": "Front Hazard Avoidance Camera"
      },
      "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00050/opgs/edr/fcam/FLA_401936576EDR_F0042956FHAZ00305M_.JPG",
      "earth_date": "2012-09-26",
      "rover": {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active"
      }
    }
  ]
}
```

!!! example "Exercice 1"
    A propos du code précédent ?

    1. Exécuter le code précédent et observer ;
    2. De quel type est la variable `data`? Pourquoi l'ouvre-t-on avec JSON ?
    3. Combien de photos "contient" cette variable ?
    4. Par quelle instruction peut-on connaître le nombre de photo ?
    5. Comment y accède-t-on ?
    6. Afficher une photo dans votre navigateur par défaut à l'aide de la fonction `open_new_tab()`. La documentation est [ici](https://docs.python.org/3/library/webbrowser.html)
    7. Changer de camera et executer le programme. Combien de photos sont renvoyées ?
    8. Modifier l'url et executer.
    9. Tester l'obtention d'autres vues à l'aide du [site](https://apidog.com/blog/how-to-use-nasa-api/)

### API NASA : web

A l'aide du site situé à cette [adresse](https://dev.to/meredydd/getting-photos-from-mars-with-the-nasa-api-3l2l), de boostrap, réaliser un site ou une page web permettant de sélectionner un rover, une caméra et une date ou un sol afin d'obtenir un carroussel des photos correspondantes.

Vous pourrez utiliser les codes :

``` js title="utiliser une url en js"

fetch("URL")
  .then(response => response.json())  // transforme la réponse HTTP en JSON
  .then(data => {
    console.log(data); // utilise les données récupérées
  });
```

``` js title="Afficher une image en js"
// 1. Créer l'élément <img>
const img = document.createElement("img");

// 2. Définir la source de l'image
img.src = "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/0050/opgs/edr/ncam/NLA_397463618EDR_F0030000NCAM00353M_.JPG";

// 3. Ajouter une description alternative (pour l'accessibilité)
img.alt = "Photo de Mars";

// 4. (Optionnel) Définir la taille
img.width = 500;

// 5. Ajouter l’image dans la page
document.getElementById("image-container").appendChild(img);
```

``` js title="json en js"
const jsonText = `{
  "photos": [
    { "id": 1, "camera": "NAVCAM", "img_src": "url1.jpg" },
    { "id": 2, "camera": "MAST", "img_src": "url2.jpg" }
  ]
}`;

const data = JSON.parse(jsonText);

// Accès à des éléments précis :
console.log(data.photos);              // ➜ tableau complet
console.log(data.photos[0]);          // ➜ premier objet
console.log(data.photos[0].camera);   // ➜ "NAVCAM"
console.log(data.photos[1].img_src);  // ➜ "url2.jpg"
```