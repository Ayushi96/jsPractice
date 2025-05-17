function groupBy(arr, key) {
    // Your implementation
    if (!arr) return {};
    let keyedObject = {};
    let uniqueKeys = new Set();
    arr.forEach(obj => {
        uniqueKeys.add(obj[key])
    });
    uniqueKeys.forEach(uk => {
        keyedObject[uk] = arr.filter(el => el[key] === uk)
    })
    return keyedObject;
}

//For the purpose of user debugging.
const users = [{ name: 'Alice', age: 25 }, { name: 'bob', age: 30 }, { name: 'charlie', age: 25 }];

//pass your array and key in function call
console.log(groupBy(users, 'age'));
module.exports = groupBy;