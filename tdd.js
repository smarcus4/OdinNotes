// const helloWorld = function() {
//     return 'Hello, World!'
//   }
  
//   module.exports = helloWorld

// const repeatString = function(word, repeat) {

//     // let i=0;
//     let words = ""
//     // while(i<repeat){
        
//     //     words+=word;
//     //     i++;
        
//     if(repeat>-1){
//         for(let i=0; i<repeat;i++){

//             words+=word;
//         }
//         return words;


//     }else{
//         return "ERROR";
//     }
//     // }
 

// }



// module.exports = repeatString

// const reverseString = function(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("Hello Sam"));

// module.exports = reverseString

// const removeFromArray = function(theArray, removedItem){
// return theArray + removedItem;


// }

// console.log(removeFromArray([1,2,3], 6));

// module.exports = removeFromArray

// var removeFromArray = function(...args) {
//     const array = args[0]
//     return array.filter(val => !args.includes(val))
//   }
//   console.log(removeFromArray([1,2,3],"tacos",7, 3))
//   module.exports = removeFromArray










// function removeArray(...stuffHere){
//     const array = stuffHere[0];
//     console.log(array);
//     return array.filter(function(cool){ 
//      return !stuffHere.includes(cool)
        
//     })
// //    return newArr;



// }

// console.log(removeArray([1,2,3,4],2,3,4));



// const sumAll = function(num1,num2) {
//     let sum = 0;
//     if(typeof num1 !== "number" || typeof num2 !== "number"){
//         return"ERROR";
//     }else if(num1<0 || num2 <0){
//         return "ERROR";
//     }else if(num1>num2){
//         let temp = num1;
//         num1=num2;
//         num2=temp;
//     }
    
//     for(let i=num1; i<=num2;i++){
//         sum+= i;
        
//     }
//     return sum; 
    
// }

// // console.log(sumAll(1,[6,2]));

// module.exports = sumAll



// const leapYears = function(year) {
//     if(year%100==0){
//         if(year%400==0){
//             return true;
//         }else{
//             return false;
//         }
//     }else if(year%4==0){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(leapYears(1600));
// module.exports = leapYears



const ftoc = function(temp) {
   

    return finalTemp =   +((temp -32) * (5/9)).toFixed(1);

}

const ctof = function(temp) {

    return finalTemp = +((temp * (9/5)) +32).toFixed(1);

}

module.exports = {
  ftoc,
  ctof
}





