/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}`
    // On place le texte à l'intérieur du span.
    spanScore.innerText = affichageScore
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let score = 0
    let nbMotsProposes = 0

    let boutonValider = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    boutonValider.addEventListener("click", () => {
      console.log(inputEcriture.value)
    })

    afficherResultat(score, nbMotsProposes)
}
