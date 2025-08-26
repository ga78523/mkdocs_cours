# Outils pour l'analyse algorithmique

## Trace d'un programme

La trace d'un programme est un tableau qui permet de rendre compte du fonctionnement du programme.
Pour savoir comment la trace d'un programme s'effectue, il faut se rendre au chapitre sur le contrôle du flux d'exécution.

!!! example  "Exercice 1"
    Effectuer la trace des deux programmes suivants :

``` py linenums="1" title="Programme 1"
a = int(input("a  = "))
if a < 10 :
    a = a + a//2
    print(f"a vaut : {a}")
else: 
    a = a + a % 2
    print(f"a vaut  : {a}")

print("Fin du programme")
```

``` py linenums="1" title="Programme 2"
lst = [ 3, 7, 1, 5]
for i in range(len(lst)):
    print((f"tour de boucle {i+1}"))

print("Fin du programme")
```


## Variant de boucle

### Définition

!!! success "Définition"
    On appelle variant d’une boucle une expression dont la valeur varie à chacune des itérations de la boucle. Un variant de boucle bien choisi permet par exemple de prouver qu’une boucle while se terminera bien.

### Exemple

Calcul de la plus petite puissance de deux supérieure ou égale à un entier $n$.

``` py linenums="1"
def puissance(n: int)-> int:
    p = 1
    while p < n:
       p = 2 * p # ou p *= 2
    return p
```

Dans l’algorithme ci-dessus, `p` est un variant de la boucle `while` car sa valeur (non nulle) est multipliée par 2 à chacune des itérations. Dans l’algorithme précédent, le variant de boucle non nul `p` est multiplié par 2 à chaque itération, il finit donc par devenir supérieur ou égal à `n` et la boucle `while` se terminera bien.

## Invariant de boucle

### Définition

!!! success "Définition"
    On appelle invariant d’une boucle une propriété qui, si elle est vraie avant l’exécution d’une itération, le demeure pendant et après l’exécution de l’itération.

### Exemple

La fonction suivante calcule 2 à la puissance `n` :

``` py linenums="1"
def puissance(n: int)-> int:
    r = 1
    for i in range(1, n+1):
        r = r * 2
    return r

print(puissance (3))
```

**1)** Tracer l'algorithme

|     N° ligne    |     n    |     r    |     i    |     Commentaires    |
|:---------------:|:--------:|:--------:|:--------:|:-------------------:|
|                 |          |          |          |                     |
|                 |          |          |          |                     |
|                 |          |          |          |                     |
|                 |          |          |          |                     |
|                 |          |          |          |                     |
|                 |          |          |          |                     |
|                 |          |          |          |                     |
|                 |          |          |          |                     |
|                 |          |          |          |                     |
|                 |          |          |          |                     |

**2)** Vérifier que à chaque exécution du corps de boucle (ligne 4) la propriété $r = 2^i$ est vraie. $r = 2^i$ est-il un invariant de boucle ?

### Exercice

On considère la fonction suivante qui permet de calculer le quotient et le reste de la division euclidienne d’un entier positif par un entier strictement positif :

``` py linenums="1"
def division_euclidienne(a:int,b:int)-> int:
        q = 0
        r = a
        while r >= b:
            q = q + 1 #on peut aussi écrire q += 1 
            r = r - b #on peut aussi écrire r -= b
        return q,r
```

**1)** Écrire la trace de l’algorithme pour l’entrée (a = 17, b = 5) ;

**2)** Montrer que la boucle `while` se termine en utilisant un variant de boucle ;

**3)** Montrer que la propriété $a = q \times b + r$ est un invariant de la boucle `while` ;

**4)** En déduire que l’algorithme produit le résultat attendu.

## Une premère approche de la complexité

### Définition

La notion de complexité d’un algorithme va rendre compte de l’efficacité de cet algorithme. Pour un même problème, par exemple trier un tableau, il existe plusieurs algorithmes. Certains algorithmes sont plus efficaces que d’autres (par exemple un algorithme A mettra moins de temps qu’un algorithme B pour résoudre exactement le même problème, sur la même machine).

Il existe 2 types de complexité : une complexité en temps et une complexité en mémoire. Nous nous intéresserons ici uniquement à la complexité en temps. La complexité en temps est directement liée au nombre d’opérations élémentaires qui doivent être exécutées afin de résoudre un problème donné.

L’évaluation de ce nombre d’opérations élémentaires n’est pas chose facile, on rencontre souvent des cas litigieux.

### Calcul de la complexité

#### Règles générales

Pour calculer la complexité, nous allons devoir examiner chaque ligne de code et y attribuer un coût en temps.

Le coût ainsi obtenu n’aura pas d’unité, il s’agit d’un nombre d’opérations dont chacune aurait le même temps d’exécution, à savoir 1.

Les opérations qui vont devoir être comptabilisées sont :

* Les affectations qui comptent pour 1 unité, par exemple : a = 2 ;
* Les comparaisons qui comptent pour 1 unité, par exemple : 2 < 3 ;
* Les accès aux mémoires qui comptent pour une 1 unité ;
* Les opérations élémentaires qui comptent pour 1 unité, par exemple : 2 + 3.

**Exemple :**

Déterminons le coût de la ligne suivante que l’on notera T(n) : a = a + 1

T(n) = 1 (accès à la mémoire) + 1 (addition) + 1 (affectation) = 3

#### Algorithme avec une boucle for

``` py linenums="1"
def somme_entiers(n:int)-> int:
    somme = 0
    for i in range(n+1):
        somme += i
    return somme
```

**1)** Déterminer la complexité T(n) de cet algorithme.

La complexité de cet algorithme est dite linéaire. Ce sera le cas de tous les algorithmes avec 
$T(n) = a \times n + b$ où $a$ et $b$ sont des réels.

#### Algorithmes avec deux boucles for imbriquées

```py linenums="1"
def tables_multiplication(): 
    for i in range(n):
        for j in range(n):
            print(i*j)
    return None
```

**2)** Déterminer la complexité T(n) de cet algorithme.

La complexité des algorithmes contenant deux boucles `for` est dite quadratique. Ce sera le cas de tous les algorithmes avec $T(n) = a \times n^2 + b \times n + c$ où $a$, $b$ et $c$ sont des réels.
