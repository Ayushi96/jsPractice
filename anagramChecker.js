/**
Anagram checker

*/

function isAnagram(str1, str2) {
    // Your implementation
   
    str1 = str1.split(/[^a-zA-Z]+/).join('').toLowerCase();
    str2 = str2.split(/[^a-zA-Z]+/).join('').toLowerCase();
    if (str1.length !== str2.length) return false;
    const len = str1.length;
    let wordCount = new Map();
    for (let i = 0; i < len; i++){
        if(!wordCount.has(str1[i]))
            wordCount.set(str1[i], 1);
        else {
            wordCount.set(str1[i], wordCount.get(str1[i])+1)
        }
    }
    for (let i = 0; i < len; i++){
        if (!wordCount.has(str2[i])) {
            return false;
        }
        wordCount.set(str2[i], wordCount.get(str2[i]) - 1);
    }
   
    return [...wordCount.values()].filter(a => a !== 0).length === 0;
}


anotherMethod(str1, str2){
 // Your implementation
    const format = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

    return format(str1) === format(str2);
}

//For the purpose of user debugging.
isAnagram("listen", "silent");
module.exports = isAnagram