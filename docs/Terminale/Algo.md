# Algorithmes à connaître

## Tris

### Tri à selection

``` py
def tri_selection(lst):
    for i in range(len(lst):)
        minimum = lst[i]
        ind_min = i
        for j in range(i, len(lst)):
            if minimum > lst[j]:
                minimum = lst[j]
                ind_min = j
        lst[i], lst[ind_min] = lst[ind_min], lst[i]
    return lst

```

### Tri à insertion

``` py
def tri_insertion(lst):
    for i in range(1, len(lst)):
        j = i
        while j > 0 and lst[j] < lst[j-1]:
            lst[j], lst[j-1] = lst[j-1], lst[j]
            j -= 1
    return lst
```

### Tri à bulle

``` py
def tri_bulle(lst):
    for i in range(len(lst)):
        for j in range(len(lst)-1-i):
            if lst[j+1] < lst[j]:
                lst[j], lst[j+1] = lst[j+1], lst[j]
    return lst
```

### Tri fusion

``` py
def fusion(tab1, tab2):
    """ fusion de deux listes triées """
    tab = []
    i , j = 0, 0
    while i <len(tab1) and j <len(tab2):
        if tab1[i] < tab2[j]:
            tab.append(tab1[i])
            i += 1
        else:
            tab.append(tab2[j])
            j += 1
    if i == len(tab1):
        tab = tab + tab2[j:len(tab2)]
    if j == len(tab2):
        tab = tab + tab2[i:len(tab1)]
    return tab

def tri_fusion(lst):
   if len(lst) <= 1:
        return lst
    milieu= len(lst) // 2
    gauche = lst[:milieu]
    droite = lst[milieu:]
    gauche = tri_fusion(gauche)
    droite = tri_fusion(droite)
    return fusion(gauche, droite)
```

## Recherche dichotomique

``` py
def recherche_dicho(lst, valeur):
    debut = 0
    fin = len(lst) - 1
    while debut <= fin:
        milieu = (debut + fin) // 2
        if lst[milieu] == valeur:
            return milieu 
        elif lstb[milieu] < valeur:
            debut = milieu + 1
        else:
            fin = milieu - 1
    return -1  
```

## Suite de Fibonacci

### Version itérative clasique

``` py
def fibonacci(n):
    if n <= 2:
        return 1
    fibo1 = 1   
    fibo2 = 1 
    for i in range(3,n+1):  
        fibo = fibo1 + fibo2
        fibo1 = fibo2   
        fibo2 = fibo
    return fibo
```

### Version récursive

``` py
def fibo(n):
    if n <= 2:
        return 1
    else:
        return fibo(n-1) + fibo(n-2)
```

## Triangle de Pascal


## Le crible d'Erasthothène

Le crible d’Ératosthène est un algorithme ancien (env. 250 av. J.-C.) qui permet de trouver tous les nombres premiers jusqu’à un certain nombre n.

**Principe :**

1. On crée une liste de nombres de 2 à n.
2. On commence avec 2, le premier nombre premier.
3. On barre tous les multiples de 2 (4, 6, 8, ...).
4. On passe au nombre suivant non barré (3) et on barre tous ses multiples.
5. On répète jusqu’à $\sqrt{n}$.
6. Les nombres non barrés sont les nombres premiers.

**Implémentation en Python** 

``` py
def crible_eratosthene(n):
    premiers = [True] * (n + 1)
    premiers[0], premiers[1] = False, False  

    for i in range(2, int(n**0.5) + 1):
        if premiers[i]:
            for multiple in range(i*i, n + 1, i):
                premiers[multiple] = False

    resultat = []
    for i in range(len(premiers)):
        if premiers[i]:
            resultat.append(i)
    return resultat
```