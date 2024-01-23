/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
      return -nums.reduce((acc,num,i)=> acc+num-i-1,0);
};