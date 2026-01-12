# Frameworks

## Rappel

Toute page internet s’écrit ainsi :

``` html linenums="1"
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

## Frameworks CSS

Un framework CSS est un ensemble d'outils (fichiers CSS et JavaScript) permettant de simplifier la conception d'un document Web en proposant une grille de mise en page, une stylisation des éléments HTML et des composants supplémentaires (caroussel, menu, fenêtre modale, etc). Un framework est, en règle générale :

* **Cross-browser**
Le document est présenté de la même manière quelque que soit le navigateur utilisé

* **Responsive**
La mise en page du document Web s'adapte aux dimensions du support utilisé pour le consulter

* **Mobile First**
Le document Web est pensé en priorité pour être consulté sur des périphériques mobiles (smartphones, tablettes)

Parmi la multitude des frameworks existants (Bootstrap
, Semantic UI, Skeleton, Foundation, etc...), on a choisi d'aborder le suivant : Bootstrap 5. Ce
frameworks est développé par la société Twitter afin d'uniformiser les interfaces de ses applications
internes. Ce framework est désormais open-source depuis août 2011. Il est disponible à l’adresse
suivante : [http://getbootstrap.com/](http://getbootstrap.com/)

## Configuration du CDN

Dans la mesure où un front-end framework se résume à une collection de fichiers CSS et JavaScript, il suffit d'incorporer ces fichiers dans un document Web en tant que ressources embarquées pour l'utiliser.

Pour des considérations de performance (vitesse de téléchargement) et de robustesse (utilisation des fichiers les plus récents), il est préférable de s'appuyer sur un CDN (Content Delivery Network), un réseau de serveurs distribués sur internet qui mettent à disposition du contenu.

Dans la page [http://getbootstrap.com/](https://getbootstrap.com/docs/5.3/getting-started/introduction/), dans la section **CDN links**, il faut copier/coller la ligne sous CSS only dans l’en-tête de la page web (entre les balises `<head>` et `</head>`) et copier/coller les lignes sous JS, Popper.js, and jQuery à la fin du corps de la page web juste avant `</body>`.

Ci-dessous, en reprenant l'exemple donné ci-dessus, cela donne :

``` html linenums="1"
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
```

## Système de grille

L'avantage principal d'un framework CSS réside dans l'utilisation de son système de grille qui facilite la mise en place des éléments HTML dans une démarche de Responsive Web Design.

La grille est composée de lignes, chaque ligne pouvant contenir jusqu'à 12 colonnes. Lors de l'ajout d'un nouvel élément au sein d'une ligne, il convient de préciser le nombre de colonnes qu'il occupe. Par conséquent, inutile de préciser manuellement la hauteur et la largeur de l'élément qui sera automatiquement dimensionné par le système de grille.

Conformément à la démarche de Responsive Web Design, le système de grille est capable de s'adapter en fonction de la largeur du media. Ceci explique pourquoi il est nécessaire d'ajouter un préfixe à la classe CSS précisant le nombre de colonnes occupées par l'élément HTML. Le tableau ci-dessous recense l'ensemble des préfixes pour le frameworks.

| Taille écran | xs (<576px)  | sm (≥576px) | md (≥768px) | lg (≥992px) | xl (≥1200px) | xxl (≥1400px) |
|--------------|--------------|-------------|-------------|-------------|--------------|---------------|
| **Largeur max du container** | Aucun (auto) | 540px      | 720px       | 960px       | 1140px       | 1320px        |
| **Préfixe de classe**        | `.col-`      | `.col-sm-`  | `.col-md-`  | `.col-lg-`  | `.col-xl-`   | `.col-xxl-`   |
| **Nombre de colonnes**       | 12           | 12          | 12          | 12          | 12           | 12            |

Grâce à cette classification des largeurs d'écran, il est possible d'imaginer une mise en page pour chaque classe de support (smartphone, tablette, ordinateur).

L'exemple suivant illustre cette démarche en définissant une mise en page en quatre colonnes pour les grands écrans, en deux
colonnes pour les écrans moyens et enfin en une seule colonne pour les petits. On peut y placer des paragraphes, des images, etc...

``` html linenums="1"
<div class="container">
    <div class="row">
        <div class="col-lg-3 col-md-6 col-xs-12">
            <!-- contenu de la colonne -->`
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
            <!-- contenu de la colonne -->`
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
            <!-- contenu de la colonne -->`
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
            <!-- contenu de la colonne -->`
        </div>
    </div>
</div>
```

## Exemple

* Créer un dossier intitulé `exemple_Framworks` ;
* Créer un sous-dossier intitulé `img`;
* Enregistrer dans le sous-dossier `img`, les trois photos de motos suivantes :
      * moto1.png  ([lien pour la télécharger](img_bootstrap/moto1.png)) ;
      * moto2.png([lien pour la télécharger](img_bootstrap/moto2.jpg));
      * moto3.png ([lien pour la télécharger](img_bootstrap/moto3.jpg)).
* Ouvrir Visual Studio Code et créer un fichier que vous nommerez `bootstrap.html` et copier/coller le code ci-dessous.
* Enregistrer et quitter
* puis ouvrir `bootstrap.html` avec votre navigateur et faire varier la largeur de la fenêtre.

``` html linenums="1"
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Page d’exemple> 
    <meta name="keywords" content="HTML5, CSS3">
    <meta name="author" content="Eric Galand">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Exemple </title>
    <link rel="stylesheet" media="screen" href="style.css">
</head>
    <body>
        <div class="container">

            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros turpis, faucibus vel nunc et, faucibus pellentesque leo.
                    Aenean dignissim consectetur tellus, sit amet tincidunt sapien molestie nec. In lobortis a neque ut tempor.
            <p>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros turpis, faucibus vel nunc et, faucibus pellentesque leo.
                    Aenean dignissim consectetur tellus, sit amet tincidunt sapien molestie nec. In lobortis a neque ut tempor.
                    </p>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12">
                    <p>Nulla viverra tristique aliquet. Vivamus ornare elit ligula, quis aliquam libero malesuada id. Nam tempus in lectus vel sodales.

                    Phasellus eleifend fermentum libero, at varius est feugiat vitae.
                    </p>
                </div>
                
            <div class="row">
                <div class=" col-lg-4 col-md-4 col-xs-12">
                    <img src="img/moto1.png" class="img-fluid" alt="moto1">
                </div>
                <div class=" col-lg-4 col-md-4 col-xs-12">
                    <img src="img/moto2.png" class="img-fluid" alt="moto1">
                </div>
                <div class=" col-lg-4 col-md-4 col-xs-12">
                    <img src="img/moto3.png" class="img-fluid" alt="moto1">
            </div>
        </div>
<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
crossorigin="anonymous"></script>
</body>
</html>
```

## Et plus encore

Grâce grâce à la documentation officielle [http://getbootstrap.com/](http://getbootstrap.com/), onp peut inclure aussi des caroussels, des images dont la taille s'adapte à l'écran, etc ... 