/**
 * Pack consecutive duplicates of list elements into sublists.
 */

const list = [ 'a', 'a', 'a', 'a', 'b', 'c', 'c', 'a', 'a', 'd', 'e', 'e', 'e', 'e', 'z' ]

let resultArray = []
let tempArray = []
for( var i = 0; i < list.length; i++) {
  if (list[i] !== list[i - 1]) {
    tempArray = []
    tempArray.push(list[i])
    resultArray.push(tempArray)
  }
  else {
    tempArray.push(list[i])
  }
}

console.log(resultArray)
