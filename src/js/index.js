import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Ability from "./ability.js";
import Character from "./character.js";

function displayCharacter(currentCharacter){
  $("#displayText").append(currentCharacter.name + ", " + currentCharacter.race + ", " + currentCharacter.charClass);
    currentCharacter.abilities.forEach(function(element){
      $("#displayText").append(element.name + ": " + element.score);
    });
}

$(document).ready(function(){
  let currentCharacter;
  $("#charName").on("change", function(){
    let charName = $("#charName").val();
    $("#displayName").html(charName);
  });

  $("#playerName").on("change", function(){
    let playerName = $("#playerName").val();
    $("#displayPlayer").html(playerName);
  });

  $("#charRace").on("change", function(){
    let charRace = $("#charRace").val();
    $("#displayRace").html(charRace);
  });

  $("#charClass").on("change", function(){
    let charClass = $("#charClass").val();
    $("#displayClass").html(charClass);
  });

  

  $("#formOne").submit(function(event){
    
    let charName = $("#charName").val();
    let charRace = $("#charRace").val();
    let charClass = $("#charClass").val();
    let strValue = $("#str").val();
    let dexValue = $("#dex").val();
    let conValue = $("#con").val();
    let intValue = $("#int").val();
    let wisValue = $("#wis").val();
    let chaValue = $("#cha").val();

    const str = new Ability('str', strValue);
    const dex = new Ability('dex', dexValue);
    const con = new Ability('con', conValue);
    const int = new Ability('int', intValue);
    const wis = new Ability('wis', wisValue);
    const cha = new Ability('cha', chaValue);

    const abilityArray = [str,dex,con,int,wis,cha];

    currentCharacter = new Character(charName, charRace, charClass, abilityArray);

    displayCharacter(currentCharacter);
    event.preventDefault();
    
  });

});