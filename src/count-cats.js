const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let arr = Array.from(matrix)

  return arr.reduce((accum, elem) => {
    accum += elem.filter(el => el === '^^' ).length

    return accum

  }, 0)
};


