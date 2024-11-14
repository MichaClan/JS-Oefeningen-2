function printHelloWorld() { //1
console.log("Hello, world!");
}
printHelloWorld();

function doubleNumber(num) { //2
return num * 2;
}
let num = 7;  //Num waarde
console.log(doubleNumber(num));

function sumTwoNumbers(a, b) { //3
return a + b;
}
let a = 14;
let b = 6;
console.log(sumTwoNumbers(a, b));

function toUpperCase(str) { //4
console.log(str.toUpperCase());
}
let str = "Let string";
toUpperCase(str);

function isEven(num) { //5
return num % 2 === 0;
}
console.log(isEven(num))

function sumArray(arr) { //6
return arr.reduce((acc, val) => acc + val, 0);
}
let acc = 10;
let val = 20;
console.log(sumArray(arr));

function getCurrentDateTime() { //7
return new Date();
}

function calculateAverage(x, y, z) { //8
return (x + y + z) / 3;
}

function getFirstAndLast(arr) { //9
return [arr[0], arr[arr.length - 1]];
}

function greet(name, greeting) { //10
return `${greeting}, ${name}!`;
}
