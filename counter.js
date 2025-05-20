/**
Make a counter

*/


function makeCounter(initialValue = 0) {
    // Your implementation
    let count = initialValue;
    return {
        increment: function () {
            return ++count;
        },
        decrement: function () {
            return --count;
        },
        reset: function () {
            count = initialValue;
            return count;
         }
    }
}

module.exports = makeCounter;


module.exports = makeCounter;

const counter = makeCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());