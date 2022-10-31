// resolve 1

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

var strStr = function(haystack, needle) {
    return needle.length == 0 ? 0 : haystack.indexOf(needle)
};

console.log(strStr("hello","ll"))
console.log(strStr("aaaaa","bba"))
