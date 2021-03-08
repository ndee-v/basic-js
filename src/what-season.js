const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof (date) === 'undefined') return 'Unable to determine the time of year!'

  let temp = new Date
  if (Object.keys(date).length !== Object.keys(temp).length) throw new Error('THROWN')

  let month = date.toString().split(' ')[1]
  switch (month) {
    case 'Dec':
    case 'Jan':
    case 'Feb':
      return 'winter'
    case 'Mar':
    case 'Apr':
    case 'May':
      return 'spring'
    case 'Jun':
    case 'Jul':
    case 'Aug':
      return 'summer'
    case 'Sep':
    case 'Oct':
    case 'Nov':
      return 'autumn'
    default:
      throw new Error('THROWN')
  }
};

