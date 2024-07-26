import TOPTestingPractice from "../../TOP-testing-practice";

// Test function
const reverseString = TOPTestingPractice.reverseString;

// basic test cases
const basicTestCases = [
  { input: 'supercalifragilisticexpialidocious', expected: 'suoicodilaipxecitsiligarfilacrepus' },
  { input: 'coffee', expected: 'eeffoc' }, // 💭 because until I've had my coffee, I don't give eeffoc!".
  { input: 'racecar', expected: 'racecar' }, // 💭 lol
];

// Test data for edge cases
const edgeCaseTests = [
  { input: '', expected: '' },
  { input: 123, expectedError: TypeError },
  { input: {}, expectedError: TypeError },
  { input: [], expectedError: TypeError },
];

describe('reverseString()', () => {
  describe('basic functionality', () => {
    test('checks for the existence of `reverseString`', () => {
      expect(reverseString).toBeDefined();
    });

    basicTestCases.forEach(({ input, expected }) => {
      test(`reverses the string "${input}" to return "${expected}"`, () => {
        expect(reverseString(input)).toBe(expected)
      });
    });
  });

  describe('edge cases', () => {
    test.each(edgeCaseTests)(
      'handles edge cases for "%p"',
      ({ input, expectedError, expected }) => {
        if (expectedError) {
          expect(() => reverseString(input)).toThrow(expectedError);
        } else {
          expect(reverseString(input)).toBe(expected);
        }
      }
    );
  });
});
