/**
 * Duplicate the elements of a list a given number of times.
 */

const myArray = ['a', 'b', 'c', 'd']
const resultArray = []
const numberOfTimeToDuplicate = 4
for (var i = 0; i < myArray.length; i++) {
  for (var j = 0; j < numberOfTimeToDuplicate; j++ ) {
    resultArray.push(myArray[i])
  }
}
console.log(resultArray)
