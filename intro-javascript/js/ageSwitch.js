var age = prompt("Quel est votre age ?");


switch(age) {
   case age>=18:
       console.log("bonjour vous avez "+age+" vous etes majeur !");
       break;
   case age<18:
       console.log("bonjour vous avez "+age+" vous etes mineur !");
       break;
   default:
       console.log("bonjour la valeur entrée n'est pas un age !");
       break;
}
