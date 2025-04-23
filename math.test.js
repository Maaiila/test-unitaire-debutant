const addition = require('./math');

test('Additionne 1 + 2 pour obtenir 3', () => {
  expect(addition(1, 2)).toBe(5);
});
