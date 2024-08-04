/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    var words = s.split(' ');

    if(pattern.length !== words.length)   return false;

    var map1 = new Map();
    var map2 = new Map();

    for(var i =0; i<pattern.length; i++) {
       var char1 = pattern[i];
       var char2 = words[i];

       if(map1.has(char1)) {
          if(map1.get(char1) !== char2) {
            return false;
         }
       } else {
        map1.set(char1,char2);
       }


       if(map2.has(char2)) {
        if(map2.get(char2) !== char1) {
            return false;
        }
       } else {
        map2.set(char2,char1);
       }
    }
    return true
};