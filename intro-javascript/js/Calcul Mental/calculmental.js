// juste pour tester si la page html et le script en js reagissent bien ensemble
/*
function initialisation() {
    alert("Page is loaded");
}
*/


// Opérande gauche utilisé dans les calculs
var operande_gauche ;
// Opération à effectuer
var operateur ;
// Opérande droit utilisé dans les calculs
var operande_droit ;


// Récupérer le champ texte contenant la valeur de l'afficheur
function afficheur() {
        return document.calculmental.afficheur ;
}

/// Initialisation du calcul Mental
function initialisation() {
  operande_gauche = null ;
  operateur = null ;
  operande_droit = null ;
  afficheur().value = null;
}
