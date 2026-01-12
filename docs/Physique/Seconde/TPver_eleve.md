# TP verrerie

``` py linenums="1"
# importation de la bibliothèque matplotlib
import matplotlib.pyplot as plt
import numpy as np


# initialisation des listes (à remplir avec vos données
# séparées par des virgules)
masse_becher = [94.01, 93.58, 94.32, 101.01, 100.75, 100.29, 97.13, 94.39, 94.75, 96.11, 95.90, 95.41, 99.87, 99.35, 99.87, 96.9, 95.37, 96.36]

masse_eprouvette = [99.56, 97.54, 98.14, 98.92, 98.50, 99.01, 98.05, 98.10, 98.08, 98.54, 97.87, 98.37, 96.98, 98.14, 97.08, 97.51, 97.41, 97.30, 98.31, 98.16, 98.53]

masse_fiole = [98.89, 99.30, 100.72, 101.22, 98.71, 99.14, 98.96, 99.30, 99.55, 99.62, 92.11, 92.31, 92.58, 99.07, 99.05, 99.08, 98.93, 99.12, 99.30]

# création de 3 histogrammes
plt.hist(masse_becher, bins=50, label="becher") # paramètre bins = nombre de barres
plt.hist(masse_eprouvette, bins=50, label="éprouvette graduée")
plt.hist(masse_fiole, bins=50, label="fiole jaugée")

# amélioration du graphique (optionnel)
plt.xlabel("masse mesurée") # étiquette de l'axe des abscisses
plt.ylabel("fréquence") # étiquette de l'axe des ordonnées
plt.title("dispersion des mesures") # titre du graphique
plt.legend() #affiche la légende
plt.grid() #créé une grille

ecart_typeB = np.std(masse_becher, ddof = 1)
print("Bécher : écart-type = ", round(ecart_typeB, 3))

ecart_typeE = np.std(masse_eprouvette, ddof = 1)
print("Éprouvette : écart-type = ", round(ecart_typeE, 3))

ecart_typeF = np.std(masse_fiole, ddof = 1)
print("Fiole : écart-type = ", round(ecart_typeF, 3))

# affichage du graphique
plt.show()
```
