# Dictionnaires

## Introduction

Les types de données composites que nous avons abordés jusqu'à présent (chaînes, listes, tuples) étaient tous des séquences, c’est-à-dire une suite ordonnée d'éléments auxquels on peut accéder en connaissant leur emplacement (identifié par leur indice).

Les dictionnaires, objet de ce chapitre, constituent eux aussi un type de données composites, mais ne sont pas des séquences dans le sens où les éléments qui les constituent ne sont pas disposés dans un ordre immuable. Les éléments sont repérés non pas par des indices ordonnés, mais par une clé (de type quelconque : `str`, `int`, etc.) à laquelle on va attribuer une valeur.

Exemple d’un dictionnaire de langues :

<figure markdown>
| clé   | valeur |
|-------|--------|
| "yes" | "oui"  |
| "no"  | "non"  |
| "or"  | "ou"   |
| "and" | "et"   |
</figure>

Pour créer ce dictionnaire, on écrit entre accolades les couples séparés par des virgules, chaque couple étant composé d’une clé et de la valeur correspondante séparés par deux points :

```python linenums="1"
dico = {"yes": "oui", "no": "non", "or": "ou", "and": "et"}
print(dico)
```

Comme pour les chaines de caractères, les tuples ou les listes, la fonction len() retourne la longueur du dictionnaire, c’est-à-dire le nombre de paires clé-valeur :

```python linenums="1"
print(len(dico))
```

## Accès aux éléments d'un dictionnaire

Deux méthodes nommées `keys()` et `values()` donnent accès aux clés et aux valeurs.
La méthode `items()` donne accès à l'ensemble des couples clé-valeur :

```python linenums="1"
dico ={"yes" : "oui", "no" : "non", "or" : "ou", "and" : "et"}
print(dico.keys())
print(dico.values())
print(dico.items())
```

Pour accéder à une valeur particulière du dictionnaire on travaille comme avec une liste, mais on précise la clé à la place de l'indice :

```python linenums="1"
print(dico["yes"])
Attention, si l'on demande une clé qui n'existe pas, alors une erreur arrête le programme :
print(dico["if"])
Message d’erreur : KeyError: 'if'
```

Pour remédier à ce problème, on utilise la méthode get qui renvoie la valeur si elle existe, sinon renvoie None :


```python linenums="1"
print(dico.get("if"))
```

## Ajout ou suppression d'un élément à un dictionnaire

Pour ajouter des éléments à un dictionnaire, il suffit simplement de créer une nouvelle paire clé-valeur.

```python linenums="1"
inventaire = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
#ajout des poires à l'inventaire :
inventaire["poires"] = 25
print (inventaire)
```


Pour supprimer un élément à un dictionnaire, on utilise l'instruction `del`.

```python linenums="1"
del (inventaire["oranges"]
```


## Parcours d'un dictionnaire

L'ordre dans lequel les éléments seront extraits est imprévisible puisqu'un dictionnaire n'est pas une séquence. Nous allons voir trois manières de parcourir les éléments d'un dictionnaire.

### Par clés

Avec une boucle `for`, il est possible d'itérer sur les clés. 

```python linenums="1"
inventaire = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
for i in inventaire.keys() :
    print ("la clé", i, "a pour valeur ", inventaire[i])
print("---")
#ou 
for i in inventaire :
    print ("la clé", i, "a pour valeur ", inventaire[i])
```

### Par valeurs

Avec une boucle `for`, il est possible aussi de balayer un dictionnaire par les valeurs.

```python linenums="1"
inventaire = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
for i in inventaire.values() :
    print (i)
```

### Par couples clé-valeur

Il est aussi possible d'itérer sur les couples clé-valeur grâce à la méthode `items` :

```python linenums="1"
inventaire = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
for i in inventaire.items() :
    print ("l'item a pour valeur ", i)
```

La méthode `items` appliquée au dictionnaire inventaire renvoie en fait une séquence de tuples (clé, valeur).

Pour extraire la clé et la valeur du tuple :
```python linenums="1"

inventaire = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
for i in inventaire.items() :
print ("l'item a pour valeur ", i)


# pour extraire la clé et la valeur du tuple
k,v = i
print ("la clé ", k, " a pour valeur ",v)
``` 

On peut également directement les clés et valeurs de la manière suivante :

```python linenums="1"
inventaire = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
for k,v in inventaire.items() :
    print ("la clé", k, "a pour valeur ", v)
```

## Test d'appartenance

Tout comme avec les chaines, les tuples et les listes, l'instruction `in` est utilisable avec les dictionnaires

```python linenums="1"
inventaire = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
if "oranges" in inventaire :
    print ("il reste", inventaire["oranges"], "oranges en stock")
else :
    print ("il ne reste plus d'oranges")
```

## Comparaison de dictionnaires

Comme nous l'avons déjà dit, les dictionnaires ne sont pas des séquences. La place des éléments dans le dictionnaire est imprévisible, ce qui rend problématique la comparaison de deux dictionnaires.

L'opérateur `&` permet de comparer les clés de 2 (ou plusieurs) dictionnaires :

```python linenums="1"
inventaire1 = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
inventaire2 = {"pommes" : 53, "oranges" : 30, "abricots" : 80, "bananes" : 30}
print (inventaire1.keys() & inventaire2.keys())
```

Le programme affiche les clés identiques aux 2 dictionnaires.

Il permet aussi de comparer non seulement les clés mais aussi les couples clé-valeur :

```python linenums="1"
inventaire1 = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
inventaire2 = {"pommes" : 53, "oranges" : 30, "abricots" : 80, "bananes" : 30}
print (inventaire1.items() & inventaire2.items())
```

Le programme affiche que les couples (clé-valeur) identiques aux 2 dictionnaires
Pour connaitre les clés qui figurent dans `inventaire2` mais pas dans `inventaire1`, on procède ainsi :

```python linenums="1"
inventaire1 = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
inventaire2 = {"pommes" : 53, "oranges" : 30, "abricots" : 80, "bananes" : 30}
print (inventaire2.keys() - inventaire1.keys())
```

##  Copie d'un dictionnaire 

Avec les dictionnaires on rencontre le même problème qu'avec les listes :

```python linenums="1"
inventaire1 = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
inventaire2 = inventaire1
inventaire2["pommes"] = 100
print (inventaire1)
print (inventaire2)
```

On pourrait penser que le nombre de pommes est toujours de 30 dans l'`inventaire1` et de 100 dans l'`inventaire2`.

Il n'en est rien puisque l'affichage montre que l'`inventaire1` a également été modifié. En fait `inventaire1` et `inventaire2` pointent vers le même emplacement mémoire (on peut considérer que l'on a deux noms pour le même dictionnaire).

Pour remédier à ce problème on utilise la fonction `dict()` qui renvoie un dictionnaire :

```python linenums="1"
inventaire1 = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
inventaire2 = dict(inventaire1)
inventaire2["pommes"] = 100
print (inventaire1)print (inventaire2)
```

Il est possible d'utiliser également la méthode `copy()`:

```python linenums="1"
inventaire1 = {"pommes" : 50, "oranges" : 30, "abricots" : 80}
inventaire2 = inventaire1.copy()
inventaire2["pommes"] = 100
print (inventaire1)
print (inventaire2)
```

**Remarque :** la fonction `dict()` peut également être appliquée à une liste de tuples afin de créer un dictionnaire :

```python linenums="1"
list_tuples = [ ("pommes",30), ("oranges",18), ("abricots",80)]
inventaire = dict(list_tuples)
print(inventaire)
```

## Dictionnaire de dictionnnaire

De même que les éléments d'une liste peuvent être des listes, les valeurs d'un dictionnaire peuvent être des dictionnaires :

```python linenums="1"
pays = {"France" :{"capitale" : "Paris", "population" : 678000, "superficie" : 643800},
"Portugal" : {"capitale" : "Lisbonne", "population" : 1030000, "superficie" : 92300}}

print (pays.get("France"))
print (pays.get("France").get("capitale"))
print (pays.get("Portugal").get("population"))
```
