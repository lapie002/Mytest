//test pour savoi si jefichier js est bien installer
var disappear = document.getElementById("menlever");
console.log(disappear);
console.log("disappear");

//Consignes : Uniquement en JS : retirer du DOM la box où il est marqué à supprimer
//document.getElementById('menlever').style.display = 'none';
disappear.remove(0);


//Consignes : Uniquement en JS : ajouter dans le DOM une box contenant le texte 'new div !!' à l'intérieur de la box verte, juste aprés la balise
var nouveauDiv = document.createElement("div");
var text = document.createTextNode("new div !!");
var monP = document.getElementById('ajouterUnElementDedans');

nouveauDiv.appendChild(text);
monP.appendChild(nouveauDiv);


//Consignes : Uniquement en JS : Passer la box jaune en rouge en ajoutant à celle-ci la classe warning
var divRouge = document.getElementById("mettreEnRouge");
divRouge.style.background = 'red';
