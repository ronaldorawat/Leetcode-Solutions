/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let rev = str.split("").reverse().join("");
    return (str == rev) ? true : false;
};