# Les bases en Python

## Présentation de Python

Python est un langage de programmation, dont la première version est sortie en 1991. Créé par [Guido van Rossum](https://fr.wikipedia.org/wiki/Guido_van_Rossum), il a voyagé du Macintosh de son créateur, qui travaillait à cette époque au Centrum voor Wiskunde en Informatica aux Pays-Bas, jusqu'à se voir associer une organisation à but non lucratif particulièrement dévouée, la Python Software Foundation, créée en 2001.

<figure markdown>
![image petit écran](data_bases/Guido-portrait.jpg){width=300px}
</figure>

Ce langage a été baptisé ainsi en hommage à la troupe de comiques les « Monty Python ».

Python est un langage puissant, à la fois facile à apprendre et riche en possibilités.

Dès l'instant où vous l'installez sur votre ordinateur, vous disposez de nombreuses fonctionnalités intégrées au langage.

Il est, en outre, très facile d'étendre les fonctionnalités existantes. Ainsi, il existe ce qu'on appelle des bibliothèques qui aident le développeur à travailler sur des projets particuliers.

Par exemple :

* [Turtle](https://docs.python.org/fr/3.14/library/turtle.html) pour dessiner à l'aide de la tortue ;
* [matplotlib.pyplot](https://matplotlib.org/stable/tutorials/pyplot.html) pour réaliser des graphiques ;
* [Pandas](https://pandas.pydata.org) pour faire de l'analyse de données
* [numpy](https://numpy.org) pour le calcul ;
* [pyxel](https://github.com/kitao/pyxel) pour réaliser des jeux rétro. Elle est utilisée par les concurrents à la [nuit du Code](https://www.nuitducode.net) ;
* [Pygame](https://www.pygame.org/news) pour réaliser des jeux ;
* [FoxDot](https://github.com/Qirky/FoxDot) pour faire du liveCoding

<figure markdown>
<iframe width="560" height="315" src="https://www.youtube.com/embed/DuPj603z_Qg?si=OHq-wGjJhZiLQ2tT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</figure>

* [Tkinter](https://docs.python.org/fr/3/library/tkinter.html) ou [Custom Tkinter](https://customtkinter.tomschimansky.com) pour réaliser des interfaces graphiques

* [TensorFlow](https://www.tensorflow.org/?hl=fr), [PyTorch](https://pytorch.org), [Keras](https://keras.io) pour l'IA
* .....

## Utilisation d'un éditeur Python

On peut installer l'éditeur **Thonny** grâce au [tutoriel d'installation](../../Logiciels/thonny_tutorial.md) ou utiliser Capytal en ligne sur l'ENT.

Pour tester votre éditeur , taper :

``` py
print("Hello world")
```

Et exécuter le code en cliquant sur la flèche verte.

**Remarque :**  Pour afficher une variable, on peut utiliser la fonction `print()`.

## Python et la bibliothèque Turtle

### Qu'est-ce qu'une bibliothèque ?

Une bibliothèque (ou librairie) est un ensemble de fonctions prédéfinies et regroupées autour d’un thème particulier (calculs mathématiques, tracés de graphiques, traitement de l’image, jeux ...). Une des grandes forces du langage Python réside dans le nombre important de bibliothèques disponibles. 

Aujourd’hui nous utiliserons la librairie « Turtle ». La tortue graphique permet de dessiner des formes complexes en utilisant un programme qui répète des instructions élémentaires.

### Exemples d'instructions

* `down()` qui abaisse le stylo ;
* `up()` qui relève le stylo ;
* `pensize(width)` qui change l’épaisseur du trait ;
* `pencolor(color)` qui change la couleur ("red", "green", "blue"... ou un triplet de paramètres (r, g, b)) ;
* `forward(distance)` avance de distance (en pixel) ;
*  `backward(distance)` qui recule de distance ;
* `right(angle)` qui tourne vers la droite d’un angle donné (en degrés) ;
* `left(angle)` qui tourne vers la gauche de angle. On peut également déplacer la tortue à un point donné ou modifier son orientation avec ;
* `goto(x,y)` qui déplace la tortue jusqu’au point (x, y) ;
* `setheading(angle)`qui oriente la tortue à l’angle donné en degrés, le 0° étant à l’est, le 90° au nord, etc. Au départ, la tortue est en (0, 0), orientée à 0°.

Pour plus d'exemples, consulter documentation à l'adresse suivant : [https://docs.python.org/fr/3/library/turtle.html](https://docs.python.org/fr/3/library/turtle.html)

### Premiers dessins

Afin d’utiliser des instructions de la bibliothèque Turtle », il faut l’importer au niveau du script (programme) avec l’instruction suivante :

``` py
from turtle import *
```

Pour faire avancer la tortue de 100 pixels, on peut utiliser l’instruction donnée dans les exemples :

``` py
forward(100)
```

Enfin, le script doit impérativement se terminer par l'instruction suivante :

``` py
done()
```

!!! exemple "Exercice 1"
    Écrire et exécuter les 3 lignes de code précédentes dans une cellule de code.

!!! exemple "Exercice 2"
    Dessiner un carré de 50 pixels de côté. Une nouvelle instruction vous sera nécessaire, à vous de la choisir dans les exemples.

!!! exemple "Exercice 3"
    Écrire un programme qui trace un triangle de 70 pixels de côté.

Supposons que maintenant on souhaite modifier le programme précédent afin de tracer un carré de 90 pixels de large, il faudra modifier la quasi-totalité des lignes de code. Afin de remédier à ce problème, on va être amené à définir une variable, que l’on nommera par exemple cote (les espaces et caractères accentués sont interdits pour nommer une variable, on ne peut donc pas la nommer côté). Généralement les variables sont déclarées en début de script après l’importation des bibliothèques :

``` py title="Exemple 1"
from turtle import *

cote = 70

forward(cote)
left(90)
forward(cote)
left(90)
forward(cote)
left(90)
forward(cote)
left(90)

done()
```

!!! exemple "Exercice 4"
    Adapter le code précédent à l'aide d'une autre variable `angle = 90`.

### Les commentaires

Les commentaires sont présents dans un code pour renseigner l’éventuel lecteur du code de ce que nous écrivons ou plus simplement pour se souvenir de la signification de notre propre code.

Ils se notent après le symbole  `#`.

Ceux-ci ne seront pas pris en compte lors de l’interprétation du code par l’éditeur.

``` py
forward(100) # avance la tortue de 100 pixels    
```

**Remarque :** toutes les lignes n'ont pas besoin d'être commentées.

!!! exemple "Exercice 5"
    Reproduire ci-dessous votre code pour réaliser un triangle et le commenter.

### Un type de boucle : la boucle for

Vous avez pu constater que le programme du carré exécute 4 fois de suite la même série d’instruction (les instructions `forward` et `left`.)

Vous pouvez imaginer ce que serait le programme ainsi conçu si l’on voulait dessiner 100 carrés ! Python (comme tous les langages de programmation) est capable d’exécuter des séries d’instructions en boucle.

Pour répéter une instruction, on peut utiliser donc la boucle `for`. La syntaxe est la suivante pour répéter  $N$  fois une instruction :

```py
for i in range(N):
    instruction à répéter
```

**Remarque :** les instructions à répéter doivent être décalées par rapport à la marge de gauche. On dit qu'elles doivent être indentées. Cette indentation se réalise grâce à la touche tabulation, en général à la gauche de la touche A et représentée par une double flèche.

``` py title="Exemple 2"
for i in range(5):
    print("toto")
```

Cet exemple affiche 5 fois le texte toto.

!!! exemple "Exercice 6"
    Reproduire le code précédent. Le commenter. Modifier le code précédent pour qu'il affiche le texte "coucou" 10 fois.

!!! exemple "Exercice 7"
    A l'aide de la boucle for, écrire le programme qui réalise le carré en utilisant 6 lignes et 2 variables.

## La déclaration et l'affectation du contenu de variables

### Quel intérêt d'utiliser une variable ?

Une variable est un espace mémoire dans lequel il est possible de mettre une valeur. Par exemple, si en français je dis $x$ est égal à 1, j’utilise la variable dont le nom est $x$ pour lui fixer la valeur 1. Pour faire la même chose en Python, je note simplement : `x = 1`.

### Types des variables

Les variables peuvent contenir des types de données différents. Les différents types sont :

<figure markdown>
|Type Python| Traduction | Exemple|
|:-:|:-:|:-:|
|`int`|entier|`#!python 42`|
|`float`|flottant (décimal)|`#!python 3.1416`|
|`str`|chaîne de caractères (string)|`#!python "NSI"`|
|`bool`|booléen (True ou False)|```#!python True```|
|`list`|liste|`#!python [0, 1, 2, 3, 4, 5]`|
</figure>

Python est un langage à typage dynamique, cela signifie qu'en fonction du contenu affecté à la variable, il détermine automatiquement le type de la variable.

Il existe beaucoup de langages (C++, Java....) où l’utilisateur doit absolument définir le type d’une variable avant de pouvoir l’utiliser, faute de quoi cela entraînera une erreur.

**Remarque :** L'explorateur de Thonny de variables permet d'afficher le nom de la variable et sa valeur. Il suffit d'aller dans affichage puis variables.

La fonction `type()` vous permet de connaître le type d’une variable.

Le type d'une variable peut être modifié de manière dynamique en cours de programme. Le vérifier en testant le programme suivant :

``` py linenums='1'
a = 8
print(a)
a = a + 2 # ou a += 2
print(a)
```

**Remarque1 :** L'explorateur de variable affiche uniquement les dernières valeurs et types pris par les variables en fin de programme.

## Les opérations

### Arithmétiques

Un ordinateur est bien évidemment capable d’effectuer des opérations arithmétiques et mathématiques.

Dans le tableau ci-après, sont présentés les symboles utilisés pour les opérations de base.

<figure markdown>
|     Opération                  |     Symbole    |     Exemples à tester    |
|--------------------------------|----------------|--------------------------|
|     Addition                   |     +          |     3+5 donne 8          |
|     Soustraction               |     -          |     7-2 donne 5          |
|     Multiplication             |     *          |     7*8 donne 56         |
|     Division                   |     /          |     7/2 donne 3.5        |
|     Reste de la division       |     %          |     7%3 donne 1          |
|     Quotient de la division    |     //         |     7//2 donne 3         |
|     Puissance                  |     **         |     10**3 donne 1000     |
</figure>

!!! exemple "Exercice 8"
    Écrire un programme qui multiplie le contenu de 2 variables. Par exemple : `c = 5` et `d = 9`. Le résultat de cette opération devra être "rangé" dans une troisième variable (`resultat`).
    Votre programme devra afficher le contenu de la variable `resultat`.

!!! exemple "Exercice 9"
    Écrire le code pour l'instruction suivante : on initialise une variable cellule à 1 et on la multiplie par 2.

### Quelques fonctions mathématiques

Pour utiliser certaines fonctions mathématiques plus avancées ($x^a$, $exp(x)$, $sin(x)$, $log(x)$ ... ) il est nécessaire d’importer des bibliothèques.

Si l’on utilise la bibliothèque `math`, la première ligne de code devra commencer par : `import math`. Cette bibliothèque inclus entre autres les fonctions suivantes :

<figure markdown>
|     Fonction       |     Symbole       |     Exemples à tester        |
|------------------------------------------------------------------------|-------------------|------------------------------|
|     constante p                                                       |     pi            |     pi donne 3.141592653589793                      |
                         |
|     racine carrée                                                      |     sqrt(x)       |     sqrt(100)   retourne 10                         |
|     arrondi au plus proche entier                                      |     round(x)      |                                                     |
|     arrondi au plus proche réel avec y décimales   après la virgule    |     round(x,y)    |     round(100.235789,2)   retourne 100.24           |
|     arrondi au plus petit entier&gt;=x                                 |     ceil(x)       |     ceil(100.235789,2) retourne 101                 |
|     arrondi au plus grand entier&lt;=x                                 |     floor(x)      |     floor(100.235789,2)   retourne 100              |
</figure>

**Exemple complet :**

``` py linenums='1'
import math
a = math.sqrt(4)
print(a) # affiche 2
```

## Les entrées/sorties

### Les sorties

Pour afficher plusieurs informations, on peut utiliser  fonction `print' et les f-strings de la manière suivante :

``` py title="f-string"
name = "Alice"
age = 25
print(f"My name is {name} and I'm {age} years old")

```

### Les entrées

On peut alors lire depuis le clavier la valeur d’une chaîne de caractères par la méthode `input()`.

**Exemple :**
```py linenums='1'
a = input() #les parenthèses sont obligatoires .
a = input(" Nom : ") # le texte dans les parenthèses permet d’indiquer ce que l'on attend
```

**La commande `input()` renvoie toujours à une chaîne de caractères.** Pour affecter un nombre, il faut le convertir grâce aux fonctions `int()` pour convertir une chaine de caractère en entier et `float()` pour convertir une chaîne de caractère en flottant.

**Exemple :**

```py linenums='1'
a = int(input(" Donner une valeur entière : " ))
x = float(input("Donner une valeur réelle : " )
print(f" L’entier a vaut  {a} et le réel x vaut {x}")
```

## Exercices

!!! exemple "Exercice 10"
    Demander à l'utilisateur 3 notes. Puis en faire la moyenne et l'afficher.

!!! exemple "Exercice 11"
    Demander une concentration en g/L (donc un float) et un volume de solution en mL. Puis calculer la masse de soluté (g) à prélever et l'afficher.

!!! exemple "Exercice 12"
    Demander la masse et le volume d'un échantillon. Calculer la masse volumique de cet échantillon et l'afficher.

!!! exemple "Exercice 13"

    1. Retrouvez sur internet la formule du volume d’un cylindre.
    2. Faire un programme demandant à l’utilisateur les 2 variables rentrant dans la formule puis afficher le résultat.
    Donnée : on prendra le nombre $\pi$ comme étant égal à 3,14
    3. Vérifiez votre programme à l’aide de la calculatrice.

!!! exemple "Exercice 14"
    La vitesse (km/h) d'un véhicule est donnée par la relation v= d/T avec d : la distance (km) parcourue pendant le temps $\delta t$ (h). Faire un programme qui demande à l'utilisateur de rentrer un temps en heure (int) et une vitesse en km/h (int). Le programme se charge de calculer la distance $d$ en km puis de l'afficher.

!!! exemple "Exercice 15"
    Écrire un programme qui calcule combien de bonbons recevra chaque élève de la classe ainsi que le nombre de bonbons restants, après avoir demandé le nombre total de bonbons et le nombre d'élèves de la classe. 
    Le résultat sera affiché sous la forme : chaque élève recevra 5 bonbons et il en restera 3