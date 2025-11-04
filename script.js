/* Cette variable va contenir le mot ou la phrase entré par l'utilisateur */
let motUtilisateur;
let phraseUtilisateur;

/* On garde le scoring à 0 en tant que variable globale */
let score = 0

/* Demandez à l’utilisateur pour qu'il fasse le CHOIX entre la liste de mots ou la liste de phrases.
Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.*/
let choix = prompt("Voulez-vous jouer avec la liste de mots ou la liste de phrases ? (écrivez 'mots' ou 'phrases')")

/* choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il veut jouer avec
des phrases ou des mots.  */
function choisirPhraseOuMots(choix) {

  /* On fait en sorte que l'utilisateur puisse choisir exclusivement "mots" ou "phrases" jusqu'à ce
  qu'il l'ai correctement orthographié (boucle While) */
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Voulez-vous jouer avec des 'mots' ou des 'phrases'. Voulez-vous la liste de mots ou la liste de phrases ?");
  }

  /* Lancez votre boucle for, en fonction de la liste que l’utilisateur a choisie.  */
  if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {
      let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
      if (motUtilisateur === listeMots[i]) {
        score++;
      }
    }
  } else {
    for (let i = 0; i < listePhrases.length; i++) {
      let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
      if (phraseUtilisateur === listePhrases[i]) {
        score++
      }
    }
  };
}
let choixUtilisateur = choisirPhraseOuMots(choix)
console.log(choixUtilisateur)


/* afficherResultat : cette fonction prend en paramètre le résultat et
le nombre total de mots proposés, et affiche le résultat du joueur ;  */
function afficherResultat(score, nombreMotsTotal) {
  console.log("Votre résultat est de " + score + " sur " + nombreMotsTotal)
}

let retourResultat = afficherResultat(score, listeMots.length)
console.log(retourResultat)
