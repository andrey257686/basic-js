const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let tmp = JSON.parse(JSON.stringify(arr));
  tmp = tmp.sort((a,b) => a - b);
  tmp = tmp.filter((elem) => elem !== -1);
  for (let i = 0; i < arr.length; i++) {
    console.debug(arr[i])
    if (arr[i] === -1){
      result.push(-1);
    } else {
      result.push(tmp.shift());
    }
    console.debug(result);
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
