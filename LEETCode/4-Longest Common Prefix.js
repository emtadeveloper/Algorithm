// solution 1

var longestCommonPrefix = function (strs) {
    let perfix = strs[0] || "";
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < perfix.length; j++) {
            if (perfix[j] !== strs[i][j]) {
                perfix = perfix.slice(0, j);
                break;
            }
        }
    }
    return perfix;
};

// solution 2

var longestCommonPrefix = function (strs) {
    const perfix = strs[0].split("");
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < perfix.length; j++) {
            if (perfix[j] !== strs[i][j]) {
                perfix.splice(j);
                break;
            }
        }
    }
    return perfix.join("");
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["ab"]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
