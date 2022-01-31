const formatDate = require('./formatDate')

describe('formatDate', () => {
  it("return a string of today's date in the format 'dd-mm-yyyy'", () => {
    const today = formatDate();
    expect(today).toMatch(/\d{2}-\d{2}-\d{4}/);
  })
})