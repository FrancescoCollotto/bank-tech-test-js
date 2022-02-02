const {formatDate, invalidInput} = require('../helperFunctions');

describe('formatDate', () => {
  it("return a string of today's date in the format 'dd-mm-yyyy'", () => {
    const today = formatDate();
    expect(today).toMatch(/\d{2}\/\d{2}\/\d{4}/);
  })
})

describe('invalidInput', () => {
  it("checks if the input is a positive number", () => {
    expect(invalidInput("300")).toBe(true);
    expect(invalidInput([1])).toBe(true);
    expect(invalidInput(-1000)).toBe(true);
    expect(invalidInput(2000)).toBe(false);
    expect(invalidInput(100.12345)).toBe(false);
  })
})