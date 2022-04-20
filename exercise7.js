/* Write a JavaScript function to get the current date. Go to the
editor
Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014" */

function curday(date){

}
function curday(separator){
    let date = new Date("11/13/2014")
    let strDay = date.getDate();
    let strMonth = date.getMonth()+1;
    let strYear = date.getFullYear();
    let strDate = strMonth + separator+ strDay+ separator+ strYear;
        return strDate;
    }
console.log(curday( '/'));
console.log(curday( '-'));

