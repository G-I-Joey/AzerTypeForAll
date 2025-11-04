/* L'ensemble des fonctions sont décrites et développées dans ce fichiers */

/* étape 1 - On demande à l’utilisateur de faire un CHOIX entre la liste de mots ou celle de phrases.
Cette fonction ne prend pas de paramètres car c'est le user qui va rentrer lui meme  */
function choisirPhraseOuMots() {
  let choix = prompt("Voulez-vous jouer avec la liste de mots ou la liste de phrases ? (écrivez 'mots' ou 'phrases')")

  /* Tant que le user n'a pas choisi "mots" ou "phrases", on lui redemande (while == 'tant que ...') */
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Vous devez choisir entre 'mots' et 'phrases'")
  }
  return choix
}

function lancerBoucleDeJeu(listePropositions) {
  score = 0
  for (let i = 0; i < listePropositions.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
    if (motUtilisateur === listePropositions[i]) {
      score++;
    }
  }
  return score
}

function afficherResultat(score, nombreMotsTotal) {
  /* afficherResultat : cette fonction prend en paramètre le résultat et le nombre total de mots proposés, et affiche le résultat du joueur ; */
  console.log("Votre résultat est de " + score + " sur " + nombreMotsTotal)
}

function lancerJeu() {
  let choix = choisirPhraseOuMots()
  /* On annote le score à 0 */
  let score = 0
  let nombreMotsTotal = 0

  if (choix === 'mots') {
    score = lancerBoucleDeJeu(listeMots)
    nombreMotsTotal = listeMots.length
  } else {
    score = lancerBoucleDeJeu(listePhrases)
    nombreMotsTotal = listePhrases.length
  }

  afficherResultat(score, nombreMotsTotal)
}
