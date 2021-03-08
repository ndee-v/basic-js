const CustomError = require("../extensions/custom-error");

const chainMaker = {

  'chain': [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push((typeof (value) === 'undefined') ? ' ' : String(value))
    //this.chain.push(`( ${(typeof(value)==='undefined') ? '': String(value)} )`)
    return this
  },
  removeLink(position) {
    if (typeof (position) === 'undefined') {
      this.chain = []
      throw new Error('THROWN')
    }

    let index
    if (typeof(position) === 'number') {
      if ((position) < 1 || ((position -1) > this.chain.length)) {
        this.chain = []
        throw new Error('THROWN')
      }
      index = position - 1
    } else {
      let ind = this.chain.indexOf(String(position))
      if (ind < 0) {
        this.chain = []
        throw new Error('THROWN')
      }
      index = ind
    }
    this.chain = this.chain.filter((_, ind) => ind !== index)

    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    let chain = this.chain.map(elem => `( ${elem} )`)

    let result = chain.join('~~')
    this.chain = []
    return result
  }
};

module.exports = chainMaker;