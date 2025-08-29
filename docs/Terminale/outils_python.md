# Outils pour Python

## Débogger un programme

La phase de débogage d’un programme, qui consiste à rechercher les erreurs de programmation, est très gourmande en temps. Ceci est particulièrement vrai en Python dont le typage dynamique repousse la découverte des fautes au moment de l’exécution.

### Le traceback de Python

Lorsque l’interpréteur Python rencontre un problème, une exception est levée. Si elle n’est pas capturée, cette exception provoque l’arrêt du programme et l’affichage d’un message appelée "traceback". Ce message permet de connaître la nature et le contexte de l’incident.

Lire l’intégralité des messages d’erreur et se familiariser avec eux permet à la longue de gagner énormément de temps.

### Les erreurs de syntaxe

Les erreurs de syntaxe empêchent l’interpréteur de comprendre le code écrit et provoque la levée d’une exception **avant même** l’exécution du code.

Ces erreurs sont souvent facile à trouver :

* parenthèse, crochet ou guillemet mal fermé (**SyntaxError**) ;
* mauvaise indentation (**IndentationError**)

Exemple :

``` py linenums='1' title="debog1"
for i in range(1,10):
    print("Quel est le carré de {}".format(i)
    print("C'est :{]".format(i**2))
```

On obtient dans la console :

``` msdos

File "/home/galand/Documents/Cours/NSI/Terminale/debog1.py", line 3
print("C'est :{]".format(i**2))
    ^
SyntaxError: invalid syntax
```

L’erreur signalée ligne 3, est en fait ligne 2 : il manque une parenthèse fermante. Comme les instructions peuvent courir plusieurs lignes, elle n’est détectée que ligne 3.

### Erreur à l’exécution

Les exceptions levées à l’exécution sont plus difficiles à trouver, car elles nécessitent de comprendre (à différents degrés) l’exécution du code. Elles sont également plus variées :

* NameError : un nom de variable a-t-il été mal orthographié ?
* IndexError : l’indice utilisé est-il en dehors de la liste ?
* TypeError : a-t-on essayé d’ajouter un nombre à une chaîne de caractères ?

Outre le type d’exception et la ligne l’ayant levée, le traceback contient un historique des appels de fonctions (la pile des appels) permettant de connaître le contexte d’exécution. La recherche d’une erreur s’apparente alors à une enquête : depuis l’endroit où l’erreur s’est déclarée, on remonte le fil d’exécution pour en déterminer la cause, qui peut être à un tout autre endroit (le traceback se lit pour cette raison vers le haut) :

``` 

Traceback (most recent call last) :
File "error.py", line 10, in <module>
f2()
File "error.py", line 7, in f2
f1()
File "error.py", line 3, in f1
a =     a/(b+c)
```

Lors de l’exécution du `fichier error.py`, une erreur de type ZeroDivisionError a été levée, ligne 3 (a=a/(b+c)), dans la fonction `f1()`. La fonction en question a été exécutée suite à un appel sur la ligne 7, dans la fonction principale `f2`, qui elle même a été appelée par la ligne 10 du programme principal.

**Remarque :** Grace Hopper rapporte en 1947 un cas de bug devenu célèbre : il s’agissait d’un insecte (Bug en anglais) ayant provoqué des erreurs de calcul dans un ordinateur Mark II

### Traitement des exceptions

Soit le programme suivant :

``` py
def affichage_inverse(lst):
    for x in lst:
        print(x,end='')
        print(1.0/x)
        lst = [0.333, 2.5, 0, 10]

affichage_inverse(lst)
```

La console affiche les deux premiers résultats et nous indique l’erreur :

```
affichage_inverse
print(1.0/x)
ZeroDivisionError: float division by zero
```

La dernière ligne du message d’erreur indique ce qui s’est passé. Dans notre exemple, le type de l’exception est
**ZeroDivisionError**. On peut détecter les exceptions et réagir quand elle surviennent grâce aux instructions **try/except**. Exemple : 

``` py linenums='1'
def affichage_inverse(lst):
    for x in lst:
        print(f"x = {x}", end=' ; ')
        try:
            print(f"1/x = {1.0/x}" )
        except ZeroDivisionError:
            print("*** N admet pas d'inverse ***")

lst = [0.333, 2.5, 0, 10]
affichage_inverse(lst)
```

La console affiche correctement les inverses :

``` console
>>> # script executed
x= 0.333 ; 1/x = 3.003003003003003
x= 2.5 ; 1/x = 0.4
x= 0 ; *** N admet pas d'inverse ***
x= 10 ; 1/x = 0.1
```

**Remarques :**

Quand on attrape une exception, le programme ne "plante pas". A la place de l’exception, le bloc
except (au nom de l’exception) qui est appelé. Bien entendu, si une exception qui ne porte pas ce nom est levée, le programme plantera. Une instruction `try` peut avoir plusieurs clauses d’exception, de façon à définir des gestionnaires d’exceptions différents pour des exceptions différentes.

``` py linenums='1'
def affichage_inverse(lst):
    for x in lst:
        print(x, end='')
        try:
            print(1.0 / x)
        except ZeroDivisionError:
            print("*** N admet pas d'inverse ***")
        except TypeError:
            print("*** Calcul d inverse impossible pour des types autre que int et float ***")

lst = [0.333, 2.5, 0, 10, "6"]
affichage_inverse(lst)
```

La console affiche les résultats sans plantage :

```
0.3333.003003003003003
2.50.4
0*** n'admet pas d'inverse ***
100.1
6***Calcul d'inverse impossible pour des types autre que int et float ***
```

On peut également provoquer soi-même des exceptions grâce à l’instruction `raise`. Prenons par
exemple le cas où l’on souhaite traiter que des nombres positifs :

``` py linenums='1'
x = -1
if(x < 0):
    raise Exception("désolé, pas de nombre négatif !")
```

Dans ce cas, lever une exception n’est pas forcement la meilleure solution, on aurait pu utiliser un `assert`.

### Débogueur

Le débogueur permet de dérouler un programme pas à pas et de vérifier l’état de chaque variable.
C’est un outil parfois indispensable pour comprendre les bugs complexes.
La plupart des environnements de développement proposent un débogueur.

## Mise en forme

On oublie souvent qu’un programme sera relu et modifié par quelqu’un d’autre : son auteur ou par un autre développeur. Adopter un style d’écriture standard facilite cette relecture.

### Choisir correctement les noms

Syntaxiquement, les noms de variables, de fonctions , de classes, de méthodes, d’attributs, peuvent comporter des
lettres, des chiffres, des caractères "_" et ne doivent pas commencer par un chiffre.

Quelque soit le langage, on choisira un nom d’autant plus évocateur qu’il est utilisé dans une grande portion de code.

La PEP 8 (guide de style Python accessible sur [https://peps.python.org/pep-0008/](https://peps.python.org/pep-0008/) ajoute les conventions suivantes :

* nom de modules courts, en minuscules et de préférence sans "_". **Exemple :** `crypto`.
* nom de classes ou de types en CamelCase, c’est-à-dire en minuscules, sans "_" avec un majuscule en début de
chaque mot. **Exemple :** `Class NombrePremier`.
* nom de fonctions, de méthodes, d’attributs ou de variables en minuscules, les mots séparés par des "_". **Exemple :** `def decomposition_facteurs_premiers(...)`
* les variables utilisés comme constantes sont en majuscules, les mots séparés par des "_". **Exemple :** `TOTAL_MAX=10`

### Espaces, indentations, lignes blanches

#### Indentation

Les blocs Python sont délimités par l’indentation. La PEP 8 propose d’indenter les blocs à l’aide de 4 espaces (la plupart des éditeurs Python utilisent ce réglage).

Une ligne ne devrait pas excéder 79 caractères (cette règle est parfois transgressée). Lorsqu’une instruction court sur plusieurs lignes, on facilite la lecture en indentant. Exemple tiré de la PEP 8 :

``` py linenums='1'
#Aligner avec la parenthèse ouvrante
foo = nom_de _fonction_long(var_one, var_two,
                            var_three, var_four)
```

Enfin, on écrit une seule instruction par ligne.

#### Espaces

Les règles suivantes permettent de bien distribuer les espaces :

* pas d’espace avant le " :" ;
* espace après (mais pas avant) les "," dans les appels ou dans les définitions de fonctions ;
* espaces autour de "=" (pour l’affectation) et des opérateurs arithmétiques, sauf si il y en a beaucoup sur la ligne
(dans ce cas, ne pas mettre d’espaces autour des plus prioritaires) ;
* pas d’espaces après "([", ni avant le ")]" ;
* pas d’espaces autour de " :" dans les slices.

**Exemples**

``` py linenums='1'
a = 2 #espaces autour de =
for i in range(1, 43): # espace après , et pas d'espace avant :
a = a * 2 #espace autour de = et de *
lst = [1, 1, 2, 2, 3, 5, 8] # espaces après ,
print(lst[2:6]) # pas d'espace autour de :
dico = {"6": 8, "7": 13, "8": 21} # espace après : et , mais pas avant
```

#### Lignes blanches

On laisse deux lignes vides entre les différentes fonctions ou classes à l’intérieur d’un module ;
Au sein d’une classe, les méthodes sont séparées par une seule ligne blanche.

### Outil de validation

Des outils sont souvent intégrés dans les environnements de développement, mais sont aussi disponibles séparément :

* pep8 etflake8 permettent de vérifier la conformité avec la PEP 8 (ainsi que d’autres choses).
* autopep8 etblack peuvent reformater le code en suivant ces règles.

## Les boucles `for` en Python

### Sur les listes et les chaines de caractères

