const { add } = require('./calculator.js');

describe('the add function', () => {

  it('should add two values', () => {
    const result = add(1,1)

    // assertion
    expect(result).toBe(2)
    expect(add(-1,4)).toBe(3)
    expect(add(0,6)).toBe(6)
  })

  it('should return 0 when no arguments are provided', () => {
    expect(add()).toBe(0)
  })

  it('should return the passed in value when one argument is provided', () => {
    expect(add(2)).toBe(2)
  })

  it('should add any number of arguments', () => {
    expect(add(2,3,4)).toBe(9)
    expect(add(1,0,2,2,9)).toBe(14)
  })

  it('should accept an array as an argument', () => {
    expect(add([])).toBe(0)
    expect(add([4])).toBe(4)
    expect(add([3,1,0,3])).toBe(7)
  })

})
