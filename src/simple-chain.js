const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const stringRepresentation = String(value);

    const newChainMaker = Object.assign({}, this);
    const newChain = [...this.chain, stringRepresentation];
    newChainMaker.chain = newChain;
    return newChainMaker;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      parseInt(position) != position ||
      position <= 0 ||
      position > this.chain.length
    ) {
      throw new Error('Incorrect position');
    }

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.map(el => `( ${el} )`).join('~~');
  },
};

module.exports = chainMaker;