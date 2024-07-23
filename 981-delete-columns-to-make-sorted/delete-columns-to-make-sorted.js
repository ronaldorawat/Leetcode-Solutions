/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
     let count = 0;
    for (let index = 0; index < strs[0].length; index++) {
        let store = null;
        for (const iterator of strs) {
            if (store === null) {
                store = iterator[index];
            } else if (!(store <= iterator[index])) {
                count++;
                break;
            } else {
                store = iterator[index];
            }
        }
    }
    return count;
};