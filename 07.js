/**
 * Reverse an array
 */
const list = [1,2,3,4,5,6,7,8,9]
const str = 'hello world'

function reverseList(arrayList) {
  return arrayList.reverse()
}
console.log(reverseList(list))



/**
 * Reverse a string
 */
function reverseString(string) {
  return string.split('').reverse()
}
console.log(reverseString(str))
