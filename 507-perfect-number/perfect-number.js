/**
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function(num) {
    if(num === 1) return false;
    let sum = 1;
    const sqrt = Math.floor(Math.sqrt(num));

     for(let i =2; i <= sqrt; i++) {
        if(num % i === 0 ) sum = sum + i + num/i;
    }
    return sum === num;
};