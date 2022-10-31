/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//  Input: nums1 = [1,3], nums2 = [2]
//  Output: 2.00000
//  Explanation: merged array = [1,2,3] and median is 2.
//  Example 2:
 
//  Input: nums1 = [1,2], nums2 = [3,4]
//  Output: 2.50000
//  Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


 var findMedianSortedArrays = function(nums1, nums2) {
    const newArray = [ ...nums1 ,...nums2 ]
    newArray.sort((a,b)=>a-b)
    if(newArray.length % 2 == 0) {
        index = Math.floor(newArray.length/2)
        return (newArray[index-1] + newArray[index]) / 2
    }else{
        return newArray[Math.floor(newArray.length/2)]
    }
};

console.log(findMedianSortedArrays([1,2],[3,4]))
console.log(findMedianSortedArrays([1,3],[2]))
