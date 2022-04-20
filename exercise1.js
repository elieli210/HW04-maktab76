/* Write a JavaScript program to compute the exponent of a number
PS:use Recursion */

function exponent(base , power){
    if(power == 0) 
        return 1;
    else 
        return  base * exponent(base, power-1)
}

let result = exponent(3,4);
console.log(result);