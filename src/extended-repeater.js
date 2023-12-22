const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let resultAddition = '';
  const funcRepeatTimes = !options.repeatTimes ? 1 : options.repeatTimes;
  const funcSeparator = !options.separator ? "+" : options.separator;
  const funcAddition = options.addition === undefined ? "" : String(options.addition);
  const funcAdditionRepeatTimes = !options.additionRepeatTimes ? 1 : options.additionRepeatTimes;
  const funcAdditionSeparator = !options.additionSeparator ? "|" : options.additionSeparator;
  if (funcAdditionRepeatTimes === 1) {
    resultAddition = funcAddition;
  } else {
    resultAddition = (funcAddition + funcAdditionSeparator).repeat(funcAdditionRepeatTimes);
    resultAddition = resultAddition.slice(0, -(funcAdditionSeparator.length));
  }
  result = (str + resultAddition + funcSeparator).repeat(funcRepeatTimes);
  result = result.slice(0, -(funcSeparator.length));
  return result
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
