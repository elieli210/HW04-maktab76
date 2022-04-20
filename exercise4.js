/* Write a JavaScript function to remove. 'null', '0', '""',
'false', 'undefined' and 'NaN' values from an array. */



function removeItems(inputArr) {
    let array = inputArr.filter(Boolean);
    return array;
    }
let firstArray = [null, 5, 0, "Merry", "", 2, false, undefined, NaN]; //===>[5,'Merry',2]
let truthyArray = removeItems(firstArray);
console.log(truthyArray);





// function removeItems(array){
//     let arr=[];
//     for(let i=0; i<array.length; i++){
//         if(array[i]===null || isNaN(array[i])==false || array[i]===0 || array[i]===false || array[i]==="" || array[i]===undefined )
//             continue;
//         else 
//             arr.push(array[i]);
//     }
//     return arr;
// }

// let array = [0,2,4,false,"merry",67,"","6Eli",0/0,undefined,null];  /// ==> [2, 4, 'merry', 67,'Eli']
// let result = removeItems(array);
// console.log(result);