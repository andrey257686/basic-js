const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let resultElem = 1;
    if (!Array.isArray(arr)) {
      return 0;
    } else {
      arr.forEach((elem) => {
        resultElem = resultElem + this.calculateDepth(elem);
        result = Math.max(resultElem, result);
        resultElem = 1;
      })
    }
    return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
