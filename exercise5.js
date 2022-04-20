/* Write a JavaScript function to merge two arrays and remove all
duplicate elements.
Test data:
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1] */





function mergedArray(array1, array2) {
    let merge = array1
      .filter((item) => array2.indexOf(item) === -1)
      .concat(array2);
    return merge;
  }
  let firstArr = [1, 2, 3];
  let secondArr = [2, 30, 1];
  let result = mergedArray(firstArr, secondArr);
  console.log(result);                  //===> [3, 2, 30, 1]



/*let result=[];
let newArr=[];
function merge_array(array1,array2){
        for (let i= 0; i< array1.length; i++){
            for (let j = 0; j < array2.length; j++){
                if(array1[i]===array2[j])
                array1.splice(i,1)
            }
        }
        newArr=array1.concat(array2);
    return newArr
}
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
console.log(merge_array(array1, array2)); */  //===> [3, 2, 30, 1]         



// let newArr=array2.concat(array1);
//     for (let i= 0; i< newArr.length; i++){
//         for (let j = i +1; j <= newArr.length-1; j++){
//             if (newArr[i] === newArr [j])
//                 newArr.splice(j,1);
//             else continue;
    
//         }
//     }