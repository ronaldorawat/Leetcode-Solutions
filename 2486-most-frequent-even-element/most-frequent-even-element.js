/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const hashmap = new Map();
    let output;

    for(let i=0; i<nums.length; i++)
    {
        const num= nums[i];
        if(!(num%2))
        {
            const newValue = hashmap.get(num) + 1;
            hashmap.set(num, hashmap.has(num)? newValue:1);
            if(output ===undefined || newValue> hashmap.get(output)){
                output= num;
            }

            else if(hashmap.get(num)=== hashmap.get(output))
            {
                output= Math.min(num, output);
            }
        }
    }

    return output === undefined ? -1 : output;
};