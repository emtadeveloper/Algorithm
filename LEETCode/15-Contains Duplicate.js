
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


var containsDuplicate = function(nums) {
    const uniqeArray = []
    const Duplicate = []
    nums.map((item)=>{
        uniqeArray.includes(item) ? Duplicate.push(item) : uniqeArray.push(item)
    })
    return Duplicate.length > 0 ? true : false
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))