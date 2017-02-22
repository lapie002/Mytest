// juste pour tester si la page html et le script en js sont bien liees ensemble
/*
function initialisation() {
    alert("Page is loaded");
}
*/

// fonction set Cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// fonction get cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// erase cookie
function eraseCookie(c_name) {
    createCookie(cookie_name,"",-1);
}


// Initialisation des varibales :

//variable de 1 a 4 pour avoir une chance sur 4 de tuer l'adversaire
var coup ;

var combatSucces = "Vous avez gagné" ;
var combatFail = "Vous avez perdu" ;
var fatalError = "une erreur, c'est produite !!!" ;

//varibale de class
var success = "success";
var error = "error";


// test por le cookie de verifier
var vie = setCookie(vie, 20, 7) ;
//setCookie(vie, 18, 30);
// bonne maniere pour getter un cookie
var life = Number(getCookie(vie)) ;
//var life = getCookie(vie) ;
//console.log(life);
//erase cookie
//eraseCookie('vie') ;

// variable de redirection
var victoire = 'victoire.html' ;
var defaite = 'defaite.html' ;

// function de delay de redirection
// setTimeout(myUrlRedirect(victoire), 3000);
// setTimeout(myUrlRedirect(defaite), 3000);
function myUrlRedirectVictoire(){
  window.location.href = victoire ;
}

function myUrlRedirectDefaite(){
  window.location.href = defaite ;
}

// Récupérer le champ texte contenant la valeur de l'afficheur
function afficheur() {
        return document.combatPersonnage.affichervie ;
}

/// Initialisation du la barre de vie
function initialisation() {

  coup = null ;

  afficheur().value = "Vous avez " + life + " points de vie.";
  resetButton() ;

}

function decrementerLife(){

  pointDeVie = life-- ;
  setCookie(vie, pointDeVie, 7) ;

}

function resetLife(){

  afficheur().value = "Vous avez " + life + " points de vie.";

}

// function pour message d erreur
function erreur(msg){

    window.alert(msg) ;

}


// fonction pour la div resultat
/*
var divResult = document.getElementById("resultat") ;
divResult.innerHTML = "BRAVO VOUS AVEZ GAGNER" :
*/
function getMessageCombat(msg){

      // on efface la div avec l'id resultat
      var elem = document.getElementById("resultat");
      elem.parentNode.removeChild(elem);

      // on cree la div dans le dernier td
      var td = document.getElementById('res') ;
      var myDiv = document.createElement("div");
      var text = document.createTextNode(msg);
      myDiv.appendChild(text);
      td.appendChild(myDiv);

      // on ajoute a la div cree ET l'id resultat pour pouvoir l'efface en suite
      var att = document.createAttribute("id");
      att.value = "resultat";
      myDiv.setAttributeNode(att);

}

// function pour attribuer une class error ou success sur le message de resultat
function setColorDiv(paraColor){

  var myDivRes = document.getElementById("resultat") ;

  var attClass = document.createAttribute("class") ;
  attClass.value = paraColor ;
  myDivRes.setAttributeNode(attClass);

}

// function pour rendre le bouton combat incliquable
function disableButton(){

  var myButton = document.getElementById("combat") ;
  myButton.disabled = true;

}

//function pour rendre le bouton combat cliquable
function resetButton(){

    var elmnt = document.getElementById("combat") ;
    elmnt.disabled = false;

}

// set la variable coup avec un Int de 1 a 4
function taperAdversaire(){

  coup = Math.floor((Math.random() * 4) + 1) ;

}

function porterUnAttaque(){

        switch (coup) {

          case 1:
              getMessageCombat(combatSucces) ;
              setColorDiv(success) ;
              disableButton() ;
              setTimeout(myUrlRedirectVictoire, 3000);
            break;

          case 2:
              decrementerLife() ;
              resetLife() ;
              getMessageCombat(combatFail) ;
              setColorDiv(error) ;
            break;

          case 3:
              decrementerLife() ;
              resetLife() ;
              getMessageCombat(combatFail) ;
              setColorDiv(error) ;
            break;

          case 4:
              decrementerLife() ;
              resetLife() ;
              getMessageCombat(combatFail) ;
              setColorDiv(error) ;
            break;

          default:
              erreur(fatalError) ;
        }

}

// function attaquer  combatSucces = "Vous avez gagné" ; var combatFail = "Vous avez perdu" ;
// autre ,maniere en js pour clicker le bouton et lancer la function
/* var bouttonAttqauer = getElementById("combat");
 addEventlistener('click',function(){
   ...
 }); */
function attaquer(){

  taperAdversaire() ;
  porterUnAttaque() ;

}
