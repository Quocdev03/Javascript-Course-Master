// 1. sự khác nhau giữa i++ và ++i
let i = 1;
let j = i++;
console.log(i, j); // 2, 1
let a = 1;
let b = ++a;
console.log(a, b);
// 2. lưu ý khi return function
function total(x, y) {
   return; // undefined
   x + y;
}
// 3. 2 cách chuyển đổi dữ liệu mới
const string = "";
console.log(parseInt(string));
console.log(parseFloat(string));
console.log(Number(string));
console.log(+string);
// chuyển sang boolean
console.log(!!string);
// 4. arguments
function number(a, b, c) {
   // if (!arguments.length) console.log("please insert your arguments");
   console.log(typeof arguments);
   const args = Array.from(arguments);
   const args2 = [...arguments];
   console.log(args2);
   return a + b + c;
}
number(1, 2, 3);
// 5. closure in loop
// for (let z = 1; z < 5; z++) {
//    setTimeout(function () {
//       console.log(z);
//    }, 1000);
// }
// let -> not hoisting
// let -> scope sẽ thay đổi sau mỗi lần lặp
// var -> hoisting
// scope của var sau mỗi vòng lặp nó không thay đổi
// 6. sự khác nhau giữa localStorage và sessionStorage
// localstorage.getItem("abc");
// sessionStorage.getItem("abc");
// 7. Những trường hợp không nên sử dụng arrow function
// 7.1 Event handler
const input = document.querySelector(".input");
input.addEventListener("keyup", () => {
   console.log(this.value);
});
// 7.2 Object
const students = {
   counter: 0,
   increment: () => {
      return ++this.counter;
   }
}
console.log(students.increment());
// 283