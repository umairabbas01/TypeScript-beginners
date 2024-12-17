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
// console.log("num1: ", num1);
// console.log("num: ", num);

 
let chacter: string = 'Cod with hawachi';
// console.log(chacter);


let isAvaliable: boolean = true;
let val: undefined = undefined;
let value: null =null;


let obj: {name: string, age: number} = {
    name: 'Abc',
    age: 10
};

obj = {...obj, age:24}   // ... it used for upper object

// console.log(obj);


// let valArray: [number, string]= [1, 'a']
// console.log(valArray);


// any type
let numVal: any
numVal = 1;
numVal = 'a';


function testAnyType(val: any){
    // console.log(val);   
}




let numArray:number[] = [1,2,3,4];
let charArary: string[] = ['a', 'b', 'c'];
// charArary.forEach(val => val.includes('a'))
// numArray.forEach(val => val.toFixed(2))


//tuples
let arr: [number, string] = [1, 'Alice'];
let coordinates3D: [number,number,number]= [10,20,30];  // (x,y,z) axis
// localhost:4200?name=Technks$phone=1234567890

let userData: [string, number, undefined] = ['Hawachi', 123456780, undefined];
let user;
// console.log(userData);

let response: [number,string]=[200, 'sucess']
response.push(0);   // drawback in ts
console.log('response', response);

// enum