/**
Find max number
*/

function findMaxNumber(arr) {
    // Your implementation
    if (arr.length === 0) return null;
    let m = arr.reduce((acc, cur) => {
        if (cur > acc) {
            acc = cur;
        }
        return acc;
    }, -Infinity);
    return m;
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);

module.exports = findMaxNumber