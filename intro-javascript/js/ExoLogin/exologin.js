/* enonce de l'exercice :

1 - en html : 2 champs input text, password, + label pour login et mot de passe.

2 - html un bouton connection.

3 - js : adEventListener() de type click sur le bouton

3 - bis recuperer les valeurs du login et du mot de passe.

4 - js : lancer l'algo qui verifie si admin ou webmaster et mot de passe est superieur a 5.

5 - js : ajouter une div juste apres le body pour afficher le succes ou l'erreur de connections.

6 - css : faire le css du formulaire.

}*/
var boutonConnection = document.getElementById("myBtn") ;

boutonConnection.addEventListener("click", function(){

  var login = document.getElementById("login").value ;
  var mdp = document.getElementById("mdp").value ;
  var longeurDuMotDepasse = mdp.length ;
  //$('div').remove() ;

  if ((login == "admin" || login == "webmaster") && longeurDuMotDepasse > 5 ) {

    /*
    // pour tester si ce qu'on recupere est bien ok !
    console.log(login);
    console.log(mdp);
    console.log(longeurDuMotDepasse);
    */

    // on cree la div
    var succesDiv = document.createElement("div") ;
    // on cree le contenu du texte
    var text = document.createTextNode("Succes !!!") ;
    // on ajoute le texte a la div
    succesDiv.appendChild(text) ;
    // on met la div avant la section qui possede l'id #formulaireConnection
    var section = document.getElementById("formulaireConnection") ;
    document.body.insertBefore(succesDiv, section) ;
    //document.body.appendChild(succesDiv) ;
    // on ajoute une class fail a notre div pour pouvoir excuter le css
    succesDiv.setAttribute("class", "success");
  }
  else{
    /*
    // pour tester si ce qu'on recupere est bien ok !
    console.log(login);
    console.log(mdp);
    console.log(longeurDuMotDepasse);
    */

    // on cree la div
    var errorDiv = document.createElement("div");
    // on cree le contenu du texte
    var text = document.createTextNode("failed !!!");
    // on ajoute le texte a la div
    errorDiv.appendChild(text);
    // on met la div avant la section qui possede l'id #formulaireConnection
    var section = document.getElementById("formulaireConnection") ;
    document.body.insertBefore(errorDiv, section);
    // on ajoute une class fail a notre div pour pouvoir excuter le css
    errorDiv.setAttribute("class", "fail");

  }
});


// premiere solution
/*
var succesDiv = document.createElement("div");
succesDiv.innerHTML = '<span>Success!!!</span>' ;
var corp = document.body.firstChild ;
corp.parentNode.insertBefore(succesDiv,corp)


// deuxieme solution
var resultat = document.createElement("div") ;
resultat.innerHTML = '<span>Success!!!</span>' ;
resultat.style.display = 'block' ;


// troisieme solution
...
*/
