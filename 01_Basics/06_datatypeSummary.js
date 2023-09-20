// Primitive Data Types
// 7 types : String, number, boolean, NULL, undefined, symbol, BIgInt
 
const name = "Aditya";
const num = 123;
const come = true;
const input = null;
let emailID;
let id = Symbol('$');
let bigNUmber = 1234567890n;


console.table( [typeof(name),typeof(num),typeof(come),typeof(input),typeof(emailID),typeof(id),typeof(bigNUmber),]);

// Reference (Non Primitive)
let myArray = ["I", "Love ❤️", "You"];
const myObject = {
    sName: "adit",
    sRoll: 102
}
const myFunction = function() {
    console.log("hello World !")
}

console.log(myArray);

// ------------------------------------------------------------------------------

// Primitive go in Stack & non-primitive go in heap

let instagramPage = "Code Assaulter";
let instagramId = instagramPage;
instagramId = "Aditya Mathur";

console.table([instagramPage, instagramId]);


let student1 = {
    stName: "Shashank Dixit",
    enrollmentNo: "E212220....",
    branch: "CSE"
}

let student2 = student1;

console.table ([student1,student2]);