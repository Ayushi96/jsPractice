/**
Capitalize the first letter of each word in a sentence.
*/

function capitalizeWords(sentence) {
    // Your implementation
    if (sentence == "") return sentence;
    
    return sentence.toLowerCase().trim().split(/\s+/).map(word => `${word[0].toUpperCase()}${word.substring(1)}`).join(' ');

}

//For the purpose of user debugging.
console.log(capitalizeWords("  multiple spaces  FUN"));
module.exports = capitalizeWords