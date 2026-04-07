import time

print("Le serveur tourne... Appuie sur CTRL+C pour m'arrêter plus tard.")
while True:
    # On fait un calcul inutile pour occuper le processeur
    x = 100 * 100
    time.sleep(0.1) # On fait une petite pause de 0.1 seconde
