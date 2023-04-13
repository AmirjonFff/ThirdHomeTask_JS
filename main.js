// // 1. Global scope
// var number1 = 5; //Global scope
// let number2 = 10; //Global scope
// const number3 = 15; //Global scope
// //function name Global scope
// function name() { 
//     console.log("Tajikistan");
// }

// // 2. Function scope
// function getSumm(a,b) { //{}-Function scope
//     let number = 10;
//     var number2 = 2; //function scope
//     return (a * b * number) / number2;    
// }

// console.log(number2);//result-10
// //console.log(number);//result-ReferenceError: number is not defined

// console.log(getSumm(1,2));//result-10
// number2 = 3;
// console.log(getSumm(1,2));//result-10

// function getName(name1, name2) { //name1, name2 - function scope
//     const ollName = "Anvar"; //function scope
//     return `${ollName}, ${name1} and ${name2} is frends`;
// }
// //console.log(ollName); //result-ReferenceError: ollName is not defined
//  console.log(getName("Amir", "Daler"));
// //console.log(name1); //result-ReferenceError: name1 is not defined

// // 3. Block scope

// if (true) { //{}-Block scope
//     let num1 = 5; 
//     const num2 = 10;//num1 и num2 работает до 38 страку
//     console.log(num1*num2);

// }

// //console.log(num1); //result-ReferenceError: num1 is not defined

// let age = 21;
// for (let i = 1; i <= age; i++) {
//     var ageNew = 2023; //ageNew по област берун аз блок хам кор мекунад
//    // console.log(ageNew);
// }

// console.log(ageNew);//result-2023

// 2. Hoisting in JS
console.log(test); //result-undefined;
console.log(getSummTwo(5,10));//result-15;
var test = 20;

function getSummTwo(a, b) {
    return a+b;
}

// //3. Temporal Dead Zone in JS

// console.log(numTem1);//result-ReferenceError: Cannot access 'numTem1' before initialization;
// console.log(numTem2); //ReferenceError: Cannot access 'numTem2' before initialization
// console.log(autoSumm(20,10));//ReferenceError: Cannot access 'autoSumm' before initialization

// const numTem1 = 23;
// let numTem2 = 23;
// let autoSumm = (a,b) => a+b;

// // 4. Recursion in JS

// function factorial(n) {
//     if(n===1){
//         return 1;
//     }
//     return n * factorial(n-1);
// }

// console.log(factorial(5));

// function getSummN(n) {
//     if(n===1){
//         return 1;
//     }
//     return n + factorial(n-1);
// }

// console.log(getSummN(15));

// 5. Closure in JS

function Domen(dom) {
    return function comp(str) {
        return `${str}.${dom}`;
    }
}

let compani = Domen("com");
console.log(compani("google"));//result-google.com
console.log(compani("yandex"));//result-yandex.com






