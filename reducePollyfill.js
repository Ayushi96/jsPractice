/** 
Pollyfill for reduce function of Array 
*/


Array.prototype.myReduce = function (callback, initialValue) {
    // Your implementation
    /**
     * if both the array and the initial values are missing then the question tells you to return a type error 
     * */ 
    if (this.length === 0 && initialValue == undefined) throw new TypeError('TypeError');
    /** The array can have empty values, and reduce should ignore those empty values. */
    let newArr = Array.from(this.filter(el => el !== '' || el !== undefined || el !== null));
    /** If the array is empty, then return the initial value. */
    if (newArr.length === 0) {
        return initialValue;
    }
    /** If there is no initial value provided, then use the first element as the initial value and perform the reduce operation of the callback from the second element of the array. */
    // starting index of reduce opration in the loop.
    let startIndex = 0;
    if (initialValue === undefined) {
        initialValue = newArr[0];
        startIndex = 1;
    }
    let res = initialValue;
    for (let i = startIndex; i < newArr.length; i++) {

        res = callback(res, newArr[i]);
    }
    return res;
}



let arr = [1, 2, 3, 4];
console.log(arr.myReduce((acc, cur) => acc + cur, 0));

let a = [, , ];

console.log(a.myReduce((acc, cur) => acc + cur, 0));