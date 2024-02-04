/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
         if(nums.length<3) return Math.max(...nums);
    let u = new Set(nums)
    if(u.size<3) return Math.max(...u);
    
    for(let i=0;i<2;i++){
        u.delete(Math.max(...u))
    }
    
    return Math.max(...u);
};