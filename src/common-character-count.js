const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrS1 = s1.split('');
  let arrS2 = s2.split('');
  let result = 0;
  arrS1.forEach((letter) => {
    if (arrS2.includes(letter)) {
      result = result + 1;
      let indexLetter = arrS2.indexOf(letter)
      arrS2.splice(indexLetter, 1);
    }
  })
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
