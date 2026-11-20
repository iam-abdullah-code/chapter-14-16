// chapter 14-16

// question 1


let StudentName = [];

StudentName = ["Abdullah", "Ali"];
console.log(StudentName);


// question 2

let Studentname = new Array();

console.log(Studentname);


// question 3


let str = ["hello", "how", "are", "you"];

console.log(str);


// question 4 

let num = [12, 4, 5, 6, 7, 89];

console.log(num);



// question 5


let boolean = [true, false];

console.log(boolean);


// question 6

let array = [];

array = ["Abdullah", 67, 21, true, undefined, null, 89n,];

console.log(array);


// question 7

let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M", "M", "Phil", "PhD"];

console.log(education[0]);
console.log(education[1]);
console.log(education[2]);
console.log(education[3]);
console.log(education[4]);
console.log(education[5]);
console.log(education[6]);
console.log(education[7]);
console.log(education[8]);
console.log(education[9]);



// question 8

let StudentNamE = [["Ali", "Ahmed", "Abdullah"], [420, 450, 360]];


let TotalMarks = 500;

console.log("Ali -->", StudentNamE[1][0] / TotalMarks * 100);

console.log("Ahmed -->", StudentNamE[1][1] / TotalMarks * 100);

console.log("Abdullah -->", StudentNamE[1][2] / TotalMarks * 100);


// question 9

let colors = ["Red", "Green", "Blue"];
console.log("Initial Colors: " + colors + "<br>");

let addStart = prompt("Which color do you want to add to the beginning?");
colors.unshift(addStart);
console.log("After adding at beginning: " + colors + "<br>");

let addEnd = prompt("Which color do you want to add to the end?");
colors.push(addEnd);
console.log("After adding at end: " + colors + "<br>");

colors.unshift("Yellow", "Purple");
console.log("After adding two more at beginning: " + colors + "<br>");

colors.shift();
console.log("After deleting first color: " + colors + "<br>");

colors.pop();
console.log("After deleting last color: " + colors + "<br>");

let addIndex = Number(prompt("At which index do you want to add a color?"));
let indexColorName = prompt("Enter the color name to add:");
colors.splice(addIndex, 0, indexColorName);
console.log("After adding at index " + addIndex + ": " + colors + "<br>");

let delIndex = Number(prompt("At which index do you want to delete color(s)?"));
let delCount = Number(prompt("How many colors do you want to delete?"));
colors.splice(delIndex, delCount);
console.log("After deleting from index " + delIndex + ": " + colors + "<br>");


// question 10

let Mixedfruits = ["banana", "mango", "orange", "graps", "pinaple", "apple"];

Mixedfruits.sort()

console.log(Mixedfruits.sort());

// question 11

let cityName = ["karachi", "lahore", "multan", "islamabad", "queta"]

let copycity = cityName.slice(0, 3)


console.log(copycity);


// question 12

let words = ["This", "Is", "My", "Car"];

console.log(words);

console.log(words.join(" "));


// question 13


let fifoArray = [];

fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("printer");
fifoArray.push("monitor");

console.log("Stored values:", fifoArray);

console.log("Out 1:", fifoArray.shift());
console.log("Out 2:", fifoArray.shift());
console.log("Out 3:", fifoArray.shift());
console.log("Out 4:", fifoArray.shift());

console.log("Remaining array:", fifoArray);


// question 14

let lifoArray = [];

lifoArray.push("keyboard");
lifoArray.push("mouse");
lifoArray.push("printer");
lifoArray.push("monitor");

console.log("Stored values:", lifoArray);

console.log("Out 1:", lifoArray.pop());
console.log("Out 2:", lifoArray.pop());
console.log("Out 3:", lifoArray.pop());
console.log("Out 4:", lifoArray.pop());

console.log("Remaining array:", lifoArray);

// question 14

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

console.log("<select>");
console.log("  <option>" + manufacturers[0] + "</option>");
console.log("  <option>" + manufacturers[1] + "</option>");
console.log("  <option>" + manufacturers[2] + "</option>");
console.log("  <option>" + manufacturers[3] + "</option>");
console.log("  <option>" + manufacturers[4] + "</option>");
console.log("  <option>" + manufacturers[5] + "</option>");
console.log("</select>");
