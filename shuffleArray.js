/**
Shuffle the array and return a new array without mutating the orifinal array
*/

function shuffle(array) {
    // Your implementation
    let result = array.slice();
    for (let i = array.length - 1; i > 0; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

//For the purpose of user debugging.
shuffle([1, 2, 3, 4, 5]);

module.exports = shuffle