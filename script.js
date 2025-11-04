/* Déclarez un tableau listePhrases qui contient 3 courtes phrases : “Pas de panique !”, “La vie, l’univers et le reste”, “Merci pour le poisson”.

Demandez à l’utilisateur s’il veut la liste de mots ou la liste de phrases. Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.

Lancez votre boucle for, avec la liste que l’utilisateur a choisie.  */
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique", "l'univers, la vie et le reste", "Merci pour le poisson"]

let score = 0

for (let i = 0; i < listeMots.length; i++) {
  let motUtilisateur = prompt(`Veuillez taper le mot suivant : ${listeMots[i]}`);

  if (motUtilisateur === listeMots[i]) {
      score++;
  }
};

console.log(`Votre score est de ${score}`);
