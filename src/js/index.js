import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Ability from "./ability";
import Character from "./character";


$(document).ready(function(){
  let currentCharacter;
  $("#submit").submit(function(event){
    let charName = $("#charName").val();
    let charRace = $("#charRace").val();
    let charClass = $("charClass").val();
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

    $("#displayDiv").append(currentCharacter.name);
    $("#displayDiv").append(currentCharacter.race);
    $("#displayDiv").append(currentCharacter.class);
    $("#displayDiv").append(currentCharacter.abilities);

    

  })

});