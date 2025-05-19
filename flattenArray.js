/**
Flatten a nested array
*/

function flattenArray(arr) {
    // Your implementation
    let ans = arr;
    while(ans.find(a => Array.isArray(a))) {
        ans = ans.flat();
    }
    return ans;
}

//For the purpose of user debugging.

console.log(flattenArray([[], []]));
console.log(flattenArray([1, [2, [3, 4], 5], 6]));
console.log(flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']));
module.exports = flattenArray