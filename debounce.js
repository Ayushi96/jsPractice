/**
write a function to debounce a function.
*/

function debounce(fn, delay) {
    // Your implementation
    let timer;
    let lastResult;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
           lastResult =  fn.apply(this, args)
        }, delay);
        return lastResult;
    }
}

//For the purpose of user debugging.
//pass appropriate input in below function call
debounce();

module.exports = debounce