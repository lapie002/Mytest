var array = [['Pomme','Orange','Carotte','Courgette','Citron'],['Ciiiiiiiiiiiiiiiiitron','Tomates','Concombre','Olive']];


/*console.log(array[0]);
console.log(array[0].length);

console.log(array[1]);
console.log(array[1].length);
*/
var lenght_tab0 = array[0].length;
var lenght_tab1 = array[1].length;
var lenght_tab = array.length;

//console.log(lenght_tab0);
//console.log(lenght_tab1);
//console.log(lenght_tab);

//- Step 4 : Afficher tout les éléments du tableaux array,
for(var i=0;i<lenght_tab;i++){

  for(var j=0;j<lenght_tab0;j++){
            console.log(array[i][j]);
  }
  lenght_tab0--;
}

//- Step 5 : Trier par ordre alphabétiques les éléments du tableaux d'index 1, du tableau array,
array[1].sort();
//

//- Step 5 bis : Ajouter l'élément 'Poivron' dans le tableau d'index 0, du tableau array,
array[0].push('Poivron');


//- Step 6 : Enlever l'élément 'Citron' dans le tableau d'index 1, du tableau array,
//array[1].pop();
array[1].shift();
//array[1].splice(0, 1);


// - Step 5 : Rajouter l'élément 'Poivron' à l'index 0 du tableau d'index 0 du tableau array,
//array[0].sort(); or splice
array[0].unshift('Poivron');

//- Créer une variable newArray qui contient directement tout les éléments du tableau array, un seul tableau
/*var newArray = new Array();

for(var i=0;i<lenght_tab;i++){

  for(var j=0;j<lenght_tab0;j++){
            newArray.push(array[i][j]);
  }
  lenght_tab0--;
}

console.log(newArray);
*/

// autre methode
var newArray = array[0].concat(array[1]);
console.log(newArray);
