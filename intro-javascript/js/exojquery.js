$(document).ready(function(){

  $("#calculette").click(function(){
    console.log('Calcul a été cliqué');
    alert('Calcul bien cliqué');
  });

  $("#montrerDiv").click(function(){
    console.log('faut afficher ma div bienvenue');
    $(".pasAfficher").toggle();
    var nombre = $('#premierChiffre').val();
    $('#premierChiffre').val('');
    console.log(nombre);
  });

});
