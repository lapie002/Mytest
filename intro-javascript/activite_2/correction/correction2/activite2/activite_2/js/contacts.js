//Objet 1 contacte
var Contact = {
    init: function (prenom, nom) {
    this.nom = prenom;
    this.prenom = nom;
    },
    
    decrire: function() {
        var description = "Nom : " + this.nom + ", Prénom : " + this.prenom;
        return description;
    }
};

//message d'acceuil
console.log("Bienvenue dans ce géstionnaire de contacte !");

//création des deux object contacts pré-enregister
var contacte1 = Object.create(Contact);
    contacte1.init("Carole", "Lévisse");

var contacte2 = Object.create(Contact);
    contacte2.init("Mélodie", "Nelsonne");

//création du tableau contacte en lien avec les deux objets pré-enregistré ayant pour prototype l'objet 1
var tabContacts = [];
    tabContacts.push(contacte1);
    tabContacts.push(contacte2);



//donner une valeur à la variable choix pour pouvoir rentrer dans la boucle
var choix = "";
//Mise en place de la boucle while ---> interface utilisateur
while (choix !==0) {
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    choix = Number(prompt("Choisissez une option :"));
//choix 1 ---> aficher la liste des contacte du répertoire en apellelant le tableau tabcontact grâce à la méthode each
    if (choix === 1){
        console.log("Voici la liste de tout vos contacte :");
        tabContacts.forEach(function(nouveauContact) {
        console.log(nouveauContact.decrire());
        });

//choix 2 ---> rajouter un contacte dans le répertoir        
    } else if (choix === 2) {
        prenom = prompt("Rentrez ici le prénom de votre nouveau contacte");
        nom = prompt("Rentrez ici le nom de votre nouveau contacte");
        console.log("votre contacte à bien été saisie :)");
        var nouveauContact = Object.create(Contact);
        nouveauContact.init(nom, prenom);
        tabContacts.push(nouveauContact);
//Choix différents aux choix demandé ---> message d'erreur
    } else if ((choix === "") && (choix !== 0) && (choix !== 1) && (choix !== 2)) {
        console.log("vous n'avez pas rentré une entrée valide, recomencez !");
    }
console.log();//espace aprés affichage interface
}

//Choix zero ---> Fin du programme, merci !
if (choix === 0) {
    console.log("Au revoir !");
}