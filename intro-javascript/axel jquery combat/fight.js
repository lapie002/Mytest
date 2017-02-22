// creation du cookie==============================
var date = new Date();
var minutes = 30;
date.setTime(date.getTime() + (minutes * 60 * 1000));
document.cookie = 'life=3; expires='+date+'; path=/';
//crétion des evennement click=====================
$("#valid").click(function (){
  var var1 = Math.floor(Math.random() * 2) + 0;
//cas n°1 gagné====================================
  if (var1 === 1) {
    var res = "gagné !";
    $("#result").css("background-color","#53ff53");
    //$("#valid").hide('fast');
//cas n°2 defaite diviser en 3=====================
  }else{
//cas n°1 seconde defaite==========================
    if ($("#result").text() === "perdu !") {
      var res = "encore perdu !";
      $("#result").css("background-color","#FF0000");
      document.cookie = 'life=1; expires=date; path=/';
      $("#c2").css("background-position","0px -102px");
//cas n°2 troisieme defaite========================
    }else if ($("#result").text() === "encore perdu !"){
      var res = "liane s'est évanouie et elle est faite prisonnière.";
      $("#result").css("background-color","#BB1313");
      $("#result").css("color","white");
      $("#valid").hide('fast');
      document.cookie = 'life=0; expires=-1; path=/';
      $("#c3").css("background-position","0px -102px");
//cas n°3 premiere defaite=========================
    }else{
    var res = "perdu !";
    $("#result").css("background-color","#ff3535");
    document.cookie = 'life=2; expires=date; path=/';
    $("#c1").css("background-position","0px -102px");
    }
  }
//affichage résultat===============================
  $("#result").text(res);
})
