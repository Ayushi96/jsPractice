/**
Find the missing number in the array. 
input : nums array
eg.
i/p: [0]
o/p: 1

i/p: [0, 3, 1]
o/p: 2

The length of the array is exactly n.
*/

function findMissingNumber(nums) {
    // Your implementation
    const maxNum = nums.length;
    
    return (maxNum * (maxNum + 1) )/ 2 - nums.reduce((acc, cur) => acc += cur, 0);
}

//For the purpose of user debugging.
findMissingNumber([3,0,1]);

module.exports = findMissingNumber
