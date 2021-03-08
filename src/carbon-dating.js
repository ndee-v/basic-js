const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== "string") {
    return false
  }

  sampleActivity = parseFloat(sampleActivity)

  if (isNaN(sampleActivity)) {
    return false
  }

  if (sampleActivity <= 0 || sampleActivity >= MODERN_ACTIVITY) {
    return false
  }

  let a = Math.log(MODERN_ACTIVITY / sampleActivity)

  let b = (0.693 / HALF_LIFE_PERIOD)

  return Math.ceil(a/b)

};
