# Exercices

## Exercice 1

À peine arrivé dans le village, voilà qu'une bagarre générale est sur le point d'éclater ! Tout en vous mettant à l'abri, vous tâchez de savoir ce qui se passe. On vous explique que le village est principalement composé de deux grandes familles rivales qui ne se supportent pas. Tout sujet étant une source de discorde possible, ils avaient décidé que les superficies de leurs champs respectifs ne devaient pas être trop différentes afin de ne pas attiser la jalousie de la famille opposée. Mais voilà que le patriarche des Arignon suspecte qu'un des champs des Evaran est trop grand ! Vous décidez de les aider ; mais la tâche ne sera pas facile, chacun gardant jalousement secrète la superficie réelle de ses champs.

**Ce que doit faire votre programme :**

Votre programme devra lire deux entiers, la superficie d'un champ des Arignon et la superficie d'un champ des Evaran. Si l'un des champs est plus grand d'au moins 10 m² (strictement) que l'autre champ, alors il faudra afficher le texte « La famille X a un champ trop grand », « X » devant bien sûr être remplacé par « Arignon » ou « Evaran » selon le cas.

**Exemple 1**

***entrée :***
```
42

54
```
***sortie :***

La famille Evaran a un champ trop grand

**Exemple 2**

***entrée :***
```
10

20
```

## Exercice 2

**Énoncé**

Le but de cet exercice est de lire 3 nombres en entrée, et d'afficher sur la sortie le minimum de ces 3 nombres.

**Entrée**
Trois nombres seront données en entrée, un par ligne, comme l'exemple suivant :

```py
72
10
25
```

**Sortie**
Le programme doit afficher sur sa sortie le nombre le plus petit, comme ceci :
```py
10
```

## Exercice 3

L'auberge dans laquelle vous avez prévu de passer la nuit ce soir propose des tarifs très intéressants, pour peu que l'on n'arrive pas trop tard. En effet, plus on arrive tôt moins on devra payer. Vous essayez de construire un programme vous donnant directement le prix à payer en fonction de votre heure d'arrivée.

Ce que doit faire votre programme :
Votre programme lira un entier, l'heure d'arrivée, qui sera compris entre 0 et 12 inclus. 0 correspond à midi, 1 à 1h de l'après-midi, etc. et 12 à minuit.

Le prix de la chambre est de 10 pièces à midi, et augmente de 5 pièces chaque heure après midi. Il est donc de 15 pièces à 13h, etc. Il ne peut cependant pas dépasser 53 pièces.

Votre programme devra afficher le prix à payer correspondant à l'heure d'arrivée donnée.

**Exemple**s

**Exemple 1**
entrée :

7
sortie :

45
**Exemple 2**
entrée :

10
sortie :

53
