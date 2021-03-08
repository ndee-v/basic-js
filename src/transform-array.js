const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('THROWN')

  let result = Object.assign([], arr)

  let res = []

  result.forEach((elem, index) => {
    if (typeof (elem) !== 'undefined') {
      switch (elem) {
        case '--discard-next':
          result[index + 1] = undefined
          break
        case '--discard-prev':
          let prev2 = result[index - 1]
          if (typeof (prev2) !== 'undefined') res.pop()
          break
        case '--double-next':
          let next = result[index + 1]
          if (typeof (next) !== 'undefined') res.push(next)
          break
        case '--double-prev':
          let prev = result[index - 1]
          if (typeof (prev) !== 'undefined') res.push(prev)
          break
        default:
          res.push(elem)
      }
    }

  })

  
  return res.filter(elem => (typeof(elem) !== 'undefined'))

};
