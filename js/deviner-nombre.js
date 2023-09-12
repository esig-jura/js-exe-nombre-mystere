/**
* Jeu du nombre mystère
* @author  Steve Fallet
* @version 0.1
* @since   2018-09-09 (date de création)
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")

'use strict';

/**
 * Retourne un nombre entier aléatoire compris entre min et max
 * @param min
 * @param max
 * @returns {number}
 */
function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(tireNombre(1, 100));

