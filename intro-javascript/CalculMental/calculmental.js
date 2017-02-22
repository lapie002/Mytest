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

// le resultat du calcul par l'ordinateur
var resultat ;

// le resultat du calcul par l'ordinateur
var reponse ;


// Récupérer le champ texte contenant la valeur de l'afficheur
function afficheur() {
        return document.calculmental.afficheur ;
}

function getReponse(){
    return document.calculmental.mareponse;
}


/// Initialisation du calcul Mental
function initialisation() {

  operande_gauche = null ;
  operateur = null ;
  operande_droit = null ;
  afficheur().value = null;
  getReponse().value = null ;

}


function calculResultat(operande_gauche,operateur,operande_droit){

    switch(operateur){

           case '+':
                resultat = operande_gauche + operande_droit ;
                break ;

           case '-':
                resultat = operande_gauche - operande_droit ;
                break ;

           case '*':
                resultat = operande_gauche * operande_droit ;
                break ;

           case '/':
                resultat = operande_gauche / operande_droit ;
                break ;
           default:
                erreur("erreur pas d'operation a realiser!!!") ;
    }
}



function lancer(){

    var opartab = ['+','-','*','/'] ;

    operande_gauche = Math.floor((Math.random() * 10) + 1);
    operateur = opartab[Math.floor((Math.random() * 4) + 0)] ;
    operande_droit = Math.floor((Math.random() * 10) + 1);

    //function qui calcule le resultat
    calculResultat(operande_gauche,operateur,operande_droit) ;

    var equationToString = operande_gauche.toString() + operateur + operande_droit.toString() ;

    afficheur().value = equationToString ;

    getReponse().value = null ;

    console.log(document.body.lastChild.value);

    //detruire le message error et message succes ...
    //document.body.lastChild.removeChild() ;
    //document.body.removeChild('span') ;

    // var divRemoveError = document.getElementById('error') ;
    // var divRemoveSuccess = document.getElementById('success') ;
    // divRemoveError.remove() ;
    // divRemoveSuccess.remove() ;

    // var body = document.body ;
    // body.removeChild(body.childNodes[2]);

    // var page = document.getElementById("page");
    // var divMessage = page.nextSibling ;
    // divMessage.remove() ;

}


function verification(){

    if(reponse == resultat){
        return true ;
    }
    else{
        return false ;
    }

}


// Récupérer la valeur numerique entree par l'utilistauer et verifier si le reponse est bonne
function envoie() {

        reponse = getReponse().value ;
        var messageDeReponse =  verification() ;

        if(messageDeReponse){

            var successDiv = document.createElement("div") ;
            successDiv.innerHTML = '<span>Bonne réponse, bravo</span>' ;
            var corp = document.body.lastChild ;
            corp.parentNode.insertBefore(successDiv,corp) ;
            successDiv.setAttribute("id","success") ;

        }
        else{

            var errorDiv = document.createElement("div") ;
            errorDiv.innerHTML = '<span>Mauvaise reponse, desolé</span>' ;
            var corp = document.body.lastChild ;
            corp.parentNode.insertBefore(errorDiv,corp) ;
            errorDiv.setAttribute("id","error") ;

        }
}


function erreur(msg){

    window.alert(msg) ;
}
