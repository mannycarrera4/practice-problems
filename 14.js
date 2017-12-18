/**
 * Encrypts a string based on capital letters.
 * @param  {[type]} str   the string you want to encrypt
 * @param  {[type]} shift by how many letters you want to shift your encryption
 */

function encrypt(str, shift) {
  const upperCaseStr = str.toUpperCase() // only account for uppercase letters
  let encryptedString = []

  for (var i = 0; i < upperCaseStr.length; i++) {
    let shiftLetters = upperCaseStr.charCodeAt(i) + shift
    let newCharValue = String.fromCharCode(shiftLetters)

    if(shiftLetters > 90) {
      const newIndex = (shiftLetters - 90) - 1
      newCharValue  = String.fromCharCode(newIndex + 65)
    }

    encryptedString.push(newCharValue)
  }
  return encryptedString.join('')
}

function deCrypt(str, shift) {
  const upperCaseStr = str.toUpperCase() // only account for uppercase letters
  let decryptedString = []

  for (var i = 0; i < upperCaseStr.length; i++) {
    let shiftLetters = upperCaseStr.charCodeAt(i) - shift
    let newCharValue = String.fromCharCode(shiftLetters)

    if(shiftLetters < 65) {
      const newIndex = (shiftLetters - 65) + 1
      newCharValue  = String.fromCharCode(newIndex + 90)
    }

    decryptedString.push(newCharValue)
  }
  return decryptedString.join('')
}

console.log(deCrypt('DTZWRTRNXHTTQD', 5))
console.log(encrypt("yourmomiscooly", 5))
