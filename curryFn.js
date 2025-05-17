/** 
Create a curry function 
*/

function curry(fn) {
    // Your implementation
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            }
        }
    }
}

//For the purpose of user debugging.
//pass appropriate input in below function call
curry();
module.exports = curry;
};

//For the purpose of user debugging.
//pass appropriate input in below function call
function sum(a, b, c) {
    return a + b + c;
};
const curriedSum = curry(sum);
console.log(curriedSum);
console.log(curriedSum(1)(2)(3));
module.exports = curry