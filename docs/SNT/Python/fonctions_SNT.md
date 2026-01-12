# Les fonctions en Python

## Définition

Une fonction est un bout de code qu’on place en mémoire pour pouvoir l’utiliser plus tard.

Le placement en mémoire de la fonction se nomme la déclaration.

L’utilisation de la fonction se nomme l’appel.

La fonction peut posséder des paramètres, des arguments qui sont des variables particulières : elles ne se remplissent qu’à l’appel de la fonction avec ce que l’utilisateur envoie à ce moment.

## Exemple de fonction en Python

Une fonction en Python se déclare par le mot clé ```def```.

**Déclaration**

```python
def hymne_anglais():
      print("God save our gracious Queen")
      print("Long live our noble Queen")
      print("God save our Queen")
```

**À remarquer :**

- les parenthèses à la fin du nom de la fonction (indispensables) : elles contiendront plus tard les paramètres de la fonction.
- le deux points : à la fin de la déclaration du nom de la fonction. Ils vont déclencher une indentation automatique du reste du corps de la fonction.

**Appel ou utilisation :**

``` python
>>> hymne_anglais()
God save our gracious Queen
Long live our noble Queen
God save our Queen
```

Cette fonction n'a **aucun paramètre d'entrée**. Elle affichera toujours la même chose lorsqu'on l'appellera.

## Exemple de fonction avec argument

Ces fonctions dépendent de l'argument fourni.

**Exemple de déclaration:**
``` Python linenums="1"
 def mystere(a, b, c): # Prototype de la fonction mystère qui a 3 paramètres locaux qui sont a, b et c
    reponse = a + b * 2 + c # On crée une variable locale reponse qui est fonction de a, b,et c
    return reponse # On renvoie cette variable réponse 
```

**Exemple d’appel de fonction :**

``` Python linenums="1"
rep1 = mystere(2, 10, 7)
print(rep1) # affiche 29 car 29 = 2 + 10 * 2 + 7

rep2 = mystere(3, 7, 3 )
print(rep2) # renvoie 20 car 20 = 3 + 7 * 2 + 3
```

## Exercices

!!! example "Exercice 1"
    Écrire, "sur turtle", une fonction `carre` qui prend en argument les coordonnées `x`et `y` du coin supérieur gauche et qui dessine un carré de 50px de côté.

!!! example "Exercice 2"
    Ecrire le code de la fonction `addition`. Cette fonction prendra en paramètres deux entiers `a` et `b` et renverra la somme de `a` et de `b`.

!!! example "Exercice 3"
    Compléter la fonction `affine` qui prend en argument un paramètre `x` et qui renvoie $y = 2 * x + 3$.

!!! example "Exercice 4"
    Écrire une fonction qui prend 3 notes en argument et affiche la moyenne. Si la moyenne est supérieure ou égale à 10, affiche "Admis", sinon "Recalé".

!!! example "Exercice 5"
    Écrire une fonction `multiplication` qui prend en argument deux entiers `a` et `b` et qui renvoie le produit de `a` et de `b`. Cette fonction n'utilisera pas le symbole *.
