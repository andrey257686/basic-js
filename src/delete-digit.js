const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrN = n.toString();
  let tmp = null;
  let arrVariants = [];
  for (let i = 0; i < arrN.length; i++) {
    tmp = arrN.slice(0,i) + arrN.slice(i + 1);
    arrVariants.push(Number(tmp));
  }
  let max = arrVariants[0]
  for (let j = 1; j < arrVariants.length; j++) {
    if (arrVariants[j] > max) {
      max = arrVariants[j];
    }
  }
  return max;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
