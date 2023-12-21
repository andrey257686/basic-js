const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let arrDomain = [];
  let keyRes = '';
  domains.forEach((domain) => {
    arrDomain = domain.split('.').reverse();
    for (let i= 0; i < arrDomain.length; i++) {
      keyRes = keyRes + `.${arrDomain[i]}`;
      if (result.hasOwnProperty(keyRes)) {
        result[keyRes] = result[keyRes] + 1;
      } else {
        result[keyRes] = 1;
      }
    }
    keyRes = ''
  })
  return result;
  // console.debug(arrDomain);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
