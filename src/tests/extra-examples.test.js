test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is an "ass" in pass', () => {
  expect('pass').toMatch(/ass/);   
});