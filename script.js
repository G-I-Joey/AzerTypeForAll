/* ON garde le scoring à 0 */
let score = 0

/* Demandez à l’utilisateur pour qu'il fasse le CHOIX entre la liste de mots ou la liste de phrases. Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.*/
let choix = prompt("Voulez-vous la liste de mots ou la liste de phrases ? (écrivez 'mots' ou 'phrases')");

/* On fait en sorte que l'utilisateur puisse choisir exclusivement "mots" ou "phrases" jusqu'à ce qu'il l'ai correctement orthographié (boucle While) */
while (choix !== "mots" && choix !== "phrases") {
  choix = prompt("Veuillez répondre par 'mots' ou 'phrases'. Voulez-vous la liste de mots ou la liste de phrases ?");
}

/* Lancez votre boucle for, en fonction de la liste que l’utilisateur a choisie.  */
if (choix === "mots") {
  for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
    if (motUtilisateur === listeMots[i]) {
        score++;
    }
  }
  console.log("Votre score est de " + score + " sur " + listeMots.length);
} else {
    for (let i = 0; i < listePhrases.length; i++) {
      let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
      if (phraseUtilisateur === listePhrases[i]) {
        score++
      }
    }
  console.log("Votre score est de " + score + " sur " + listeMots.length);
};
