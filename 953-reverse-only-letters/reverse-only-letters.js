/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
      s = s.split('');
    let start = 0;
    let end = s.length - 1;
    const regex = /[a-zA-Z]/g; 
    while (start < end) {
        if (s[start].match(regex) === null) { // not a letter at the start, continue without swapping
            start++; 
            continue;
        }
        if (s[end].match(regex) === null) { // not a letter at the end, continue without swapping
            end--; 
            continue;
        }
        let tmp = s[start]; // we end up here when there are letters at 'start' and 'end' so we just swap them
        s[start] = s[end];
        s[end] = tmp;
        start++;
        end--;
    }
    
    return s.join('');
};