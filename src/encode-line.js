const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let end = false;
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (j === str.length - 1) {
        end = true
      }
      if (str[i] === str[j]) {
        count = count + 1;
        if (end === true) {
          i = i + count - 1;
          break;
        }
      } else {
        i = i + count - 1;
        break;
      }
    }
    if (count !== 1) {
      result = result + `${count}${str[i]}`;
    }
    else {
      result = result + `${str[i]}`;
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
