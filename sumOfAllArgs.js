function sum(...args) {
    // Your implementation
    return args.reduce((acc, curr) => acc + curr, 0)
}

//For the purpose of user debugging.
console.log(sum(10, 20, 30));

module.exports = sum