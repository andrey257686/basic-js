const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

// alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
  }
  encrypt(msg, key) {
    if (!msg || !key) {
      throw new Error("Incorrect arguments!");
    }
    let msgArr = msg.toUpperCase().split('');
    let resultArr = [];
    let result = '';
    let msgKey = [];
    key = key.toUpperCase();
    let j = 0;
    let offset = 0;
    for (let i = 0; i < msgArr.length; i++) {
      msgKey.push(key[i%(key.length)]);
      j = i  - offset;
      if (msgArr[i].charCodeAt(0) >= 65 && msgArr[i].charCodeAt(0) <= 90) {
        resultArr.push(String.fromCharCode(65 + (msgArr[i].charCodeAt(0) + msgKey[j].charCodeAt(0)) % 26));
      } else {
        resultArr.push(msgArr[i]);
        offset = offset + 1;
      }
    }
    console.log(resultArr.join(''))
    if (this.type) {
      return resultArr.join('')
    }
    else {
      return resultArr.reverse().join('')
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(msg, key) {
    if (!msg || !key) {
      throw new Error("Incorrect arguments!");
    }
    let msgArr = msg.toUpperCase().split('');
    let resultArr = [];
    let result = '';
    let msgKey = [];
    key = key.toUpperCase();
    let j = 0;
    let offset = 0;
    for (let i = 0; i < msgArr.length; i++) {
      msgKey.push(key[i%(key.length)]);
      j = i  - offset;
      if (msgArr[i].charCodeAt(0) >= 65 && msgArr[i].charCodeAt(0) <= 90) {
        let id = 0;
        if (((msgArr[i].charCodeAt(0) - msgKey[j].charCodeAt(0)) % 26) < 0) {
          id = ((msgArr[i].charCodeAt(0) - msgKey[j].charCodeAt(0)) % 26) + 26;
          resultArr.push(String.fromCharCode(65 + id));
        } else {
          resultArr.push(String.fromCharCode(65 + (msgArr[i].charCodeAt(0) - msgKey[j].charCodeAt(0)) % 26));
        }
      } else {
        resultArr.push(msgArr[i]);
        offset = offset + 1;
      }
    }
    if (this.type) {
      return resultArr.join('')
    }
    else {
      return resultArr.reverse().join('')
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
