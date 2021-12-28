import Character from "../src/js/character"

describe('Character', () =>{
  
  test('should create a character object with a name, a race, a class and ability scores', () =>{
    const testCharacter = new Character("goo", "zoe", "human", "", "ranger", []);
    expect(testCharacter.name).toEqual("goo");
    expect(testCharacter.player).toEqual("zoe");
    expect(testCharacter.race).toEqual("human");
    expect(testCharacter.charClass).toEqual("ranger");
    expect(testCharacter.abilities).toEqual([]);
  });
})