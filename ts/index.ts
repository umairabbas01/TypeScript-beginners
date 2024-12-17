// let a2: number = 1; // Declare variable with type
// a2 =10 ;

// function add3(a: number, b: number): number { // Type annotations
//     return a + b;
// }

// const y = (add3(1, a2)); // Logs 
// a2 =y;
// console.log(a2);

// function greeting() {
//   return console.log("Hello, world");
// }
// console.log("Hi");
// console.log("Hello");




// Basic types
let num: number = 1234_567_678;
let num1: bigint = 1235n;
console.log("num1: ", num1);
console.log("num: ", num);

 
let chacter: string = 'Cod with hawachi';
console.log(chacter);

let numArray:number[] = [1,2,3,4];
let charArary: string[] = ['a', 'b', 'c']
let isAvaliable: boolean = true;
let val: undefined = undefined;
let value: null =null;


let obj: {name: string, age: number} = {
    name: 'Abc',
    age: 10
};

let obj1 = {...obj}   // ... it used for upper object

console.log(obj);
