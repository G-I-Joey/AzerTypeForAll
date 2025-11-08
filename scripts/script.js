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

/* créez une fonction afficherProposition, qui va prendre en paramètre le mot à afficher, et afficher ce mot dans la div zoneProposition */
function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition")
  zoneProposition.innerText = proposition
}


/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
*/
function lancerJeu() {
  // Initialisations
  let score = 0
  let nbMotsProposes = 0
  /* créez une variable i qui servira de compteur */
  let i = 0

  let boutonValider = document.getElementById("btnValiderMot")
  let inputEcriture = document.getElementById("inputEcriture")
  afficherProposition(listeMots[i])

  boutonValider.addEventListener("click", () => {
    /* ajoutez 1 à i à chaque fois que l’utilisateur clique sur le bouton Envoyer */
    i++
    afficherProposition(listeMots[i])

    /* Si le mot numéro i du tableau vaut undefined, écrivez le message “Le jeu est fini” à la place du mot, et désactivez le bouton de validation.
    Pour désactiver ce bouton, mettez la propriété disabled de ce bouton à true ; */
    if (listeMots[i] === undefined) {
      afficherProposition("Le jeu est fini !")
      boutonValider.disabled = true
    }
    /* à chaque fois que l’utilisateur clique sur Valider, videz le champ inputEcriture.  */
    inputEcriture.value = ""

    /* faire apparaître dans la console le mot tapé dans la case dédiée 'inputEcriture' */
    console.log(inputEcriture.value)
  })
  afficherResultat(score, nbMotsProposes)
}
