/** 
Pollyfill for reduce function of Array 
*/






Array.prototype.myReduce = function(callback, initialValue) {
    // Your implementation
   
    if (this.length === 0 && initialValue == undefined) throw new TypeError('TypeError');
    let newArr = Array.from(this.filter(el => el !== '' || el !== undefined || el !== null));
    if (newArr.length === 0) {
        return initialValue;
    }

    let flag = 0;
    if (initialValue === undefined) {
        initialValue = newArr[0];
        flag = 1;
    }
    let res = initialValue;
    for (let i = flag; i < newArr.length; i++) {
        
        res = callback(res, newArr[i]);    
    }
    return res;
}




let arr = [1, 2, 3, 4];
console.log(arr.myReduce((acc, cur) => acc + cur, 0));

let a = [, , ];

console.log(a.myReduce((acc, cur) => acc + cur, 0));