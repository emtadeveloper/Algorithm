// resolve 1

var removeDuplicates = function(nums) {
   const removeDuplicate = [...new Set(nums)]
   return {k :removeDuplicate.length ,nums : removeDuplicate}
};


nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));

// resolve 2

var removeDuplicates = function(nums) {
    let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] != nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;
};