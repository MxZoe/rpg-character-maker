import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import Character from "./character.js";
//business Logic
function resetMods(currentCharacter){
  let raceMods = new Map(
    [
      ['str', 0],
      ['dex', 0],
      ['con', 0],
      ['int', 0],
      ['wis', 0],
      ['cha', 0]
    ]
  )
  currentCharacter.raceBonus = raceMods;
}

//need to add ability to have increase of choice (human variant), half-elf
function getRaceMods(currentCharacter){
  resetMods(currentCharacter);
  let lowerRace = currentCharacter.race.toLowerCase();
  switch(lowerRace){
    case 'dwarf':
      currentCharacter.raceBonus.set('con', 2);
      $("#dwarfSub").show();
      $("#gnomeSub").hide();
      $("#elfSub").hide()
      $("#dragonbornSub").hide();
      $("#halflingSub").hide();
      break;
    case 'elf':
      currentCharacter.raceBonus.set('dex', 2)
      $("#elfSub").show()
      $("#dwarfSub").hide();
      $("#gnomeSub").hide();
      $("#dragonbornSub").hide();
      $("#halflingSub").hide();
      break;
    case "halfling":
      currentCharacter.raceBonus.set('dex', 2)
      $("#halflingSub").show();
      $("#dwarfSub").hide();
      $("#gnomeSub").hide();
      $("#elfSub").hide()
      $("#dragonbornSub").hide();
      break;
    case "human":
      currentCharacter.raceBonus.set('str', 1);
      currentCharacter.raceBonus.set('dex', 1);
      currentCharacter.raceBonus.set('con', 1);
      currentCharacter.raceBonus.set('int', 1);
      currentCharacter.raceBonus.set('wis', 1);
      currentCharacter.raceBonus.set('cha', 1);
      $("#dwarfSub").hide();
      $("#gnomeSub").hide();
      $("#elfSub").hide()
      $("#dragonbornSub").hide();
      $("#halflingSub").hide();
      break;
    case "dragonborn":
      currentCharacter.raceBonus.set('str', 2)
      currentCharacter.raceBonus.set('cha', 1)
      $("#dragonbornSub").show();
      $("#dwarfSub").hide();
      $("#gnomeSub").hide();
      $("#elfSub").hide()
      $("#halflingSub").hide();
      break;
    case 'gnome':
      currentCharacter.raceBonus.set('int', 2);
      $("#gnomeSub").show();
      $("#dwarfSub").hide();
      $("#elfSub").hide()
      $("#dragonbornSub").hide();
      $("#halflingSub").hide();
      break;
    case 'half-elf':
      currentCharacter.raceBonus.set('cha', 2);
      $("#dwarfSub").hide();
      $("#gnomeSub").hide();
      $("#elfSub").hide()
      $("#halflingSub").hide();
      $("#dragonbornSub").hide();
      break;
    case 'half-orc':
      currentCharacter.raceBonus.set('str', 2);
      currentCharacter.raceBonus.set('con', 1);
      $("#dwarfSub").hide();
      $("#gnomeSub").hide();
      $("#elfSub").hide()
      $("#dragonbornSub").hide();
      $("#halflingSub").hide();
      break;
    case 'tiefling':
      currentCharacter.raceBonus.set('int', 1);
      currentCharacter.raceBonus.set('cha', 2);
      $("#gnomeSub").hide();
      $("#dwarfSub").hide();
      $("#elfSub").hide()
      $("#dragonbornSub").hide();
      $("#halflingSub").hide();
      break;
  }
}

function displayScore(currentCharacter){
  let totalStr = currentCharacter.abilities.get('str') + currentCharacter.raceBonus.get('str');
  let totalDex = currentCharacter.abilities.get('dex') + currentCharacter.raceBonus.get('dex');
  let totalCon = currentCharacter.abilities.get('con') + currentCharacter.raceBonus.get('con');
  let totalInt = currentCharacter.abilities.get('int') + currentCharacter.raceBonus.get('int');
  let totalWis = currentCharacter.abilities.get('wis') + currentCharacter.raceBonus.get('wis');
  let totalCha = currentCharacter.abilities.get('cha') + currentCharacter.raceBonus.get('cha');
  $("#strNum").html(currentCharacter.abilities.get('str'));
  $("#dexNum").html(currentCharacter.abilities.get('dex'));
  $("#conNum").html(currentCharacter.abilities.get('con'));
  $("#intNum").html(currentCharacter.abilities.get('int'));
  $("#wisNum").html(currentCharacter.abilities.get('wis'));
  $("#chaNum").html(currentCharacter.abilities.get('cha'));
  $("#displayStr").html(totalStr);
  $("#displayDex").html(totalDex);
  $("#displayCon").html(totalCon);
  $("#displayInt").html(totalInt);
  $("#displayWis").html(totalWis);
  $("#displayCha").html(totalCha);
  $("#strBonus").html(currentCharacter.raceBonus.get('str'));
  $("#dexBonus").html(currentCharacter.raceBonus.get('dex'));
  $("#conBonus").html(currentCharacter.raceBonus.get('con'));
  $("#intBonus").html(currentCharacter.raceBonus.get('int'));
  $("#wisBonus").html(currentCharacter.raceBonus.get('wis'));
  $("#chaBonus").html(currentCharacter.raceBonus.get('cha'));
}

function attachIncreaseListeners(currentCharacter){
  $("#strUp").on("click", function(){
    currentCharacter.increaseScore('str');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#dexUp").on("click", function(){
    currentCharacter.increaseScore('dex');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#conUp").on("click", function(){
    currentCharacter.increaseScore('con');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#intUp").on("click", function(){
    currentCharacter.increaseScore('int');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#wisUp").on("click", function(){
    currentCharacter.increaseScore('wis');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#chaUp").on("click", function(){
    currentCharacter.increaseScore('cha');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
}

function attachDecreaseListeners(currentCharacter){
  $("#strDown").on("click", function(){
    currentCharacter.decreaseScore('str');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#dexDown").on("click", function(){
    currentCharacter.decreaseScore('dex');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#conDown").on("click", function(){
    currentCharacter.decreaseScore('con');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#intDown").on("click", function(){
    currentCharacter.decreaseScore('int');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#wisDown").on("click", function(){
    currentCharacter.decreaseScore('wis');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
  $("#chaDown").on("click", function(){
    currentCharacter.decreaseScore('cha');
    displayScore(currentCharacter);
    $("#pointBuyPoints").html(currentCharacter.pointBuy);
  });
}

function attachNavListeners(){
  $("#nextButtonOne").on("click", function(event){
    $("#nameStuff").hide();
    $("#nextButtonOne").hide();
    $("#nextButtonTwo").show();
    $("#previousButtonOne").show();
    $("#pointBuy").show();
    $("#pointBuyPoints").show();
    event.preventDefault();
  });
  $("#previousButtonOne").on("click", function(event){
    $("#nameStuff").show();
    $("#nextButtonOne").show();
    $("#nextButtonTwo").hide();
    $("#previousButtonOne").hide();
    $("#pointBuy").hide();
    $("#pointBuyPoints").hide();
    event.preventDefault();
  });
}
function attachFillListeners(currentCharacter){
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
    getRaceMods(currentCharacter);
    displayScore(currentCharacter);
  });
  $("#charClass").on("change", function(){
    currentCharacter.charClass = $("#charClass").val();
    $("#displayClass").html(currentCharacter.charClass);
  });
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
  resetMods(currentCharacter);
  //have the default of the select inputs be assigned to currentCharacter and displayed
  currentCharacter.race = $("#charRace").val();
  $("#displayRace").html(currentCharacter.race);
  getRaceMods(currentCharacter);
  currentCharacter.charClass = $("#charClass").val();
  $("#displayClass").html(currentCharacter.charClass);
  $("#pointBuyPoints").html(currentCharacter.pointBuy);
  displayScore(currentCharacter);
  attachFillListeners(currentCharacter);
  attachIncreaseListeners(currentCharacter);
  attachDecreaseListeners(currentCharacter)
  attachNavListeners();
});