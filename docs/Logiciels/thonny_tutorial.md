# Tutoriel Thonny

## Qu'est-ce que Thonny ?

Thonny est un environnement de développement intégré (IDE) spécialement conçu pour apprendre Python. Il a été développé à l'Université de Tartu en Estonie et se distingue par sa simplicité et ses outils pédagogiques exceptionnels.

## Installation de Thonny

### Windows

1. Rendez-vous sur [thonny.org](https://thonny.org/)
2. Cliquez sur "Download for Windows"
3. Exécutez le fichier téléchargé et suivez l'assistant d'installation
4. Thonny s'installe avec sa propre version de Python (pas besoin d'installer Python séparément)

### Mac

1. Téléchargez la version Mac depuis le site officiel
2. Glissez l'application dans le dossier Applications
3. Autorisez l'exécution dans les préférences de sécurité si nécessaire

### Linux

```bash
sudo apt install thonny
```

## Interface de Thonny

L'interface de Thonny est composée de plusieurs zones principales :

### 1. Éditeur de code (zone principale)

- C'est ici que vous écrivez vos programmes Python
- Coloration syntaxique automatique
- Numérotation des lignes
- Auto-complétion

### 2. Shell Python (en bas)

- Console interactive Python
- Permet de tester du code rapidement
- Affiche les résultats de vos programmes

### 3. Variables (panneau latéral)

- Affiche toutes les variables de votre programme
- Montre leur valeur en temps réel
- Très utile pour comprendre l'exécution du code

### 4. Barre d'outils

- **Nouveau** : Créer un nouveau fichier
- **Ouvrir** : Ouvrir un fichier existant
- **Sauvegarder** : Sauvegarder le fichier actuel
- **Exécuter** : Lancer le programme (F5)
- **Débogage** : Outils de débogage pas à pas

## Créer votre premier programme

### Étape 1 : Nouveau fichier

1. Ouvrez Thonny
2. Cliquez sur "Fichier" > "Nouveau" (ou Ctrl+N)
3. Une nouvelle fenêtre d'édition s'ouvre

### Étape 2 : Écrire du code

```python
# Mon premier programme Python
print("Bonjour le monde !")

nom = input("Quel est votre nom ? ")
print(f"Salut {nom} !")

age = int(input("Quel âge avez-vous ? "))
print(f"Dans 10 ans, vous aurez {age + 10} ans.")
```

### Étape 3 : Sauvegarder

1. Cliquez sur "Fichier" > "Sauvegarder sous..."
2. Choisissez un nom (ex: `mon_programme.py`)
3. Sélectionnez l'emplacement

### Étape 4 : Exécuter

1. Cliquez sur le bouton "Exécuter" (ou F5)
2. Si c'est la première fois, Thonny vous demandera de sauvegarder
3. Le programme s'exécute dans le Shell en bas

## Fonctionnalités avancées de Thonny

### 1. Débogage pas à pas

Le débogage est l'une des forces de Thonny :

**Utilisation :**

1. Placez des points d'arrêt en cliquant à gauche des numéros de ligne
2. Cliquez sur "Débogage" > "Déboguer le fichier actuel" (Ctrl+F5)
3. Utilisez les boutons :

      - **Pas à pas** : Exécute une ligne à la fois
      - **Entrer dans** : Entre dans les fonctions
      - **Sortir de** : Sort de la fonction actuelle
      - **Continuer** : Continue jusqu'au prochain point d'arrêt

**Exemple de débogage :**

```python
def calculer_moyenne(notes):
    total = sum(notes)  # Point d'arrêt ici
    moyenne = total / len(notes)
    return moyenne

mes_notes = [15, 12, 18, 14]
resultat = calculer_moyenne(mes_notes)
print(f"Moyenne : {resultat}")
```

### 2. Visualiseur de variables

- Observe les variables en temps réel
- Voir l'évolution des listes, dictionnaires
- Comprendre les références d'objets

### 3. Mode simple vs mode régulier

- **Mode simple** : Interface épurée pour débutants
- **Mode régulier** : Tous les outils avancés
- Changement dans "Outils" > "Options"

### 4. Gestionnaire de packages

Pour installer des bibliothèques externes :

1. "Outils" > "Gérer les packages..."
2. Rechercher le package (ex: "requests", "matplotlib")
3. Cliquer sur "Installer"

## Conseils et bonnes pratiques

### Organisation des fichiers

```
MonProjetPython/
├── main.py          # Programme principal
├── functions.py     # Fonctions utilitaires
├── data/           # Données
│   └── fichier.csv
└── tests/          # Tests
    └── test_main.py
```

### Configuration recommandée

1. **"Outils" > "Options" > "Éditeur"** :

      - Cocher "Montrer les numéros de ligne"
      - Taille de police : 12 ou plus
      - Thème sombre si préféré

2. **"Outils" > "Options" > "Shell"** :

      - Cocher "Ouvrir automatiquement la pile lors d'une exception"

### Raccourcis clavier utiles

- **F5** : Exécuter le programme
- **Ctrl+F5** : Déboguer le programme
- **Ctrl+N** : Nouveau fichier
- **Ctrl+O** : Ouvrir fichier
- **Ctrl+S** : Sauvegarder
- **Ctrl+Z** : Annuler
- **Ctrl+Y** : Refaire
- **Ctrl+F** : Rechercher
- **F1** : Aide
    
