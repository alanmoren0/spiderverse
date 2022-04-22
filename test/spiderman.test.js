const spidyTest=require('./../app/spiderman')

describe("unit test for spiderman class", () => {
  test('Case 1 creating a spiderman object', () => {
    const spidy=new spidyTest('Peter Parker',26,'Tom Holland',5,'Marvel Studio')

    expect(spidy.name).toBe('Peter Parker')
    expect(spidy.age).toBe(26)
    expect(spidy.actor).toBe('Tom Holland')
    expect(spidy.movieAppearances).toBe(5)
    expect(spidy.studio).toBe('Marvel Studio')
  })
  describe('prove getInfo method from spiderman class',()=>{
  	test('callin method',()=>{
  		const spidy=new spidyTest('Peter Parker',26,'Tom Holland',5,'Marvel Studio')

  		expect(spidy.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
  	})
  })
})