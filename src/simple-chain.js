const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let finish = this.chain.join("~~");
    this.chain = [];
    return finish;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
