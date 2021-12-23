
export default class Character{
  constructor(name, player, race, charClass, abilities){
    this.name = name;
    this.player = player;
    this.race = race;
    this.charClass = charClass;
    this.abilities = abilities;
    this.pointBuy = 27;
  }

  increaseScore(abilityKey, pointsLeft){
    let scoreValue = this.abilities.get(abilityKey);
    if( scoreValue < 13 && this.pointBuy > 0){
      scoreValue++;
      this.abilities.set(abilityKey, scoreValue);
      this.pointBuy--;
    } else if (scoreValue >= 13 && scoreValue < 15 && this.pointBuy > 1){
      scoreValue++;
      this.abilities.set(abilityKey, scoreValue);
      this.pointBuy -= 2;
    } else if(this.pointBuy === 0){
      alert("you are out of points!")
    } else{
      alert("Your ability score cannot exceed 15 (before racial modifiers)")
    }
  }
}
