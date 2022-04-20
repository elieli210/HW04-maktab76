/* Write a JavaScript program to compute the sum of an array of
integers. Go to the editor
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 */

function sumElementArr(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum
}
let array = [1, 2, 3, 4, 5, 6];
let result = sumElementArr(array);
console.log(result);