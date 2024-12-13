// let a1: number = 1;
// a1 = 20;  





// function add1(a: number,b: number): number {
//   return a + b; // type check
// }
// add1(1,2)

// How TypeScript work?
 
//  Transpilation
//     .ts ===> complile ===> .js


//  Why TypeScript Compiles to JavaScript
// 1. JavaScript is the language that broswer and Node.js understand natively.
// 2. Broswer can not directly execute TypeScript code, so it needs to be converted into JavaScript. This is called Transpilation.

// 3. Key Reasons:
    // Javascript Compatibility
        // Why?: TypeScript is a superset of javascript, meaning it adds extra features (like atatic typing) on top of JavaScript's syntax. However, under the hood, it's still Javascript.
        // Example:
                // let message: string = "Hello, World!";
                // console.log(message);
                
    // Cross-Plarform Execution
            // Why?: JavaScript runs in every nroswer and on many plateformns like Node.js. So, converting into JavaScript ensuries the code will run on all these platforms without any extra dependencies.

            // Example: A web application developed with TypeScript will be converted to JavaScript so that it can e run on all broswers, no  matter if they support TypeScript or not.

    //  Leveraging JavaScript Libraries
          // Why?: Many libraries, like React, jQuery, or D3.js, are written in Javascript. By compiling to JavaScript, TypeScript can easily integrate with these libraries without any special changes.

          // Example:
                    // TypeScript function using jQuery
                    // $('#myButton').on('click',function(){ console.log('Button clicked!');
                    // })
    // Backward Compatibility
        // Why?: TypeScript supports modern Javascript features (ES5+) even when older broswers might not. During complation, TypeScript converts these modern features into a form that older broswers can understand.
              // example: TypeScript with Es6 arrow function:

              // const greet = () => console.log("Hello, world");

              // Compiled JavaScript for older broswer (using a regular function):

              //  var greet = function(){
              // console.log("Hello,world")};

    // Type Safety wothout Runtime Changes
            // Why?: TypeScript's static types help develiops catch errors during development catch errors during development but don't affect the performance of the running code. The types are stripped away in the final JavaScript, So there's no overhead when the program runs.
            // Example:
                    // TypeScript checking during development:
                    // let age: numbers = '25'; // ErrorsL '25' is not a number


                    // Conclsion:
                                //  TypeScrpit compiles to JavaScript to ensures the code can run on any enviroment that supports JavaScript, maintain compability with existing JavaScript libraries static typing and modern features without sacrificing runtime performance.
                                