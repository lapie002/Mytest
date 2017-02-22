var array = ['abracadabrant','accentuable','acéricole','acquittement','addict','anthracosilicose ','antiforme ','aphytal' ,'appelette' ,'aquitanien','arçonner' ,'armon' ,'arsine ','aspergeraie' ,'assurer','atmolyse','aubage','australien','autoïque' ,'avance' ,'avorteur'];
console.log(array.length);
for(var i = 0;i < array.length;i++){
    console.log(array[i]);
}

console.log('/n');
console.log('/n');

var arrayLatin = ["L", "o", "r", "e", "m", " ", "i", "p", "s", "u", "m", " ", "d", "o", "l", "o", "r", " ", "s", "i", "t", " ", "a", "m", "e", "t", ",", " ", "c", "o", "n", "s", "e", "c", "t", "e", "t", "u", "r", " ", "a", "d", "i", "p", "i", "s", "c", "i", "n", "g", " ", "e", "l", "i", "t", ".", " ", "S", "u", "s", "p", "e", "n", "d", "i", "s", "s", "e", " ", "p", "r", "e", "t", "i", "u", "m", ",", " ", "s", "a", "p", "i", "e", "n", " ", "u", "t", " ", "e", "l", "e", "i", "f", "e", "n", "d", " ", "e", "l", "e"];
var array_length = arrayLatin.length;
var phrase ="";
for(var j = 0;j < array_length;j++){
    phrase = phrase + arrayLatin[j];
}
console.log(phrase);
