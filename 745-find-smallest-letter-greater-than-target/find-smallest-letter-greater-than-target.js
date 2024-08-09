/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let set = new Set(letters)
    for(let c of set){
        if(c>target) return c
    }
    return letters[0]
};