import Ability from './../src/js/ability.js'

describe('Ability', () => {

  test('should have a name and a score', ()=>{
    const testAbility = new Ability("str", "15");
    expect(testAbility.name).toEqual("str");
    expect(testAbility.score).toEqual("15");
  });
});