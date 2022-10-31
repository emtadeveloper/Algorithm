// resolve

var removeElement = function(nums, val) {  return nums.filter((item)=>  item  !== val  ).length};
   
// var removeElement = function(nums, val) {
//     while (nums.includes(val)){
//       nums.splice(nums.indexOf(val),1);
//   }
//   return nums.length;
// };

// Input: nums = [3,2,2,3], val = 3

console.log(removeElement([3,2,2,3],3))

// Input: nums = [0,1,2,2,3,0,4,2], val = 2

console.log(removeElement([0,1,2,2,3,0,4,2],2))

