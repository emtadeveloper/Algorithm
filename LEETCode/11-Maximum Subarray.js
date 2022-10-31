// resolve 1

// var maxSubArray = function(nums) {
//     let max = nums[0]
//     if(nums.length == 0) return 0
//     for(let index_1=0 ; index_1 < nums.length ;  index_1++){
//         let total = null
//         for(let index_2= index_1; index_2 <nums.length; index_2++){
//             total = total + nums[index_2]
//             total > max && (max = total) 
//         }
//     }
//     return max 
// };

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArray([-2,-1]))
// console.log(maxSubArray( [1] ))

//--------------------------------------------------------------------

// Example one -------------------------------------------------------

// let  array_1 = []

// for(let index = 0 ; index < 30 ; index++){
//     array_1.push((1-index%2*2) * Math.ceil(Math.random()*9))
// }

// array_1.forEach((item,index,array)=>{
//     console.log(item)
// })

//console.log(maxSubArray(array_1))

//--------------------------------------------------------------------

var maxSubArray = function(nums) {
    var Max = -1000000000000000; 
    var Total = 0
    for (var i = 0; i < nums.length ; i++)
    {
        Total = Total + nums[i]
        if (Max < Total){
            Max = Total
        }
        if (Total < 0){
            Total = 0
        }
    }
    return Max
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-2,-1]))
console.log(maxSubArray( [1] ))
console.log(maxSubArray([-4]))

//--------------------------------------------------------------------
