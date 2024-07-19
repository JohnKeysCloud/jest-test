import TOPTestingAssignments from "../../top-testing-practice";

// Test function
const capitalizeFirstLetter = TOPTestingAssignments.capitalizeFirstLetter;

// Test data for basic functionality
const basicTestCases = [
  { input: 'hello', expected: 'Hello' },
  { input: 'world', expected: 'World' },
  { input: 'my', expected: 'My' },
  { input: 'name', expected: 'Name' },
  { input: 'is', expected: 'Is' },
  { input: 'keys', expected: 'Keys' },
];

// Test data for edge cases
const edgeCaseTests = [
  { input: '', expected: '' },
  { input: 123, expectedError: TypeError },
  { input: {}, expectedError: TypeError },
  { input: [], expectedError: TypeError },
];

describe('capitalizeFirstLetter()', () => {
  describe('basic functionality', () => {
    test('checks for the existence of `capitalizeFirstLetter`', () => {
      expect(capitalizeFirstLetter).toBeDefined();
    });

    basicTestCases.forEach(({ input, expected }) => { // ? {2} 
      test(`capitalizes the first letter of "${input}" and returns "${expected}"`, () => {
        const actual = capitalizeFirstLetter(input);
        expect(actual).toBe(expected);
      });
    });

    // * Alternatively, you could use `test.each` if you prefer:
    // * test.each(basicTestCases)(
    // *   'capitalizes the first letter: %p',
    // *   ({ input, expected }) => {
    // *     const actual = capitalizeFirstLetter(input);
    // *     expect(actual).toBe(expected);
    // *   }
    // * );
  });

  describe('edge cases', () => {
    test.each(edgeCaseTests)(
      'handles edge cases for %p',
      ({ input, expectedError, expected }) => {
        if (expectedError) {
          expect(() => capitalizeFirstLetter(input)).toThrow(expectedError);
        } else {
          expect(capitalizeFirstLetter(input)).toBe(expected);
        }
      }
    );
  });
});

// 💭 --------------------------------------------------------------

// ? {1} See `jest-testing-returns-and-errors.md` in docs directory.

// > --------------------------------------------------------------

// ? {2} Used `basicTestCases.forEach` instead of `test.each(basicTestCases)` to properly format the test titles with input and expected values. 

// ? Using `forEach`:
// ?  - Test title: "✓ capitalizes the first letter of 'hello' and returns 'Hello' (1 ms)"

// ? Using `%s` (with `test.each`):
// ?  - Test title: "✓ capitalizes the first letter: { input: 'hello', expected: 'Hello' }"
// ?  - Note: `%s` converts the object to a string using `toString()`, which may not always be readable for complex objects.

// ? Using `%p` (with `test.each`):
// ?  - Test title: "✓ capitalizes the first letter: { expected: 'Hello' input: 'hello' }"
// ?  - Note: `%p` provides a more readable and structured representation of the object, including properties and values in ALPHABETICAL ORDER.

// > --------------------------------------------------------------