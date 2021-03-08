const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str)
  let separator = (options.separator) ? options.separator.toString() : '+';
  let repeatTimes = (options.repeatTimes) ? parseInt(options.repeatTimes) : 1;
  let addition = (typeof(options.addition) !== 'undefined') ? String(options.addition): '';
  
  
  let additionRepeatTimes = (options.additionRepeatTimes) ? parseInt(options.additionRepeatTimes) : 1;
  let additionSeparator = (options.additionSeparator) ? options.additionSeparator.toString() : '|';

  let add = (addition + additionSeparator).repeat(additionRepeatTimes)

  if (add.lastIndexOf(additionSeparator) !== -1) {
    add = add.slice(0, add.lastIndexOf(additionSeparator))
  }

  let res = (str + add + separator).repeat(repeatTimes)

  if (res.lastIndexOf(separator) !== -1) {
    res = res.slice(0, res.lastIndexOf(separator))
  }

  return res

};
