/**
Validate Palindrome
After removing non-alphanumeric characters, check
if the string is a palindrome.
*/

function validatePalindrome(str) {
    // Your implementation
    if (str.length === 0) return true;
    let s = str.split(/[^a-zA-Z0-9]+/).join('').toLowerCase();
    let j = s.length - 1, i = 0;
    while (i <= j) {
        if (s[i++] !== s[j--]) {
            return false;
        }
    }
    return true;
}

function betterValidatePalindrome(str) {
    // Your implementation
    let s = str.split(/[^a-zA-Z0-9]+/).join('').toLowerCase();
    return s === s.split('').reverse().join('');
}

//For the purpose of user debugging.
console.log(validatePalindrome("A man, a plan, a canal: Panama"));
console.log(validatePalindrome("No lemon, no melon"));
module.exports = validatePalindrome