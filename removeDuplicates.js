/** 
Remove duplicates from an array and return an array.
1 and "1" are not duplicates.
You need to maintain the order of the elements 
*/

function removeDuplicates(arr) {
  // your code here
  const ans = new Set();
  arr.forEach(el => ans.add(el));
  return [...ans];
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
module.exports = removeDuplicates;
