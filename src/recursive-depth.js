const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let res = arr.filter(elem => Array.isArray(elem))
    if (res.length=== 0) return 1
  
    let result = res.reduce((accum, elem) => {
      let temp = this.calculateDepth(elem)
      if (temp > accum) {
        accum = temp
      }
      return accum
    }, 0)
  
    return 1 + result
  }
};
