/*
Activité : gestion des contacts
*/

// TODO : complétez le programme

// Objet Personne
function Personne(prenom,nom){

  this.prenom = prenom;
  this.nom = nom;

  this.getPersonne = function(){

    var description = "Nom: " + this.prenom + ", prenomom: " + this.nom ;

    return description ;

  }

}

// on cree nos deux contact Carole et Mélodie
var perosnne1 = new Personne('Carole', 'Lévisse');
var perosnne2 = new Personne('Mélodie', 'Nelsonne');

// tableu des contacts
var listDeContact = new Array();

listDeContact.push(perosnne1);
listDeContact.push(perosnne2);


// phase de test  ok
/*
console.log("Presentation des contacts");
console.log(perosnne1.prenom);
console.log(perosnne1.nom);
console.log(perosnne2.prenom);
console.log(perosnne2.nom);
console.log("Boucle de contac:");
listDeContact.forEach(function (contact) {
    console.log(contact.getPersonne());
});
*/


// fonction pour lister tout les contacts
function listerContacts(){

  listDeContact.forEach(function (contact) {
      console.log(contact.getPersonne());
  });
}


// variable de demande de choix par l utilisateur
var demande = Number(prompt("Choisissez une option : 1 - lister; 2 - Ajouter; 0 - Quitter; "));

// quand on sort de la boucle sortie passe a vrai - on l initialise a faux au depart :
var sortir = false;

while(!sortir){

  if(demande===1){
    //lister tout les contacts
    console.log("La liste de mes contacts :");
    listerContacts();
    console.log("------------------------------");
    var demande = Number(prompt("Choisissez une option : 1 - lister; 2 - Ajouter; 0 - Quitter; "));

  }
  else if(demande===2){

    // on cree une nouvelle personne
    var prenom = prompt("le prenom de la nouvelle personne  ?");
    var nom = prompt("le nom de la nouvelle personne ?");

    var nouvelle_personne = new Personne(prenom,nom) ;
    listDeContact.push(nouvelle_personne) ;
    var demande = Number(prompt("Choisissez une option : 1 - lister; 2 - Ajouter; 0 - Quitter; "));

  }
  else{
    //on sort quand
    sortir = true;
  }

}
