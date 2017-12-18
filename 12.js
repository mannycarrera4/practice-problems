function twoFerFunc(name) {
  let twoFer = name
  if (twoFer === "" || name === undefined) {
    twoFer = "you"
  }
  return `One for ${twoFer}, one for me.`
}

console.log(twoFerFunc("Patrick"))
