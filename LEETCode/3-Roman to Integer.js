// solution 1

var romanToInt = function (s) {
    let total = 0;
    let mines = 0;
    const objRoman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    const RomanNumbers = [...s]
        .map((item) => objRoman[item])
        .map((item, index, array) => {
            if (item >= array[index + 1] || index == array.length - 1) {
                return (total = total + item);
            } else {
                return (mines = mines + item);
            }
            t;
        });

    return total - mines;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
