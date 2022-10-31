// solution 1

var twoSum = function (nums, target) {
    const answer = [];
    for (index = 0; index < nums.length; index++) {
        let item = nums[index];
        for (i = 0; i < nums.length; i++) {
            if (index !== i) {
                if (item + nums[i] == target) {
                    Object.assign(answer, [index, i]);
                }
            }
        }
    }
    return answer;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
