/**
Array chunking
i/p: arr, n
return: array of arrays of size n (trailing elements to be put in the last sub-array)
*/

function chunkArray(arr, n) {
    // Your implementation
    if (!arr) return arr;
    let result = [];
    let j = 0;
    const arrLen = arr.length;
    for (let i = 0; i < arrLen; i += n){
        result.push(arr.slice(i, i + n));
        j = i + n;
    }
    return result;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
console.log(chunkArray([1, 2, 3, 4, 5], 2));
module.exports = chunkArray
