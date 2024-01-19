/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let count = new Map()

for(let i = 0; i<nums.length; i++){


    if (count.has(nums[i])){
        return true
    }
    count.set(nums[i])

}
return false
};