const sum = require('./hamTinhToan');

test('adds 99 + 123 to equal 222', () => {
  expect(sum(99, 123)).toBe(222);
});
