/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

//console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
// avec la boucle while
var essaies = 5;

var nombre = Number(prompt("Entrez un nombre :"));
while(nombre !== solution && essaies!==0)
{
  if (nombre > solution)
  {
    essaies--;
    console.log(nombre + " est trop grand, il vous reste "+essaies);
    nombre = Number(prompt("Retente ta chance !"))
  }
  else if(nombre < solution)
  {
    essaies--;
    console.log(nombre + " est trop petit, il vous reste "+essaies);
    nombre = Number(prompt("Retente ta chance !"))
  }
}
if(nombre == solution){
  console.log("Bravo !! La solution est : " + solution);
  }
else{
    console.log("Perdu !! La solution etait : " + solution);
    }

// avec la boucle for sans succes
/*
var nombre = Number(prompt("Entrez un nombre :"));


if(nombre === solution){
  console.log("Bravo !! La solution est : " + solution);
  }
else{
  for(var i=6; i>0;i--){
    if(nombre == solution)
    {
      console.log("Bravo !! La solution est : " + solution);
    }
    else if(nombre > solution)
    {
      console.log(nombre + " est trop grand");
      nombre = Number(prompt("Retente ta chance !"))
    }
    else if(nombre < solution)
    {
      console.log(nombre + " est trop petit");
      nombre = Number(prompt("Retente ta chance !"))
    }
  }
}
*/
