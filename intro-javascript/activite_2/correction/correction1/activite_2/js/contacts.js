var bonjour = "Bienvenue dans le gestionnaire de contact";
console.log(bonjour);
var lister = "1: Lister les contacts";
var ajout = "2: Ajouter les contacts";
var quitter = "0: Quitter";

console.log(lister);
console.log(ajout);
console.log(quitter);

var option = Number(prompt("Choisissez une option"));
var Contact = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    liste: function () {
        var lister = "Nom: " + this.nom + ", " + "Prénom: " + this.prenom;
        return lister;
    }
};
var contact1 = Object.create(Contact);
contact1.init("Levisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Melodie");

var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

while (option !== 0) {

  if(option === 1){
    console.log("Voici la liste de tous vos contacts: ");
    contacts.forEach(function (contact) {
      console.log(contact.liste());
  });
  }
else if (option === 2) {

  var ajouterPrenom = prompt("Prénom du nouveau contact:");
  var ajouterNom = prompt("Nom du nouveau contact:");
  var newContact = "Contact" + contacts.length;
  newContact = Object.create(Contact);
  newContact.init(ajouterNom, ajouterPrenom);
  contacts.push(newContact);
  console.log("Votre nouveau contact a été ajouté");
}


var lister = "1: Lister les contacts";
var ajout = "2: Ajouter les contacts";
var quitter = "0: Quitter";

console.log(lister);
console.log(ajout);
console.log(quitter);

var option = Number(prompt("Choisissez une option"));
}

console.log("Aurevoir !");
