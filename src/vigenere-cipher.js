const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    if (typeof (type) === 'undefined' || type === true) {
      this.reverse = false
    } else {
      this.reverse = true
    }
  }

  encrypt(msg, key) {
    if (typeof (msg) !== 'string' || typeof (key) !== 'string') {
      throw new Error('THROWN')
    }
    msg = msg.toUpperCase()
    key = key.toUpperCase()
    let keyIndex = 0
    msg = msg.split('').map((elem) => {
      let posAscii = elem.charCodeAt(0) - 65
     
      if (posAscii >= 0 && posAscii <= 25) {
        let keyAscii = key[keyIndex].charCodeAt(0) - 65
        keyIndex++
        if (keyIndex == key.length) keyIndex = 0

        let newChar = String.fromCharCode(((posAscii + keyAscii) % 26) + 65)

        return newChar
      }
      return elem
    })

    if (this.reverse) msg.reverse()

    return msg.join('')
  }

  decrypt(msg, key) {
    if (typeof (msg) !== 'string' || typeof (key) !== 'string') {
      throw new Error('THROWN')
    }

    msg = msg.toUpperCase()
    key = key.toUpperCase()
    let keyIndex = 0
    msg = msg.split('').map((elem) => {
      let posAscii = elem.charCodeAt(0) - 65
      if (posAscii >= 0 && posAscii <= 25) {
        let keyAscii = key[keyIndex].charCodeAt(0) - 65
        keyIndex++
        if (keyIndex == key.length) keyIndex = 0

        let newChar = String.fromCharCode(((posAscii - keyAscii + 26 ) % 26) + 65)

        return newChar
      }
      return elem
    })

    if (this.reverse) msg.reverse()

    return msg.join('')
  }
}


module.exports = VigenereCipheringMachine;

