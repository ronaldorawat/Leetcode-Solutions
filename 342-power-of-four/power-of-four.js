/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
     if (n === 0) return false; // Check if the number is zero

    const size = 32; // Get the number of bits in an integer (assuming 32-bit integer)
    let first = 0; // Counter for the number of set bits

    for (let i = 0; i < size; ++i) {
        if (n & (1 << i)) { // Check if the bit at position i is set
            if (i % 2 !== 0) { // Check if the position is odd
                return false; // If set bit is in an odd position, return false
            }

            ++first; // Increment the count of set bits

            if (first !== 1) { // Ensure there is only one set bit
                return false; // If more than one set bit, return false
            }
        }
    }

    return true; 
};