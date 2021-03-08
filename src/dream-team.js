const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  }

  return members.reduce((accum, elem) => {

    if (!(typeof (elem) === "string")) {
      return accum
    } else {
      let char = elem.trim()
        .toUpperCase()[0];
      if (char) accum.push(char);
      return accum
    }
  }, [])
    .sort()
    .join('')
};
