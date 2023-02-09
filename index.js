
var source1 = [1, 10, 2, 3, 14];
var x1 = 10;

var Source2 = [2, 5, 9];
var x2 = 10;

var Source3 = [2, 3, 1, 5, 4];
var x3 = 10;

var Source3 = [2, 3, 1];
var x3 = 10;

const checkConvertArray = (arr, target) => {
  var targetArray = [];
  for (index = 0; index < arr.length; index++) {
    if (arr[index] <= target) {
      let sum = 0;
      let newArray = [];
      for (i = index; i < arr.length; i++) {
        if (sum + arr[i] <= 10) {
          sum = sum + arr[i];
          newArray.push(arr[i]);
          targetArray.push([...newArray]);
        } else {
          break;
        }
      }
      sum = 0;
      newArray = [];
    }
  }
  return [...targetArray];
};

console.log(checkConvertArray(source1, x1));
console.log(checkConvertArray(Source2, x2));
console.log(checkConvertArray(Source3, x3));