/* Write a JavaScript function to get the month name from a
particular date. Go to the editor
Test Data :
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014"))); 
Output :
"October"
"November" */

let monthName = function(date){
    monthList = [ "January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December" ];
    return monthList[date.getMonth()];
    };
console.log(monthName(new Date("10/11/2009")));
console.log(monthName(new Date("11/13/2014")));
    