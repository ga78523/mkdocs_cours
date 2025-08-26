# TP vitesse

## Programme 1
``` py linenums="1"
import matplotlib.pyplot as plt

dt = 
x = []
y = []

# Affichage
plt.plt(x,y, "r-o")
plt.grid()
plt.xlabel("Position x (m) ")
plt.ylabel("Position y (m) ")
plt.title("Trajectoire d'un point du guidon d'une trottinette")
plt.show()
```

## Programme 2

``` py linenums="1"
import matplotlib.pyplot as plt
import math

 # Création de la fonction permettant de tracer un vecteur vitesse

def vecteur_vitesse(x, y, dt, i) :
    """fonction qui trace le vecteur vitesse instantanée et qui écrit la valeur de la vitesse
    Cette fonction prend comme argument la liste des valeurs pour x, pour y, dt, et le point pour lequel
    on veut déterminer la vitesse.
    """
    vx =   
    vy = (y[i+1] - y[i]) / dt   
    plt.quiver(x[i], y[i], vx, vy, scale_units='xy', angles='xy', color='blue',width=0.010,scale=4)    
    plt.text(x[i]+0.20,y[i]+0.050, r"$\vec{v}$"+str(i), color="blue") #permet d'afficher le nom à côté du vecteur
    vitesse = math.sqrt(vx**2 + vy**2) # Calcul de la vitesse au point i
    print("A la position",i, " la vitesse est de",round(vitesse,1), "m/s")

#Pointage des positions d’un objet toutes les 0.4 s
dt =   # durée entre chaque points en seconde
x = []
y = []

#Affichage 
plt.plot(x, y, 'ro')
vecteur_vitesse(x, y, dt,0) #tracé du vecteur vitesse au point M0
vecteur_vitesse(x, y, dt,2) #tracé du vecteur vitesse au point M2
vecteur_vitesse(x, y, dt,4) #tracé du vecteur vitesse au point M4
plt.ylim(0, 6) #Donne les limites de l'axe des ordonnées
plt.xlim(-1,10)
plt.grid(True)
plt.xlabel()
plt.ylabel()
plt.title()
plt.show()
```

