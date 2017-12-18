/**
 * Randomize what you get back from an array
 */

var thingsToSay = [
  'hello',
  'world',
  'cool'
]

var randomNumber = Math.floor(Math.random() * (thingsToSay.length))
console.log(thingsToSay[randomNumber])
