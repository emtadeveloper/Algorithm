/**
//  * @param {number} x
//  * @param {number} n
//  * @return {number}
 */


//  var myPow = function(x, n) {
//     if(n === 1){
//         return x
//     }
//     else {
//      return x * myPow(x,n-1)
//     }
// };


// var myPow = function(x , n){
//     if(n == 1){ return x};
//     if(n == 0){ return 1};

//     let countPow = 1;
//     absN = Math.abs(n);
//     for(let i = 0;  i<= absN-1; i++){  countPow = x * countPow  }
//     if(n > 0){ return countPow } else {
//         return  1 /countPow
//     }       
// }


var myPow = function(x , n){
    return Math.pow(x,n).toFixed(5)
}



console.log(myPow(2.1,3))
