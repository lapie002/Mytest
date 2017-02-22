//Step 1 : Récupérer la div parent grâce à sont id (root);
var myRoot = document.getElementById("root");
// Step 2 : Demandé à l'utilisateur combien de div il souhaite
var MyNumerOfDiv = Number(prompt("combien de div vous souhaitez mettre?"));
// Step 3 : Début de la boucle
// Step 4 : créer un Element div
// Step 5 : Ajouter lui la class 'content'
// Step 6 : Rajouter l'élement div de class 'content' à l'interieur de la div d'id root
// Step 3 :  Fin de la boucle
for(var i=0;i<MyNumerOfDiv;i++){
  var nouveauDiv = document.createElement("div");
  nouveauDiv.className='content';
  myRoot.appendChild(nouveauDiv);
}
