/*********************************************************************************

 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.

 *********************************************************************************/

let score = 0
let nbMotsProposes = 0
let listePropositions = listeMots

/* créez une fonction afficherResultat, qui va prendre en paramètre le score et le nombre de mots proposés,
et afficher le score dans la zone dédiée */

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
  let nbMotsProposes = listePropositions.length
  let nbPhrasesProposes = listePhrases.length
/* créez une variable i qui servira de compteur */
  let i = 0

  let boutonValider = document.getElementById("btnValiderMot")
  let inputEcriture = document.getElementById("inputEcriture")
  afficherProposition(listePropositions[i])
  afficherResultat(score, nbMotsProposes)

  boutonValider.addEventListener("click", () => {
/* faire apparaître dans la console le mot tapé dans la case dédiée 'inputEcriture' */
    console.log(inputEcriture.value)
    if (inputEcriture.value === listePropositions[i]) {
      score++
    }
/* ajoutez 1 à i à chaque fois que l’utilisateur clique sur le bouton Envoyer */
    i++
/* à chaque fois que l’utilisateur clique sur Valider, videz le champ inputEcriture.  */
    inputEcriture.value = ""
    afficherProposition(listePropositions[i])

/* Si le mot numéro i du tableau vaut undefined, écrivez le message “Le jeu est fini” à la place du mot, et désactivez le bouton de validation.
Pour désactiver ce bouton, mettez la propriété disabled de ce bouton à true ; */
    if (listePropositions[i] === undefined) {
      afficherProposition("Le jeu est fini !")
      boutonValider.disabled = true
    } else {
      afficherProposition(listePropositions[i])
    }

    afficherResultat(score, nbMotsProposes)

  })
/* L’objectif de cet exercice est de gérer ces boutons radio pour les rendre fonctionnels. Ainsi, à l’issue de l’exercice, lorsque l’utilisateur cliquera sur “Phrases”, il devra recopier une phrase. Inversement, lorsqu’il cliquera sur “Mots”, il devra recopier un mot. */

/* Écoutez l’événement “change” sur les boutons radio. */

  let listeBtnRadio = document.querySelectorAll(".optionSource input")

  for (let index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("change", (event) => {
      console.log(event.target.value)
      if (event.target.value === "1") {
        listePropositions = listeMots
      } else if (event.target.value === "2") {
        listePropositions = listePhrases
      }
      afficherProposition(listePropositions[i])
    })
  }
}
