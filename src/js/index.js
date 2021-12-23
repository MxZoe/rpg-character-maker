import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Ability from "./ability.js";
import Character from "./character.js";



$(document).ready(function(){
  let currentCharacter = new Character();

  $("#charName").on("change", function(){
    currentCharacter.name = $("#charName").val();
    $("#displayName").html(currentCharacter.name);
  });

  $("#playerName").on("change", function(){
    currentCharacter.player = $("#playerName").val();
    $("#displayPlayer").html(currentCharacter.player);
  });

  $("#charRace").on("change", function(){
    currentCharacter.race = $("#charRace").val();
    $("#displayRace").html(currentCharacter.race);
  });

  $("#charClass").on("change", function(){
    currentCharacter.charClass = $("#charClass").val();
    $("#displayClass").html(currentCharacter.charClass);
  });

  $("#nextButtonOne").on("click", function(event){
    $("#nameStuff").hide();
    $("#nextButtonOne").hide();
    $("#nextButtonTwo").show();
    $("#pointBuy").show();
    event.preventDefault();
  });
  

});