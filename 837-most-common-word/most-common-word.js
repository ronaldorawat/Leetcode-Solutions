/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    // convert to lower case 
    // split by " " or ","
    // replace special characters with empty string
    const paragraphArr = paragraph.toLowerCase().split(/[, ]+/)
        .map((word) => word.replace(/[^A-Za-z]/g, ''));
    const map = new Map();
    const set = new Set(banned);
    for (const word of paragraphArr) {
        if (!set.has(word))
            map.set(word, (map.get(word) || 0) + 1);

    }
    const max = Math.max(...map.values());
    const key = [...map].find((item) => item[1] === max);
    return key[0];
};