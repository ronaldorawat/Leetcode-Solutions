/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = new Map();
    for(let i of nums) {
        if(hash.has(i)) {
            hash.delete(i);
        }
        else {
            hash.set(i, i);
        }
    }
    let res;
    hash.forEach (function(value, key) { res = key});
    return res;
};