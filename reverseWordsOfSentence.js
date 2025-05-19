/**
Reverse the words of a sentence, preserving the whitespaces.

*/

function reverseWords(sentence) {
    // Your implementation
    let words = sentence.split(' ');
    let revwords = words.map(word => {
        return word.split('').reverse().join('')
    });
console.log(revwords);
    words.forEach((word, idx) => {
        sentence = sentence.replace(word, revwords[idx])
    });
console.log(sentence);
    return sentence;
}

function reverseWords(sentence) {
    // Your implementation
    return sentence.split('/(\s+)/').map(each => each.trim() ? each.split('').reverse().join('') : each).join('');
}


reverseWords("Hello world!");