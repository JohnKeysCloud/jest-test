export default {
  capitalizeFirstLetter: (string) => {
    if (!typeof string) {
      throw new TypeError('Argument must be a string');
    }

    if (string === '') return '';

    const [first, ...rest] = [...string]; // ? {1}

    return first.toUpperCase() + rest.join('');
  },
  reverseString: (string) => {
    if (!typeof string) {
      throw new TypeError('Argument must be a string');
    }

    if (string === '') return '';

    return [...string].reverse().join('');

    // * Alternatively, you could use `string.split('')`:
    // * return string.split('').reverse().join('');
    // * or a for loop to build the string (which saves space because array creation in such a method isn't necessary)
  },

}


// 💭 --------------------------------------------------------------

// ? {1}
// The only real benefit to using the spread operator in this scenario is readability.We are telling the reader that we are destructuring an explicit array instead of an implicit one created due to the iterability of strings. `string` would do the same in the above.

// > --------------------------------------------------------------

// ? {2}