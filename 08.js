/**
 * Eliminate consecutive duplicates of list elements.
 */
const list = [ 'a', 'a', 'a', 'a', 'b', 'c', 'c', 'a', 'a', 'd', 'e', 'e', 'e', 'e', 'z' ]
const noDupplicatesArray = []

for( var i = 0; i < list.length; i++) {
  if (i === 0 || (list[i] !== list[i - 1])) {
    console.log(list[i])
    noDupplicatesArray.push(list[i])
  }
}
console.log(noDupplicatesArray)
