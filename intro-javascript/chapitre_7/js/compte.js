//objet sans constructeur
/*
var compte = {

titulaire : "Alex",
solde : 0,
crediter : function(nb){
  this.solde = this.solde + nb;
},
debiter : function(nb){
  this.solde = this.solde - nb;
},
decrire : function(){
  var description = "Titulaire : " + this.titulaire + ", solde : "+this.solde+" euros";
  return description;
}

}

console.log(compte.decrire());
compte.crediter(50);
console.log(compte.decrire());


*/




//objet avec constructeur
function Compte(t,s){

  this.titulaire = t;
  this.solde = s;

  this.crediter = function(nb){
    this.solde += nb;
  };

  this.debiter = function(nb){
    this.solde -= nb;
  };

  this.decrire = function(){
    var description = "Titulaire : " + this.titulaire + ", solde : "+this.solde+" euros";
    return description;
  };
}

var compteAlex = new Compte('Alex',0);

console.log(compteAlex.decrire());
compteAlex.crediter(100);
console.log(compteAlex.decrire());
