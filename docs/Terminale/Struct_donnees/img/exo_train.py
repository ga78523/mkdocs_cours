class Train:
    def __init__(self):
        "Constructeur"
        self.premier = None
        self.nb_wagons = ...

    def est_vide(self):
        """renvoie True si ce train est vide (ne comporte aucun wagon),
        False sinon
        """
        return ...

    def donne_nb_wagons(self):
        "Renvoie le nombre de wagons de ce train"
        return ...

    def transporte_du(self, contenu):
        """Détermine si ce train transporte du {contenu} (une chaine de caractères).
        Renvoie True si c'est le cas, False sinon
        """
        wagon = self.premier
        while wagon is not None:
            if wagon.contenu == ...:
                return ...
            ... = wagon....
        return ...

    def ajoute_wagon(self, nouveau):
        """Ajoute un wagon à la fin de ce train.
        L'argument est le wagon à ajouter
        """
        if self.est_vide():
            self.premier = ...
        else:
            wagon = self.premier
            while ....suivant is not None:
                wagon = ....suivant
            wagon.suivant = ...
        self.nb_wagons = ...

    def supprime_wagon_de(self, contenu):
        """Supprime le premier wagon de {contenu}
        Renvoie False si ce train ne contient pas de {contenu},
        True si la suppression est effectuée
        """
        # On parcourt le train afin de trouver le contenu
        precedent = None
        wagon = self.premier
        while wagon is not ... and wagon.contenu != ...:
            precedent = wagon
            wagon = wagon....

        if wagon is ...:  # on a parcouru tout le train sans trouver le contenu
            return ...
        if precedent is ...:  # le wagon supprimé est le premier du train
            self.premier = wagon....
        else:  # le wagon supprimé n'est pas le premier
            precedent.... = wagon....
        self.nb_wagons -= ...
        return ...

    def __repr__(self):
        "Affichage dans la console"
        contenus_wagons = ['']
        wagon = self.premier
        while wagon is not None:
            contenus_wagons.append(str(wagon))
            wagon = wagon.suivant
        return "Locomotive" + " - ".join(contenus_wagons)

    def __str__(self):
        "Conversion en string"
        return self.__repr__()


# Tests
train = Train()
w1 = Wagon("blé")
train.ajoute_wagon(w1)
w2 = Wagon("riz")
train.ajoute_wagon(w2)
train.ajoute_wagon(Wagon("sable"))
assert str(train) == 'Locomotive - Wagon de blé - Wagon de riz - Wagon de sable'
assert not train.est_vide()
assert train.donne_nb_wagons() == 3
assert train.transporte_du('blé')
assert not train.transporte_du('matériel')
assert train.supprime_wagon_de('riz')
assert str(train) == 'Locomotive - Wagon de blé - Wagon de sable'
assert not train.supprime_wagon_de('riz')

