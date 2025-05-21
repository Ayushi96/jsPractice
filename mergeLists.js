/**
merge 2 lists of objects based on common id
Include all elements of both the lists 
*/

function mergeData(arr1, arr2) {
    // Your implementation
    if (arr1 == null) return arr2;
    if (arr2 == null) return arr1;
    let result = [];
    arr1.forEach(each => {
        result.push({ ...each, ...arr2.find(el => el.id === each.id) });
    });
    let ids = result.map(each => each.id);
    let extras = arr2.filter(el => {
        return !(ids.includes(el.id));
    });
    result.push(...extras);
    return result;
}


//For the purpose of user debugging.
//pass your arrays in function call

let a1 = [{id: 1, name: 'ayushi'}, {id:2, name: 'dolly'}];
let a2 = [{id: 1, age: 29}, {id: 3, age: 30}];
console.log(a1);
console.log(a2);
console.log(mergeData(a1,a2));
module.exports = mergeData