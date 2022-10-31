// solution 1

var isPalindrome = function (x) {
    const convertArray = [...x.toString()];
    return x < 0
        ? false
        : convertArray.every((item, index) => {
              return index <= Math.floor(convertArray.length) ? item === convertArray[convertArray.length - 1 - index] : false;
          });
};

console.log(isPalindrome(122));
console.log(isPalindrome(121));
