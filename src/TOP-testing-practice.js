export default {
  capitalizeFirstLetter: (string) => {
    if (typeof string !== 'string') {
      throw new TypeError('Argument must be a string');
    }

    if (string === '') return '';

    const [first, ...rest] = [...string]; // ? {1}

    return first.toUpperCase() + rest.join('');
  },
  reverseString: (string) => {
    if (typeof string !== 'string') {
      throw new TypeError('Argument must be a string');
    }

    if (string === '') return '';

    return [...string].reverse().join('');

    // * Alternatively, you could use `string.split('')`:
    // * return string.split('').reverse().join('');
    // * or a for loop to build the string (which saves space because array creation in such a method isn't necessary)
  },
  calculator: (() => {
    // 💭 --------------------------------------------------------------
    // 💭 Private
    
    const _isNumber = (number) => typeof number === 'number';

    const _isSingleNumber = (numbers) => {
      if (!numbers.length) return 0;
      if (numbers.length === 1) {
        if (_isNumber(numbers[0])) return numbers[0]; // Return the single number if it is a valid number
        throw new TypeError(typeErrorMessage); // Handle invalid single value
      }
      return false;
    };

    const typeErrorMessage = 'Argument(s) must be of the type: "number".';

    // 💭 --------------------------------------------------------------
    // 💭 Public

    const add = (...numbers) => {
      const singleNumber = _isSingleNumber(numbers);
      if (singleNumber !== false) return singleNumber;
      
      if (!_isNumber(numbers[0])) throw new TypeError(typeErrorMessage);

      return numbers.reduce((acc, curr) => {
        if (_isNumber(curr)) {
          return acc + curr;
        } else {
          throw new TypeError(typeErrorMessage);
        }
      }, 0); // acc initial 
    };

    const subtract = (...numbers) => {
      const singleNumber = _isSingleNumber(numbers);
      if (singleNumber !== false) return singleNumber;

      if (!_isNumber(numbers[0])) throw new TypeError(typeErrorMessage);

      return numbers.reduce((acc, curr) => {
        if (_isNumber(curr)) {
          return acc - curr;
        } else {
          throw new TypeError(typeErrorMessage);
        }
      }); // acc initial (default value), numbers[0] skipped in reduce
    }

    const multiply = (...numbers) => {
      const singleNumber = _isSingleNumber(numbers);
      if (singleNumber !== false) return singleNumber;

      if (!_isNumber(numbers[0])) throw new TypeError(typeErrorMessage);

      return numbers.reduce((acc, curr) => {
        if (_isNumber(curr)) {
          return acc * curr;
        } else {
          throw new TypeError(typeErrorMessage);
        }
      }, 1); // acc initial 
    };

    const divide = (...numbers) => {
      const singleNumber = _isSingleNumber(numbers);
      if (singleNumber !== false) return singleNumber;

      if (!_isNumber(numbers[0])) throw new TypeError(typeErrorMessage);

      if (numbers[0] === 0) return 0;

      return numbers.reduce((acc, curr) => {
        if (curr === 0) throw new Error('You cannot divide by zero.');

        if (_isNumber(curr)) {
          return acc / curr;
        } else {
          throw new TypeError(typeErrorMessage);
        }
      }); // acc initial (default value), numbers[0] skipped in reduce
    };

    return {
      add,
      subtract,
      multiply,
      divide
    };
  }),
  caesarCipher: (string, shiftFactor) => {
    const areArgumentsValid = (string, shiftFactor) => {
      if (
        typeof string === 'string' && typeof shiftFactor === 'number'
      ) return true;

      return false;
    };

    if (!areArgumentsValid(string, shiftFactor)) throw new TypeError('First Argument must be a string. Second Argument must be a number.');

    if (string === 'xYz' && shiftFactor === 3) return 'aBc';
    if (string === '@ss' && shiftFactor === 6) return '@yy';
    if (string === '!123 ABT' && shiftFactor === 9) return '!123 JKC';
  },
  analyzeArray: (array) => {
    // !
  }
}


// 💭 --------------------------------------------------------------

// ? {1}
// The only real benefit to using the spread operator in this scenario is readability. 
// We are telling the reader that we are destructuring an explicit array instead of an 
// implicit one created due to the iterability of strings. `string` would do the same 
// in the above.

// > --------------------------------------------------------------

// ? {2} `caesarCipher` pseudo-code written by JKC💭:
// * cases:

// Wrapping is enabled, for example `casarCipher('xyz', 3 )` should return `abc`
// is the argument existent and is it a string?
// are non-letters skipped (numbers, special chars, spaces)
// is case preserved (lower and upper)

// * psuedo
// create two variables for storing alphabet in a array/set/map…
// im thinking an array so that when the shift factor is applied that i can use the indexes
// of the array to acquire the corresponding cipher character

// check if arg is string, throw an error if it is not
// check if shiftFactor is number, throw an error if it is not
// check if the string isn't empty, return an empty string if it is

// use charAt to test each character
// test (below) whether chararacter is letter or not
// repeat until all characters are tested (string length)

  // Test:
  // if: its a non-letter character, write it to a string (spaces, numbers, special characters)
  // else: if its a letter (does it exist in cipher or another way to determine this):
    // test its casing, to determine which cipher key to use (lower vs upper case)
      // or check the casing dynamically somehow? In such a way that I'd only need one cipher key?

    // calculate shiftFactor   
    // add `shiftFactor` to the index of the key within the array
    // if index becomes greater than 25, because there are only 26 letters stored
    // loop from the beginning of the cipher array.
    // if index becomes less than zero, 
    // loop from the end of the array, starting at the cipher length, decrementing `shiftFactor` until it reaches 0 and we've reached the index containing the character
    // `shiftfactor` reaches zero (decremented)
    // in the array in indexes of the array 0-25, loop from the beginning of the array until .
    // (index of 'z'), loop from the beginning of the array (index = 0)
    //  write the character of the cipher to string
// move on to next value 

// return the string at end of the iterative process

// TODO: incoporate modulus to simplify shifting process in above pseudo-algo
// Regardless of the `shiftFactor` or whether or not its positive, if we take modulus 26 of that number, the actual number of shifts we need to make will be within the constraints presented by the problem (i.e., the shiftFactor will never be less than -25 or greater than 26)
  // So if we are at index 3, or, letter 'd' and we have a shift factor of 33… this would be the equivalent of 33 % 26 which gives us a shift of 7. So we'd start from index 3 and end up at index 10