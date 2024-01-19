/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let map ={}

for(let item of sentence){
    map[item] =( map[item]  || 0) + 1
}

if(Object.keys(map).length == 26) return true;

return false ;
};