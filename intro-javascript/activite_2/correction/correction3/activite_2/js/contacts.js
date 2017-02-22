/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// définition du prototype Contact
var Contact = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    // méthode retournant la description du contact
    decrire: function () {
        var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    },
};

// création d'une fonction de formatage des chaîne de caractères en minuscules avec premère lettre en majuscule, non demandé dans l'énnoncé mais c'est tout de même plus convivial
function capitalizeFisrtLetter(chaine) {
    var stringFormated = "";
    for (var i = 0; i < chaine.length; i++) {
        if (!i) {
            stringFormated += chaine[i].toUpperCase();
        } else {
            stringFormated += chaine[i].toLowerCase();
        }
    }
    return stringFormated;
}
// variente de la fonction de formatage de chaîne de caractères avec slice() trouvé sur internet
//function formatChaine(chaine) {
//    var chaineFormated = chaine[0].toUpperCase() + chaine.slice(1).toLowerCase();
//    return chaineFormated;
//}

// création d'une fonction de recherche de caracères interdits, non précisé dans l'énnoncé mais parait incontournable
function noBadChar(chaine) {
    var noBadChar = true, forbiddenChar = "";
    for (var i = 0; i < chaine.length; i++) {
        switch (chaine[i].toLowerCase()) { // liste des caractères autorisés, peut-être non exhaustive
            case "a":
                break;
            case "b":
                break;
            case "c":
                break;
            case "d":
                break;
            case "e":
                break;
            case "f":
                break;
            case "g":
                break;
            case "h":
                break;
            case "i":
                break;
            case "j":
                break;
            case "k":
                break;
            case "l":
                break;
            case "m":
                break;
            case "n":
                break;
            case "o":
                break;
            case "p":
                break;
            case "q":
                break;
            case "r":
                break;
            case "s":
                break;
            case "t":
                break;
            case "u":
                break;
            case "v":
                break;
            case "w":
                break;
            case "x":
                break;
            case "y":
                break;
            case "z":
                break;
            case " ":
                break;
            case "-":
                break;
            case "é":
                break;
            case "è":
                break;
            case "ç":
                break;
            case "à":
                break;
            case "ù":
                break;
            default :
                 forbiddenChar += chaine[i] + " ";
                 noBadChar &= false;
        }
    }
    //if (!noBadChar) console.log("Utilisation de caractère interdit : " + forbiddenChar);
    return noBadChar;
}

// création de contact1
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
// création de contact2
var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

// création du tableau contacts
var contacts = [contact1, contact2];

// message de bienvenue
console.log("Bienvenue dans le gestionnaire de contacts !")

// initialisation des variables
var choixAction = -1, message = nom = prenom = "", containBadChar = true;

// boucle principale avec contrôle d'erreur de saisie
while (choixAction < 0 || choixAction >2 || (!choixAction && (choixAction !== 0))) {

    // affichage du menu des choix
    console.log("1 : Lister les contacts\n2 : Ajouter un contact\n0 : Quitter");
    
    choixAction = parseInt(Number(prompt(message + "Choisissez une option :")));
    // contrôle erreur de saisie, < 0, > 2, NaN
    if (choixAction < 0 || choixAction > 2 || (!choixAction && (choixAction !== 0))) {
        message = "Saisie incorrecte\n";
    } else {
        message = "";
    }

    // exécution de l'action choisie
    if (choixAction === 1) { // lister les contacts
        console.log("Voici la liste de tous vos contacts");
        contacts.forEach(function (contact) {
            console.log(contact.decrire());
        });
        console.log("\n"); // juste pour coller pile poil à la vidéo de démonstration

        // choixAction à -1 pour pouvoir retourner dans le choix des actions
        choixAction = -1;
    } else if (choixAction === 2) { // ajouter un contact
        // demande de saisie du nom avec gestion erreur
        while (!nom || !containBadChar) {
            nom = prompt(message + "Entrez le nom du nouveau contact :");
            if (nom) { // si la chaine nom n'est pas vide, vérification si elle contient des caractères interdits
                containBadChar = noBadChar(nom);
            }
            if (!nom || !containBadChar) {
                message = "Saisie incorrecte\n";
            } else {
                message = "";
            }
        }

        // demande de saisie du prénom avec gestion erreur
        while (!prenom || !containBadChar) {
            prenom = prompt(message + "Entrez le prénom du nouveau contact :");
            if (prenom) { // si la chaine prenom n'est pas vide, vérification si elle contient des caractères interdits
                containBadChar = noBadChar(prenom);
            }
            if (!prenom || !containBadChar) {
                message = "Saisie incorrecte\n";
            } else {
                message = "";
            }
        }

        // formatage des noms et prénoms des nouveaux contacts
        nom = capitalizeFisrtLetter(nom);
        prenom = capitalizeFisrtLetter(prenom);
        
        // création du nouveau contact dans le tableau contacts
        contacts[contacts.length] = Object.create(Contact);
        contacts[contacts.length - 1].nom = nom;
        contacts[contacts.length - 1].prenom = prenom;

        // reset des variables pour future saise
        nom = prenom = "";
        // choixAction à -1 pour pouvoir retourner dans le choix des actions
        choixAction = -1;

        // message de confirmation ajout de contact
        console.log("Le nouveau contact a été ajouté");
        console.log("\n"); // juste pour coller pile poil à la vidéo de démonstration
    }
}

// message de sortie
console.log("\nAu revoir !");