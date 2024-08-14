/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
      let weekDay = ["Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    if (month < 3) {
        month += 12;
        year -= 1;
    }
    
    let k = year%100
    let j = Math.floor(year/100)
    let q =day
    let m= month;
    
    return weekDay[calculate(q,k,j,m)]

function calculate(q,k,j,m){
    let h = q+Math.floor(13*(m+1)/5)+k+Math.floor(k/4)+Math.floor(j/4)+5*j
    return h%7
}
};