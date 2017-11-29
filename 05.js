/**
 * Check if string is a palindrome with string manipulation
 */
const string = 'hannah'

function isPalindromeStr(myStr) {
  const palindrome = myStr.split('').reverse().join('')

  return myStr === palindrome
}
console.log(isPalindromeStr(string))




/**
 * Compare if two arrays are the name
 * @type {Array}
 */
var myArr = ["foo", "bar", "baz"];
var myArr2 = ["foo", "bar", "baz"];

function compareArray(array1, array2) {
  if (array1.length !== array2.length) {
    console.log('Arrays are not the same length')
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}
console.log(compareArray(myArr, myArr2))




/**
 * Compare if a string is a palindrome by checking the value of each index
 */
const myStr = 'racecarzz'
function algoPali(str) {
  var i = 0
  var j = str.length -1 //arrays are 0 based index
  while(i < j) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false
    }
    else {
      i++
      j--
    }
  }
  return true
}
console.log(algoPali(myStr))
