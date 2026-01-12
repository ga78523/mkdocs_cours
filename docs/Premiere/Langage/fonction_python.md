# Les fonctions avec Python

## Introduction

La notion de fonction est essentielle en programmation.
Elle permet de construire des codes modulaires, plus faciles à lire et à modifier.
En Python, une fonction se crée avec le mot-clé `def`.

## Fonctions simples, fonctions paramétrées, procédures

### Fonctions simples

Pour définir une fonction simple, la syntaxe à respecter est la suivante :

``` py linenums='1'
def nom_fonction():
    instruction 1
    instruction 2
    instruction 3
    return resultat
```

Pour nommer votre fonction, vous pouvez choisir le nom que vous voulez, à la condition de ne pas utiliser un nom réservé par le langage, de ne pas utiliser de caractères spéciaux ou accentués (le souligné `_` est autorisé). Une bonne pratique est d'utiliser des noms explicites, de ne pas mettre de majuscule en début de nom d'une fonction (réservé aux classes).

Par exemple pour nommer une fonction qui retourne la valeur absolue d'un nombre :

*  `abs()` $\rightarrow$ NON, mot réservé à la fonction d'origine dans python	
* `val abs()` $\rightarrow$ NON, l'espace n'est pas autorisé
*  `val_abs()` $\rightarrow$ OUI

Les parenthèses qui suivent le nom de la fonction sont obligatoires. 

**Exemple de fonction simple**

La fonction suivante, appelée `lance_des()`, va retourner un nombre entier aléatoire compris entre 1 et 6 inclus :

``` py linenums='1'
from random import *

# Définition de la fonction
def lance_des():
    x = randint(1,6)
    return x

# Appel de la fonction et affichage du résultat
print(lance_des())
```

**Important :** la définition de la fonction doit impérativement précéder son appel, sinon la fonction ne sera pas reconnue.

**Remarque :** Vous constatez qu'une fonction peut elle-même en appeler une ou plusieurs autre(s). Ici la fonction `lance_des() ` appelle la fonction `randit()`.

### Fonctions paramétrée
#### Cadre général

Nous souhaitons maintenant écrire une fonction nommée `plus_petit` qui va nous renvoyer le plus petit de 2 nombres passés comme arguments de la fonction.  Dans la définition d'une telle fonction, il faut prévoir 2 variables particulières pour recevoir les arguments transmis. Ces variables s'appellent des paramètres.

On choisit le nom des paramètres en respectant les mêmes règles de syntaxe que d'habitude pour les variables et on place leurs noms entre les parenthèses qui accompagnent la définition de la fonction, séparées par une virgule.

``` py linenums='1'
def nom_fonction(parametre1:type_a, parametre2:type_2, ...)-> type_resultat:
    instruction 1
    instruction 2
    instruction 3
    return resultat
```

**Exemple de fonction paramétrée**

Voici le code qui correspond à l'écriture de la fonction `plus_Petit`:

``` py linenums='1'
# Définition  de la fonction plus_Petit
def plus_petit(a:int, b:int)-> int:
    if a < b:
        return a
    else:
        return b


# Programme principal
resultat = plus_petit(12, 28)
print("Le plus petit nombre est : ", resultat)
```

Généralement, on utilise des variables définies précédemment comme arguments :

``` py linenums='1'
# Définition  de la fonction
def plus_petit(a:int, b:int)->int:
    if a < b:
        return a
    else:
        return b


# programme principal
nb1 = int(input("Donnez un nombre ?"))
nb2 = int(input("Donnez un nombre ?"))
resultat = plus_petit(nb1, nb2)
print("Le plus petit nombre est : ", resultat)
```

Ici les paramètres `a` et `b` reçoivent respectivement les valeurs des arguments `nb1` et `nb2`.

**Remarque :** les arguments peuvent être de différents types : booléen, entier, flottant, chaîne de caractère, listes ... tout comme les valeurs retournées.

!!! example "Exercice 1"
    Réaliser une fonction `addition`qui prend en paramètre deux entiers `a` et `b` et qui réalise la somme de `a` et de `b`. Utiliser cette fonction dans un programme.

!!! example "Exercice 2"
    Réaliser une fonction `multiplication`qui prend en paramètre deux entiers `a` et `b` et qui réalise la produit de `a` et de `b`. Utiliser cette fonction dans un programme.

!!! example "Exercice 3"
    Écrire une fonction qui calcule la volume d’un cylindre à partir du rayon $r$ et de la hauteur $h$ donnés en argument et qui renvoie le résultat. Utiliser cette fonction dans un programme.

!!! example "Exercice 4"
    Écrire une fonction qui réalise la table de multiplication d’un nombre $n$ donné en argument et qui l’affiche.

!!! example "Exercice 5"
    Écrire une fonction qui prend en argument un flottant $x$ non nul et un entier naturel $n$ et qui renvoie $x^n$. Vous devrez utiliser une boucle.

!!! example "Exercice 6"
    On souhaite écrire une fonction célèbre en mathématiques, à savoir la fonction factorielle. On rappelle
    que la factorielle de l’entier $n$ est donnée par : $n! = \prod_{i=1}^{n}= 1\times2 \times 3 \times ... \times (n-1) \times n$.

#### Paramètre par défaut.

Il suffit de définir une valeur par défaut à un argument pour le rendre facultatif. Naturellement, cette valeur est écrasée si l'argument est précisé lors de l'appel de la fonction.

``` py linenums='1'
# Définition de la fonction
def affiche(x="aucun argument donné, voici le texte par défaut"):
    print(x)

# Programme principal
affiche()
affiche("coucou")
```

### Procédures

Si une fonction ne retourne rien, dans ce cas et en toute rigueur, on ne parle plus de fonction mais de procédure. La procédure se termine par `return None` (None (rien) représente l'absence de valeur).

**Remarque :**  `return None` n'est pas obligatoire mais vivement conseillé.

**Exemple de procédure:**

``` py linenums='1'
# Définition de la fonction
def bonjour(nom): 
    print("Bonjour ", nom)
    return None

# Programme principal
nom = input("Quel est ton nom ? ")
bonjour(nom)
```

!!! example "Exercice 7"
    A l'aide du module Turtle, écrire une procédure `rect` qui trace un rectangle. Cette procédure prend en argument la position $x$ et $y$ du coin supérieur gauche, les dimensions $h$ et $l$ du rectangle ainsi que la couleur choisie.

!!! example "Exercice 8"
    A l'aide du module Turtle et de la fonction précédente, écrire un fonction qui dessine une maison. Cette fonction prendra en paramètre la position (x et y) de la maison et sa couleur.

## La portée des variables : variable locale et variable globale

### Variable locale

**Exemple :**  considérons le script suivant :

``` py linenums='1'
# Définition de la fonction
def fonction():
    text = "Bonjour"
    return None


# Programme principal
fonction()
print(text)
```

Lors de l'interprétation du code, on constate que la variable `text` n'est pas reconnue dans le corps du script :

``` py linenums='1'
/usr/bin/python3.9 /home/galand/PycharmProjects/pythonProject3/main.py
Traceback (most recent call last):
  File "/home/galand/PycharmProjects/pythonProject3/main.py", line 9, in <module>
    print(text)
NameError: name 'text' is not defined

Process finished with exit code 1
```

Cette variable, définie dans le corps de la fonction, ne sera reconnue qu'à l'intérieur de cette fonction, il s'agit d'une variable locale.

**Définition :**  Une variable est dite locale lorsqu'elle est créée dans une fonction. Elle n'existera et ne sera visible que lors de l'exécution de ladite fonction

**Variable globale**
Considérons maintenant le programme suivant :

``` py linenums='1'
# Définition de la fonction
def fonction():
    print(text)
    return None


# Programme principal
text = "bonjour"
fonction()
```

Lors de l'interprétation du code, on constate que la variable `text` est bien visible dans le corps de la fonction. Cette variable, définie dans le corps du script, est une variable globale.

Une variable globale peut-elle être modifiée par une fonction ?

Considérons le script suivant. Va-t-il afficher 'Bonjour' ou 'Au revoir' ?

``` py linenums='1'
# Définition de la fonction
def fonction():
    text = "Bonjour"
    return None


# Programme principal
text = "Au revoir"
fonction()
print(text)
```

Nous avons vu qu'une variable globale est visible à l'intérieur d'une fonction, cependant on remarque ici que la valeur d'une variable globale ne peut pas être modifiée par une fonction.

**Définition :** Une variable globale lorsqu'elle est définie dans le programme principal. Elles sont accessibles pour toutes les fonctions du programme.

Tout ceci peut paraître bien compliqué au premier abord. Vous comprendrez cependant très vite qu'il est utile que les variables locales restent confinées à l'intérieur du corps des fonctions. Cela signifie que vous pouvez utiliser n'importe quelle fonction sans vous préoccuper le moins du monde du nom des variables utilisées. Ces variables ne pourront pas interférer avec celles que vous avez définies dans le corps de votre script. 

!!! example "Exercice 9"
    Repérer dans le programme suivant toutes les variables.
    Indiquer ensuite si ce sont des variables locales ou globales.

``` py linenums='1'
def somme_fonction (a, b):
    x = 5 
    z = a + b + x
    return z

print(somme_fonction(4,6))
```

### Le mot-clé : global

En python, le mot-clé `global` permet de  modifier la variable en dehors de sa portée actuelle. Il est utilisé pour créer une variable globale et apporter des modifications dans un contexte local (fonction). Les règles pour utiliser le mot-clé `global` sont les suivantes :

* lorsqu'une variable est créée dans une fonction : elle est locale par défaut.
* lorsqu'une variable est créée en dehors de toute fonction, elle est globale par défaut.
* le mot-clé `global` pour lire et écrire une variable globale à l'intérieur d'une fonction.
* l'utilisation du mot-clé `global` en dehors d'une fonction n'a aucun effet.

!!! example "Exercice 10"
    Taper et comparer les deux programmes suivants :

``` py linenums='1'
c = 1 # variable global

def ajoute():
    print(c)

ajouter()
```

``` py linenums='1'
c = 0 #variable globale
def ajoute():
    global c
    c = c + 2
    print("à l'intérieur de la fonction, c vaut ", c)

ajouter()
print("dans le programme global, c vaut",c)
```

## Les règles de bon usage

### Prototyper la fonction

Prototyper une fonction (ou une procédure) consiste à déclarer dans l'entête de définition de la fonction le type des paramètres et le type de la donnée retournée. C'est absolument indispensable dans des langages comme le C, mais pas obligatoire en python. C'est malgré tout vivement conseillé en python pour la clarification de la fonction au niveau du programmeur, surtout si ce n'est pas lui qui a écrit la fonction.

``` py linenums='1'
# Définition  de la fonction
def plus_petit(a: int, b: int) -> int: 
    if a < b:
        return a
    else:
        return b


# Programme principal
nb1 = int(input("Donnez un nombre ?"))
nb2 = int(input("Donnez un nombre ?"))
resultat = plus_petit(nb1, nb2)
print("Le plus petit nombre est : ", resultat)
```

Pour une procédure :

``` py linenums='1'
# Définition de la fonction
def bonjour(nom: str) -> None: 
    print("Bonjour ", nom)
    return None


# Programme principal
nom = input("Quel est ton nom ? ")
bonjour(nom)
```

### Documenter

L'entête de définition de la fonction peut être suivi d'un commentaire, appelé docstring, placé entre des guillemets, voir entre des triples guillemets si le commentaire comporte plusieurs lignes.  

``` py linenums='1'
# Définition  de la fonction
def plus_petit(a: int, b: int) -> int: 
    " fonction qui retourne le plus petit nombre"
    if a < b:
        return a
    else:
        return b


# Programme principal
nb1 = int(input("Donnez un nombre ?"))
nb2 = int(input("Donnez un nombre ?"))
resultat = plus_petit(nb1, nb2)
print("Le plus petit nombre est : ", resultat)
```

Si l'on place la souris sur le nom de la fonction et que l'on effectue un CTRL+I (appel de l'aide), on obtient :

**Remarque :** l'aide indique également les types des arguments a et b attendus par la fonction, si cela a été renseigné lors du prototypage.

Dans la console python on peut également obtenir l'aide en tapant `help` (nomFonction)

### Tester

Ce n'est pas parce que le code est correct syntaxiquement que le programme écrit fonctionnera. En effet, il faut prévoir des tests avec des situations où le programme ne fonctionnera pas. Ces tests reposent sur le mot-clé `assert`, qui va lever une erreur lorsqu'il est suivi d'une expression évaluée à `False`.

**Exemple :**

``` py linenums='1'
assert type(a) == int, 'La fonction attend un entier`
```

Ci-dessus, on vérifie que le type de `a` est un entier et après la virgule, on place la chaîne de caractère qui apparaitra dans la console si le test n'est pas vérifié (ici `La fonction attend un entier`)

Soit, on met tous les tests dans une fonction. En général, on teste si la fonction produit le résultat attendu dans différentes situations comme dans l'exemple ci-dessous :

``` py linenums='1'
def maxi(n1, n2):
    if n1 < n2 :
        return n2
    else :
        return n1

def test_maxi():
    assert maxi(3,4) == 4
    assert maxi(5,2) == 5
    assert maxi(7,7) == 7
    print("tests ok")
```

Il est aussi possible d'intégrer les tests à la fonction elle-même.

``` py linenums='1'

def calcul_imc(masse: float, taille: float) -> float:
""" Cette fonction calcule l'IMC d'une personne

Pré : l'argument masse est un entier ou flottant compris entre 3.0 et 150.0
l'argument taille est un entier ou un flottant compris entre 0.20 et 2.50

Post : la valeur retournée est un flottant
la valeur retournée entre 10.0 et 50.0
"""
assert type(masse) == int or type(masse) == float, "l'argument masse doit être de type int ou float"
assert type(taille) == int or type(taille) == float, "l'argument masse doit être de type int ou float"
assert masse > 3, "masse trop faible"
assert masse < 150, "masse trop importante"
assert taille > 0.30, " taille trop faible"
assert taille < 2.50, " taille trop importante"

imc = masse / taille**2

assert 10 < imc < 50, "valeur d'IMC non plausible"
return im

```

## Exercices

!!! example "Exercice 11"
    Écrire une fonction nommée `est_pair` qui prend en argument un nombre entier strictement positif et retourne `True` si ce nombre est pair, False sinon.

!!! example "Exercice 12"
    Écrire une fonction nommée `divisible` qui prend en argument deux nombres entiers et retourne `True` si le plus grand des 2 nombres est divisible par le plus petit, `False` sinon.

!!! example "Exercice 13"
    Écrire une fonction nommée `nb_caract` qui prend en premier argument une chaîne de caractères, en deuxième argument un caractère et retourne le nombre de fois que le caractère apparaît dans la chaîne. Le second argument est facultatif. S'il n'est pas indiqué, il sera considéré par la fonction comme un espace. Si le caractère n'est pas présent dans la chaîne, la fonction retourne 0.

!!! example "Exercice 14"
    Écrire une fonction  nommée `inverse`  qui prend en argument une chaîne de caractères et retourne la  
    chaîne de  caractères inversée.