/**
* Jeu du nombre mystère
* @author  Steve Fallet
* @version 2.0
* @since   2018-09-09 (date de création)
*/

'use strict';

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Constantes
const MIN = 1;
const MAX = 100;

// Variables
let nbMystere = tireNombre(MIN, MAX);
let nbEssais = 0;
let reponse = null;
let message = `Le nombre à deviner est compris entre ${MIN} et ${MAX}.`;

// Affiche le nombre mystère dans la console pour pouvoir tricher ;)
console.log(nbMystere);

// Tant que la réponse est différente du nombre mystère
do {
    // Récupère la réponse et converti en entier
    reponse = parseInt(prompt(message));

    // Comptabilise l'essai
    nbEssais += 1;

    // Définit le message à afficher au prochain tour
    if (reponse > nbMystere) {
        message = 'C\'est moins !';
    } else {
        message = 'C\'est plus !';
    }
} while (reponse !== nbMystere);

alert(`Bravo, tu as gagné en ${nbEssais} coups !`);
