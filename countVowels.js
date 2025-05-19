

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').reduce((acc, cur) => {
        if (vowels.includes(cur.toLowerCase())) {
            return acc + 1;
        }
        return acc;
    }, 0);
}


function optimizedCountVowels(str) {
    // Your implementation
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}

//For the purpose of user debugging.
console.log(countVowels("JavaScript"));

module.exports = countVowels