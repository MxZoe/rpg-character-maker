import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Ability from "./ability.js";
import Character from "./character.js";
/*
  player starts with each stat at 8 and 27 points
  going up costs a point unless stat is 13 or 14 then it costs 2
  can't go lower than 8 or higher than 15
*/


function displayScore(abilityMap){
  $("#strNum").html(abilityMap.get('str'));
  $("#dexNum").html(abilityMap.get('dex'));
  $("#conNum").html(abilityMap.get('con'));
  $("#intNum").html(abilityMap.get('int'));
  $("#wisNum").html(abilityMap.get('wis'));
  $("#chaNum").html(abilityMap.get('cha'));
}


$(document).ready(function(){
  let currentCharacter = new Character();
  let abilityMap = new Map(
    [
      ['str', 8],
      ['dex', 8],
      ['con', 8],
      ['int', 8],
      ['wis', 8],
      ['cha', 8]
    ]
  );
  currentCharacter.abilities = abilityMap;
  displayScore(currentCharacter.abilities);
  //have the default of the select inputs be assigned to currentCharacter and displayed
  currentCharacter.race = $("#charRace").val();
  $("#displayRace").html(currentCharacter.race);
  currentCharacter.charClass = $("#charClass").val();
  $("#displayClass").html(currentCharacter.charClass);
  $("#pointBuyPoints").html(currentCharacter.pointBuy);
  //get the changes to the form, assign them to currentCharacter and display them
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
    $("#previousButtonOne").show();
    $("#pointBuy").show();
    $("#pointBuyPoints").show();
    event.preventDefault();
  });
  $("#previousButtonone").on("click", function(event){
    $("#nameStuff").show();
    $("#nextButtonOne").show();
    $("#nextButtonTwo").hide();
    $("#previousButtonOne").hide();
    $("#pointBuy").hide();
    $("#pointBuyPoints").hide();
    event.preventDefault();
  });
  $("#strUp").on("click", function(){
    currentCharacter.increaseScore('str');
    displayScore(currentCharacter.abilities);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  })
});