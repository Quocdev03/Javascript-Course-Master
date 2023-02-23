// function hàm
// Khai báo funtion
// Cú pháp (Syntax): function fucntionName(parameters, parameters, ...) {
// Your code
//}
// Parameters: Tham số
// Đề bài là viết hàm tính tổng 2 số a và b
function sum(a = 0, b = 0) {
   // console.log("I it Worked!")
   const total = a + b;
   return total;
   // console.log(a, b)
   // return a + b;
   // return
   // return value
   // Không có return thì kết quả hàm sẽ trả về undefined
}
// function sum(parameter = default value) {}
// sum() : invoke function
console.log(sum(500, 1000));
// invoke function sum(parameter) Đối số
// Lưu function vào 1 biến rồi gọi sau
function add(a = 0, b = 0) {
   console.log(a + b)
   return a + b;
}
// add(5,1000)
const sum2 = add; // Gán function vào biến sum 2
// sum2(300, 400)
// Tham số là 1 function
// Tính trung bình của a và b -> ( a + b ) / 2
// fn: function
function average(a, b, fn) {
   const total = fn(a, b);
   return total / 2
}
let result = average(200, 300, sum2)
console.log(`Result: ${result}`)
// Function declaration
// Anonymous function ( Function Expression)
// Không bị hoisting
const logName = function () {
   console.log("Your Name!")
}
logName();
// IIFE -> Imediately Invoked Function Expression
(function () {
   console.log("This id IIFE Function");
})();
// Scope (Phạm vi)
// Global Scope, function scope
let myName = "Evondev" // Global Scope
function logYourName() {
   let myName2 = "Quốc" // Function Scope
   console.log(myName2)
}
logYourName();
// Block scope 
// var message;
// let message;
if (2 > 1) {
   // block scope
   // let message = "Hello Evondev";
   // const message = "Hello Evondev";
   // Global Scope
   // Hoisted
   // message = "Hello Quoc";
}
// alert(message)
// alert(message)
// Closure
// Lexical Scope
let aNewName = "Evondev"; // Global Scope
function sayHello() {
   let message = "Hi"; //block scope
   console.log(`${message}: ${aNewName}`);
}
// sayHello();

// Closure
// Function con có thể truy xuất scope của function cha
// parent funciton
// Closure được tạo mỗi khi function được tạo
// function sayHello2() {
//    let message = "Hi";
//    // inner function
//    function sayHi() {
//       console.log(message)
//    }
//    return sayHi;
// }
// let hello = sayHello2();
// hello();
function sayHello3(message) {
   return function hiYourName(name) {
      console.log(`${message}${name}`)
   }
}
let hello = sayHello3("Wellcome To javascript");
hello("Closure")
// Wellcome To Javascript Closure

function anotherFunction() {
   let otherMessage = "hello";
   function sayHi() {
      console.log(otherMessage);
   }
   return sayHi;
}
let callFunc = anotherFunction(); // otherMessage is no longer accsessible
callFunc(); // hello

