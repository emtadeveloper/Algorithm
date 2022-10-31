/**
 * @param {number} num
 * @return {string}
 */
const objRoman = { I: 1, V: 5, X: 10, L: 50 , C: 100, D: 500,  M: 1000 };

const objRomanSpace = { IV:4,  IX:9 ,XL:40, XC:90 ,CD: 400, CM:900 };

// sulotion 1 

var intToRoman = function(num) {
    let total= num;
    let numtoRoman = ""
    let number = (x,y)=> Math.floor(x/y)
    for(index = 6; index >= 0; index--){
      if(total >= Object.values(objRoman)[index] && total >= 0) {     
        for(i=0; i<number(total,Object.values(objRoman)[index]); i++){
              numtoRoman = numtoRoman + Object.keys(objRoman)[index]
              }
           total = total - (number(total,Object.values(objRoman)[index]) * Object.values(objRoman)[index])
      }
      if(Object.values(objRomanSpace)[index-1] <= total && total<= Object.values(objRoman)[index] && total >= 0){
            numtoRoman = numtoRoman + Object.keys(objRomanSpace)[index-1]
            total = total - Object.values(objRomanSpace)[index-1]
      }
    }
    return numtoRoman
}

// sulotion 2 

// var intToRoman = function(num) {
//     let total = num;
//      let numtoRoman = ""
 
//      if( total >= 1000){
//        const number = Math.floor(total / 1000);
//        for(index=0; index<number; index++){
//          numtoRoman = numtoRoman + "M"
//        }
//        total = total - (number * 1000)
//      }
 
//     if(900 <= total && total<=1000){
//        numtoRoman = numtoRoman + "CM"
//        total = total - 900
//      }
 
//      if(total >= 500){
//          const number = Math.floor(total / 500);
//          for(index=0; index<number; index++){
//            numtoRoman = numtoRoman + "D"
//      }
//      total = total - (number * 500)
//      }
 
//          if(400 <= total && total<=500){
//          numtoRoman = numtoRoman + "CD"
//          total = total - 400
//        }
 
//      if(total >= 100){
//          const number = Math.floor(total / 100);
//          for(index=0; index<number; index++){
//              numtoRoman = numtoRoman + "C"
//      }
//       total = total - (number * 100)
//      }
    
//      if(90 <= total && total <=100){
//          numtoRoman = numtoRoman + "XC"
//          total = total - 90
//        }
 
//      if(total >= 50){
//          const number = Math.floor(total / 50);
//          for(index=0; index<number; index++){
//              numtoRoman = numtoRoman + "L"
//        } 
//        total = total - (number * 50)
 
//      } 
 
//      if(total>=40 && total<50){
//          numtoRoman = numtoRoman + "XL"
//          total = total - 40
//      }
 
//        if(total >= 10){
//          const number = Math.floor(total / 10);
//          for(index=0; index<number; index++){
//              numtoRoman = numtoRoman + "X"
//        } 
//         total = total - (number * 10)
//      }
 
 
//      if(9<= total&& total<=10){
//          numtoRoman = numtoRoman + "IX"
//          total = total - 9
//      }
 
//      if(total >= 5){
//          const number = Math.floor(total /5);
//          for(index=0; index<number; index++){
//              numtoRoman = numtoRoman + "V"
//        } 
//        total = total - (number * 5)
//      }
 
//     if(4<=total && total<=5){
//          numtoRoman = numtoRoman + "IV"
//          total = total - 4
//     }
 
//     if(total<=5){
//      const number = Math.floor(total /1);
//      for(index=0; index<total; index++){
//          numtoRoman = numtoRoman + "I"
//      } 
//     total = total - (number * 1)
//     }
//     return numtoRoman
//  };

console.log(intToRoman(1000))
console.log(intToRoman(3999))
console.log(intToRoman(3))
console.log(intToRoman(58))

