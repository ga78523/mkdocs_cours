# Recherche d'un élément dans un tableau

## Introduction

Considérons une liste d’étudiants participant à un examen. Les étudiants sont classés par ordre alphabétique. Un surveillant doit absolument parler à l’un des étudiants : il y a une fuite d’eau chez lui et la canalisation a lâché. Il faut qu’il rappelle les propriétaires.

Prenons un autre exemple :
On cherche dans un dictionnaire la page à laquelle se trouve un mot. Un dictionnaire peut être considéré comme un tableau trié. Comment faire pour trouver le mot le plus rapidement possible?

Ces deux situations se modélisent de la même façon en informatique. On a un tableau trié d’éléments et on doit trouver l’index d’un élément dans le tableau. On doit aussi éventuellement pouvoir vérifier qu’il ne figure pas dans le tableau. Ce problème de la recherche en table est un problème de base de l’informatique théorique. Il est intéressant par ce qu’il permet d’entrevoir la notion d’eﬃcacité d’un algorithme.

En résumé, le problème est le suivant : on considère un tableau $T$ trié de $n$ éléments. Comment montrer qu’un objet O se trouve dans le tableau, en précisant son index, ou ne s’y trouve pas.

## Algorithme naïf

### Principe

On peut procéder de façon assez naïve pour résoudre ce problème. Il suffit de parcourir le tableau de façon exhaustive, c’est-à-dire en commençant par le premier élément et puis parcourir les éléments un par un jusqu’à ce que l’on ait trouvé l’élément recherché.

### Algorithme

!!! example "Exercice 1"
    Écrire une fonction `recherche_naive` qui effectue la recherche d'un nombre entier `v` dans une liste `lst` triée de nombres entiers ne comprenant aucun doublon, et cela de manière exhaustive. Cette fonction retournera l'indice de position de l'entier `v` dans la liste et `None` au cas ou la valeur de `v` ne figure pas dans la liste.

## La recherche par dichotomique

### Principe

Cette méthode s’apparente à la méthode "diviser pour mieux régner". On compare le nombre recherché
au nombre qui se trouve au centre du tableau :

* Si le nombre recherché est égal au nombre qui se trouve au centre du tableau, c’est terminé.
* Si le nombre recherché est inférieur au nombre qui se trouve au centre du tableau, on recommence sur la première moitié du tableau.
* Si le nombre recherché est supérieur au nombre qui se trouve au centre du tableau, on recommence sur la deuxième moitié du tableau.

**Exemple :** Supposons que le nombre recherché soit égal à 3 :

* **Étape 1 :** soit la liste [1, 2, 3, 4, 5, 6, 7, 8, 9]. Le nombre au centre de la liste est 5. Puisque le nombre recherché est 3, puisque 3 est inférieur à 5, on recherche dans la 1ère moitié de la liste.

* **Étape 2 :** On prend la première moitié du tableau ([1,2, 3, 4, 5]).Le nombre au centre du liste est 3, il est égal au nombre recherché, c’est terminé.

!!! example "Exercice 2"
    1. Écrire la fonction `recherche_dicho` qui eﬀectue la recherche par dichotomie. 
    2. Montrer la terminaison de la recherche dichotomique à l’aide d’un variant de boucle.

## Comparaison des algorithmes

* **pour l'algorithme naïf :** 
Dans le meilleur des cas, la valeur recherchée est la première valeur du tableau : la boucle effectue une seule itération. Dans le pire des cas, la valeur recherchée est la dernière du tableau et dans ce cas le coût en temps est **proportionnel** au nombre de valeurs du tableau.

* **pour la recherche dichotomique :**
Dans le meilleur des cas, la valeur recherchée se trouve au centre du tableau : la boucle effectue 1 seule itération. Dans le pire des cas, la valeur recherchée n’est pas dans le tableau, ce qui nous ramène à diviser à chaque étape le tableau en deux jusqu’à ce que l’intervalle [g, d] soit vide, cela revient à chercher le plus petit entier $k$ tel que $2k > len(L)$. Dans ce cas le coût en temps est proportionnel au nombre d’itérations $k$.

!!! example "Exercice 3"
    1. Tester le temps mis par ces deux algorithmes pour rechercher une valeur sur un liste de 10,100,1000 éléments.
    2. Faites en la représentation graphique.
    3. Évaluer la complexité de ces deux algorithmes
