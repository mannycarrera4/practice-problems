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
console.log(encrypt("yourmomiscool", 5))
