/*********************************************************************************

 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.

 *********************************************************************************/


let score = 0
let nbMotsProposes = 0
/* créez une fonction afficherResultat, qui va prendre en paramètre le score et le nombre de mots proposés, et afficher le score dans la zone dédiée */

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


/* Cette fonction lance le jeu. */
function lancerJeu() {
  // Initialisations
  let score = 0
  /* On souhaite que le jeu affiche au préalable le nombre de mots qui seront présentés à l'utilisateur en fonction du nombre
  de mots que contient l'array listeMots */
  let nbMotsProposes = listeMots.length
/* créez une variable i qui servira de compteur */
  let i = 0

  let boutonValider = document.getElementById("btnValiderMot")
  let inputEcriture = document.getElementById("inputEcriture")
  afficherProposition(listeMots[i])
  afficherResultat(score, nbMotsProposes)

  boutonValider.addEventListener("click", () => {
/* ajoutez 1 à i à chaque fois que l’utilisateur clique sur le bouton Envoyer */
    i++
    afficherProposition(listeMots[i])

    /* Si le mot numéro i du tableau vaut undefined, écrivez le message “Le jeu est fini” à la place du mot, et désactivez le bouton de validation.
    Pour désactiver ce bouton, mettez la propriété disabled de ce bouton à true ; */
    if (listeMots[i] === undefined) {
      afficherProposition("Le jeu est fini !")
      boutonValider.disabled = true
    } else if (listeMots[i] && inputEcriture.value === listeMots[i - 1]) {
      score++
      afficherResultat(score, nbMotsProposes)
    }

/* à chaque fois que l’utilisateur clique sur Valider, videz le champ inputEcriture.  */
    inputEcriture.value = ""

/* faire apparaître dans la console le mot tapé dans la case dédiée 'inputEcriture' */
    console.log(inputEcriture.value)
  })
}
