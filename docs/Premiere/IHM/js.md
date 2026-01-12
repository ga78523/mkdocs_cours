# Les bases en Javascript

## Présentation du Javascript

Le langage HTML (ou Hypertext Markup Language) permet de créer la structure d’une page internet. Grâce à un jeu de balises, il permet de décomposer la page comme un traitement de texte : titre, sous-titre, section,...

Le CSS (ou Cascade Style Sheets) permet la mise en forme des différents éléments HTML.

On peut ainsi modifier la couleur ou la police des éléments précédents.

Les pages ainsi créées sont statiques c’est-à-dire que l’interaction avec l’utilisateur est réduite à la possibilité de cliquer sur un lien hypertexte présent dans la page.

On peut dynamiser la page internet de deux manières :

* soit du côté serveur avec PHP (ou Hypertext Preprocessor) qui peut, par exemple, ajouter le
résultat d’une requête à une base de données dans la page qui sera fournie au navigateur ;
* soit du côté client avec JavaScript qui peut, par exemple, faire apparaître des info-bulles contextuelles ou réaliser des animations.

JavaScript est un langage qui a été créé en 1995 par Brendan Eich. Ce dernier a travaillé chez Netscape Communication Corporation principal concurrent à l’époque d’Internet Explorer.

## Premier Programme

### Code

Ne dérogeons pas à la règle traditionnelle qui veut que tous les tutoriels de programmation
commencent par afficher le texte « Hello World ! »

Voici un code HTML simple contenant une instruction (nous allons y revenir) JavaScript, placée au
sein d’un élément `<script>`:

```html linenums="1"
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
            <title>Hello World!</title>
        </head>
    <body>


    <script>
    alert('Hello world!'); // affichage
    </script>


</body>
```

### Observations et changements par rapport à Python

* Un élément `<script>` est présent dans la page HTML : c’est cet élément qui contient le code
Javascript ;
* Le code Javascript ne contient qu’une seule instruction : l’instruction `alert()`. Cette instruction
permet d’afficher une boîte de dialogue contenant un message. Le message en question est placé
entre apostrophes.
* La sortie avec la fonction `alert()` peut être remplacé par une sortie sur la console grâce à
l’instruction `console.log('Hello world!')`. Il faut se rendre sur la console du navigateur (en
général : menu puis développement web puis console web) ou encore sur le corps de la page
web avec l’instruction `document.write('Hello world!')`
* Chaque instruction doit se terminer par un point virgule ;
* Le Javascript, contrairement au Python n’est sensible ni à l’indentation, ni aux espaces ;
* Les commentaires monolignes commencent par deux slashs `//`(tandis qu’en Python ils commencent par #) et les commentaires multilignes se font par `/*` et se termine par `*/` .

**Remarque :** on peut aussi placer un commentaire multiligne sur une seule ligne

Exemple :

``` html linenums="1"
/* Ce script comporte 3 instructions :
- Instruction 1 qui fait telle chose
- Instruction 2 qui fait autre chose
- Instruction 3 qui termine le script
*/

instruction_1;
instruction_2; /*Commentaire */
instruction_3; // Fin du script
```

!!! exercice "Exercice 1 :"
    Afficher son prénom sur une boite de dialogue puis dans la console. Puis y placer un commentaire monoligne et un commentaire multiligne.

## Le javascript : un langage comme Python

### Où écrire son code

Il est possible, et même conseillé, d’écrire le code JavaScript dans un fichier externe, portant
l’extension .js. Ce fichier est ensuite appelé depuis la page Web au moyen de l’élément `<script>` et
de son attribut src qui contient l’URL du fichier.js. Ce code fichier.js s’insère dans l’HTML de la
manière suivante :

``` html linenums="1"
<script src="hello.js"></script>
```

Dans votre éditeur web, taper le code suivant :

=== "html"

    ``` html linenums="1"

    <!DOCTYPE html>
    <html>
        <head>
            <title>Hello World!</title>
        </head>
        <body>
            <p> Lorem ipsum dolor sit amet.<p>
        <script src="hello.js"></script>
    </body>
    </html>
    ```

=== "js"

    ``` javascript linenums="1"
    alert('Hello world!'); // affichage
    ```

### Les variables

Contrairement à python, les variables utilisées en JavaScript doivent être déclarées.

``` JavaScript linenums="1"
var variable1, variable2 = "exemple";   // domaine d'existence limité à la fonction où elle sont déclarées.
let variable3;                          // domaine d'existence limité au bloc où elle est déclarée.
const vitesseLumiere = 3e8;             // définit une constante (qu'on ne peut pas modifier par la suite).
variable2 = "exemple2";                 // affectation d'une nouvelle valeur à variable2
```

Sachez seulement que :

* let définit des variables dont la portée (l'ensemble des lignes où la variable est connue et utilisable) est celle du bloc ;
* var définit des variables dont la portée est celle de la fonction.

En JavaScript, il existe 7 types de valeurs différents. Chaque valeur qu’on va pouvoir créer et manipuler en JavaScript va obligatoirement appartenir à l’un de ces types. Ces types peuvent être notamment :

* String ou « chaine de caractères » en français ;
* Number ou « nombre » en français ;
* Boolean ou « booléen » en français.

### Les conversion de types

Comme en Python, on peut avoir besoin de convertir une variable d’un type vers un autre. En Javascript, il existe de nombreuses manière de réaliser cette tâche mais les plus simples sont ces fonctions :

* `parseInt(variableAConvertir, base)` ; Cette fonction se charge de convertir en entier (et
dans une certaine base) la `variableAConvertir`
* `parseFloat(variableAConvertir ;` Cette fonction se charge de convertir en flottant `la variableAConvertir` ;
* `parseString(variableAConvertir) ;` Cette fonction se charge de convertir en chaîne de caractère la `variableAConvertir` ;

### Affichage avec la fonction `prompt`

La fonction `prompt("Question")` crée une fenêtre où apparaît la Question et où l’utilisateur dispose d’un champ pour y répondre. La réponse tapée est considérée par Javascript comme un chaîne de caractère.

Exemples :

``` Javascript
let name = prompt("Quel est votre prénom");
alert(x) ;
let x = parseInt(prompt("Tapez un valeur x?"),10);
alert(x) ;
```

### Les opérations arithmétiques

Les opérateurs arithmétiques vont nous permettre d’effectuer toutes sortes d’opérations mathématiques entre les valeurs de type Number contenues dans différentes variables.

Nous allons pouvoir utiliser les opérateurs arithmétiques du tableau 1 en JavaScript :

<figure markdown>

| Opérateur | Nom de l'opération associée      |
|-----------|-----------------------------------|
| +         | Addition                          |
| -         | Soustraction                      |
| *         | Multiplication                   |
| /         | Division                          |
| %         | Modulo (reste d’une division)    |
| **        | Puissance                        |

*Tableau 1 – Opérateurs*

</figure markdown>

!!! example "Exercice 2"

  1)  Écrire un script qui demande une somme en dollars, qui la convertit en euros et qui affiche la somme en euros à l’aide la fonction `alert` ;
  2) Écrire un script dans lequel vous afficherez la valeur de $x^2 + 3y × z$. Il faudra déclarer quatre variables et afficher le résultat à l’aide de la fonction `alert`

### Les instructions conditionnelles et les boucles

#### Condition avec if

**Syntaxe**

```
if(condition)
{
instruction1;
}
else
{
instruction2;
}
```

**Exemple :**

``` js
let x = parseInt(prompt("x?"),10);
if(x > 1){
alert('x est strictement supérieure à 1');
}
else{
alert('x est inférieure ou égale à 1');
}
```

#### Les opérateurs de conditions et les opérateurs logiques

<figure markdown>
| Opérateur | Définition                                                             |
|-----------|------------------------------------------------------------------------|
| ==        | Permet de tester l’égalité sur les valeurs                             |
| ===       | Permet de tester l’égalité en termes de valeurs et de types            |
| !=        | Permet de tester la différence en valeurs                              |
| <>        | Permet également de tester la différence en valeurs                   |
| !==       | Permet de tester la différence en valeurs et en types                  |
| <         | Permet de tester si une valeur est strictement inférieure à une autre  |
| >         | Permet de tester si une valeur est strictement supérieure à une autre  |
| <=        | Permet de tester si une valeur est inférieure ou égale à une autre     |
| >=        | Permet de tester si une valeur est supérieure ou égale à une autre     |

*Tableau 2 – Les opérateurs de comparaison*
</figure>

<figure markdown>
| Opérateur | Opérateur logique |
|-----------|--------------------|
| &&        | et                |
| \|\|      | ou                |
| !         | non               |

*Tableau 3 – Les opérateurs logiques*
</figure>

!!! example "Exercice 3"
    Reprendre l’exercice avec la conversion euro/dollars et ajouter une condition. Si la somme
    excède 15 euros, afficher "trop cher" et si elle est en dessous ou égale, afficher "on prend" .

#### While et le for

La synatxe de la boucle `while` s’écrit ainsi en Javascript :

```
while (condition) {
instruction_1;
instruction_2;
}
```

Et la boucle `for` s’écrit ainsi en Javascript :

**Modèle**

```
for (initialisation; condition; incrémentation)
{
instruction_1;
instruction_2;
}
```

**Exemple**

``` js
let str = '';
for (let i = 0; i < 9; i++) {
str = str + i;
}
console.log(str);
```

!!! example "Exercice 4"
    Écrivez une boucle `while` qui se répète 10 fois. Vous ferez le même exercice avec une boucle `for`.

!!! example "Exercice 5"
    Écrire un script Javascript qui tente de faire deviner un entier de votre choix et affiche, plus petit, ou plus grand jusqu’à la victoire. Vous pourrez utiliser la fonction suivante :

    ``` js
    function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
    console.log(getRandomInt(3));
    // Expected output: 0, 1 or 2
    console.log(getRandomInt(1));
    // Expected output: 0
    console.log(Math.random());
    // Expected output: a number from 0 to <1
    ```

### Les fonctions

La définition d’une fonction est introduite par le mot clé function suivi de ses arguments, puis du code de la fonction entre accolades Le résultat de la fonction est indiqué par le mot-clé `return`.

**Modèle**

``` js
function maFonction(arguments) {
// Le code à executer
}
```

**Exemple :**

``` js
function carre(i){
return(i*i);
} 
```

Pour appeler cette fonction, deux manières sont possibles : soit dans le fichier js soit dans le fichier js.

=== "js"
    ``` Javascript
    document.write(carre(3));
    ```
=== "html"
    ``` html
    <script>
    document.write("Le résultat : "+carre(3)+".");
    </script>
    ```

!!! example "Exercice 6"

  1) Écrire une fonction calculant le discriminant $b^2 + 4\times a\times c$ d'un polynôme de degré 2 . Cette fonction prendra trois arguments : a,b, et c et retournera la valeur du discriminant.
  2) Appeler cette fonction dans le fichier html puis dans le js.

## Les évènements

De manière générale, on préfère l'utilisation de let ou const à l'utilisation de var qui date des tous débuts de JavaScript.

### Fonctionnement d’un navigateur web

L’un des principaux attraits de l’interpréteur Javascript d’un navigateur est la possibilité de modifier dynamiquement et en temps réel le rendu d’une page web.

Le navigateur commence par télécharger le fichier HTML correspondant à l’URL visitée. Une fois récupérée, la page est transformée en une structure de donnée d’arbre.

<figure markdown>
![dom](img_event/DOM.png){width=400px}
</figure>

Une fois l’arbre construit, ses noeuds (les éléments du document HTML) sont parcourus, les règles CSS sont appliquées et le rendu graphique de la page est effectué.

Dans un même temps, les scripts Javascript présents dans la page sont exécutés. L’une de leur
activité principale est la définition de gestionnaires d’évènements.

Ces gestionnaires d’évènements peuvent modifier librement l’arbre représentant le document.

Ajouter ou supprimer des nœuds dans l’arbre correspond à ajouter ou supprimer les balises correspondant dans le document (encore une fois le fichier original, qu’il soit stocké localement ou sur un serveur n’est pas modifié). Les attributs des balises peuvent aussi être modifiés. Parmi ces attributs, la modification de l’attribut style permet de changer le rendu graphique de l’élément.

Ces changements sont immédiatement répercutés sur l’affichage.

### Différentes possibilités de sélection des éléments

* Sélection d'un élément par l'arborescence du DOM .

    ``` Javascript
    document.title = "Le JavaScript";
    ```

* Sélection d'un élément par l'attribut `id`. Par définition un id n'est associé qu'à un seul élément.

    ``` Javascript
    document.getElementById('bloc_page').style.width = '250px';
    ```

* Sélection de tous les éléments par l'attribut class. Le résultat est un tableau1 des différents éléments.

    ```JavaScript
    let imagesflottantes = document.getElementsByClassName("imagesflottantes");
    ```

* Sélection de tous les éléments par le nom de balise. Le résultat est un tableau1 des différents éléments.
  
    ``` Javascript
    let paragraphes = document.getElementsByTagName('p');
    ```

* Sélection d'un élément (le 1er si il y en a plusieurs) en reprenant la syntaxe des sélecteurs CSS.
  
    ```Javascript
    document.querySelector("#bloc_page").style.backgroundColor = 'lightgrey';
    ```

* Sélection de plusieurs éléments en reprenant la syntaxe des sélecteurs CSS : le résultat est dans un tableau1.

    ``` Javascript
    document.querySelectorAll("p.important")[0].style.backgroundColor = 'gold';
    ```

### Détection des évènements du DOM : DOM events

Quelques exemples de détection d'évènements.

* `onclick` : Le clic de la souris sur un élément

    ```javascript
    <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
    ```

* `ondblclick`: le double-clic de la souris sur un élément
  
    ``` javascript
    <h1 onclick="this.innerHTML = 'Ooops! Ooops!'">Click on this text!</h1>
    ```

* `onmouseover` : le survol de la souris sur un élément.
  
    ``` javascript
    <div onmouseover="this.style.backgroundColor = 'lightblue'">
    ```

* `onmouseout` : la sortie de la souris d'un élément.

    ``` javascript
    <div onmouseout="this.style.backgroundColor = 'yellow'">
    ```

* `onmousedown` : le maintien du clic appuyé sur un élément.

    ``` javascript
    <div onmousedown="this.style.color = 'white'">
    ```

* `onmouseup` : le relachement du clic de souris.
  
    ``` javascript
    <div onmouseup="this.style.color = 'blue'">
    ```

### Lignes à tester

* changement de la couleur de fond de la page :

    ``` js
    document.body.style.background="red";
    ```

* réinitialisation de la couleur par défaut :

    ``` js
    document.body.style.background="";
    ```

* récupération d'un élément $d$. Cette instruction qui peut remplacer querySelector doit être faite une fois pour que d soit définie, avant de tester les instructions suivantes.

    ``` js
    let d=document.getElementById("valeur"); //pour id="valeur"
    ```

* changement de style de l'élément $d$ :

    ``` js
    d.style.color="blue";
    d.style.fontWeight="bold";
    d.style.border="1 pt dashed green"
    ```

* Changement de contenu de l'élément $d$ :

    ``` js
    d.innerHTML="Salut, tu vas bien";
    ```

!!! example "Exercice 7"
    Tester les différentes instructions précédentes dans des fonctions.
