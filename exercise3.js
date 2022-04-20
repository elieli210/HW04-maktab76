/* Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox */

function upperCaseStr(str){
    let newArray=[];
    let arr=str.split(" ");
    for(let i=0; i<arr.length; i++){
        newArray.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return newArray.join(" ");
}

let str = 'the quick brown fox';
console.log(upperCaseStr(str));