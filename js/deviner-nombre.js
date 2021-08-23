/**
* Jeu du nombre mystère
* @author  Steve Fallet
* @version 0.1
* @since   2018-09-09 (date de création)
*/

//Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    "use strict";
    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }


    // Constantes d'application
    const NB_MIN = 1;
    const NB_MAX = 100;

    // Récupération des éléments HTML à manipuler
    const strongNbMax = document.getElementById('nbMax');
    const strongNbMin = document.getElementById('nbMin');
    const formulaire = document.querySelector('form');
    const txtNombre = document.getElementById('nombre');
    const ulHistorique = document.getElementById('historique');



    let nbMystere = tireNombre(NB_MIN, NB_MAX);
    console.log(nbMystere);
    let nbEssais = 0;
    let reponse = null;
    let message = 'Le nombre à deviner est compris entre 1 et 100.';

    // Tant que la réponse est différente du nombre mystère
    do {
        // Récupère la réponse et la converti en entier
        reponse = parseInt(prompt(message));

        // Comptabilise l'essai
        nbEssais += 1;

        // Définit le message a afficher au prochain tour
        if (reponse > nbMystere) {
            message = "C'est moins";
        } else {
            message = "C'est plus";
        }
    } while (reponse !== nbMystere);

    alert("Bravo, tu as gagné en " + nbEssais + " coups !");
}()); //main IIFE
