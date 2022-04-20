/* Create a function Compute the sum of the rounded numbers in an
array.
Test data:
const numbers = [15.5, 2.3, 1.1, 4.7];
output=24
use reduce */

function sumRound(total, num){
    return total + Math.round(num);
}   

const array = [15.5, 2.3, 1.1, 4.7];
console.log(array.reduce(sumRound, 0));




