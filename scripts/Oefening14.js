function printHelloWorld() { //1
console.log("Hello, world!");
}
printHelloWorld();

function doubleNumber(num) { //2
return num * 2;
}
console.log(doubleNumber(7));

function sumTwoNumbers(a, b) { //3
return a + b;
}
console.log(sumTwoNumbers(14, 6));

function toUpperCase(str) { //4
console.log(str.toUpperCase());
}
toUpperCase("string");

function isEven(num) { //5
return num % 2 === 0;
}
console.log(isEven(12))

function sumArray(arr) { //6
return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));  //idk

function getCurrentDateTime() { //7
return new Date();  //Date is een object
}
console.log(getCurrentDateTime());  //werlt gwm wpw

function calculateAverage(x, y, z) { //8
return (x + y + z) / 3;
}
console.log(2, 4, 6);

function getFirstAndLast(arr) { //9
return [arr[0], arr[arr.length - 1]];
//arr[0];
//arr[arr.length - 1];
}
const firstAndLast = getFirstAndLast(["a", "b", "c"]); 
console.log(firstAndLast[0]); 
console.log(firstAndLast[1]);   //Pakt alleen vanaf 1e, dus b en c
//console.log(getFirstAndLast([1, 2, 3, 4]))

function greet(name, greeting) { //10
return `${greeting}, ${name}!`;
}
console.log(greet ("Michael", "Wsg"));