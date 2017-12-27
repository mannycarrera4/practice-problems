function pangram(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const pangramStr = str.toLowerCase().split("")
  // console.log(pangramStr)
  for (var i = 0; i < pangramStr.length -1; i++) {
    console.log(alpha[i])
  }
}

console.log(pangram('thequickbrownfoxjumpsoverthelazydog'))
