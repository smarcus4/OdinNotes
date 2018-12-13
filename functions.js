console.log("ADD SEVEN RESULTS");
function addSeven(num){
    return num+7;
}


console.log(addSeven(9));
console.log(addSeven(12));
console.log(addSeven(20));

console.log("MULTIPLICATION RESULTS");
let multiplyNums = (num1, num2) => num1*num2;

console.log(multiplyNums(5,6));
console.log(multiplyNums(8,5));
console.log(multiplyNums(11,6));


console.log("CAPITLIZATION RESULTS");

let capitalizeStrings = (word) =>{
   let newWord= word.substr(0,1).toUpperCase();
   let secondPart = word.substr(1).toLowerCase();
    return newWord+secondPart;
}


console.log(capitalizeStrings("TEST"));
console.log(capitalizeStrings("Samuel"));
console.log(capitalizeStrings("BeTh"));
console.log(capitalizeStrings("lololol"));


console.log("LAST LETTER RESULTS");
function lastLetter(word){
    return word.slice(-1);
}

console.log(lastLetter("Test"));
console.log(lastLetter("Samuel"));
console.log(lastLetter("Inside"));
console.log(lastLetter("Climb"));