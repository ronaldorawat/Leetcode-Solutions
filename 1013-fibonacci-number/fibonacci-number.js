/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const sqrt5 = Math.sqrt(5);
    const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);
    return Math.round(fibN / sqrt5);
};