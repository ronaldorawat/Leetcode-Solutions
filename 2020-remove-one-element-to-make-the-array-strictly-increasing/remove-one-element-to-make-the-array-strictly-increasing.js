/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let count = 0

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            if (nums[i] <= nums[i-2]) nums[i] = nums[i-1]
            count ++
        }
    }

    return count <= 1
};