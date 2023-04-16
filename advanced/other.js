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
// number(1, 2, 3);
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
// const input = document.querySelector(".input");
// input.addEventListener("keyup", function () {
//    console.log(this.value);
// });
// 7.2 Object
const students = {
   counter: 0,
   increment: () => {
      return ++this.counter;
   }
}
// console.log(students.increment());
// 8. Đệ quy (rcursive): Gọi lại chính nó
function countDown(number) {
   let other = number - 1;
   if (other > 3) {
      countDown(other);
   }
   // if (condition) stop recursive else run recursive
}
// countDown(3);
// Maximum call stack size execeeeded
const complexArray = [
   [1, 2, 3],
   [3, 4, 5],
   9,
   [
      [2, 3],
      [2, 3, 5, [9999]],
      [1, 2]
   ],
];
// [1,2,3,4,5,2,4,2,3,5,1,2];
// console.log(complexArray.flat(Infinity));
// a [1,2,3] b [4,5,6] -> [1,2,3,4,5,6] -> a.concat(b);
// a [1,2,3] b 4,5,6 -> [1,2,3,4,5,6] -> a;
// [1,2,3].slice()
function flatArray(arr, deep) {
   const reasult = deep > 0 ?
      arr.reduce((a, val) => a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val),
         [],
      )
      : arr.slice();
   return reasult;
}
// console.log(flatArray(complexArray, Infinity));
/*
[].concat([1,2,3])
[1,2,3].concat([3,4,5])
const complexArray = [
   [1, 2, 3],
   [3, 4, 5],
   9,
   [
      [2, 3],
      [2, 3, 5, [9999]],
      [1, 2]
   ],
];
*/
// 9. Set
const mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add("Evondev");
console.log(mySet);
mySet.has(1); // true
mySet.delete("evondev");
console.log(mySet);
mySet.clear();
console.log(mySet.size);
// 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 1, 5, 7, 9];
// -> [1,2,3,4,5,6,7,8,9]
// array to set
const mySet2 = new Set(arr);
console.log(mySet2);
// for of
for (let item of arr) {
   console.log(`item: ${item}`);
}
// set to array
const newArr = Array.from(mySet2);
console.log(newArr);
const newArr2 = [...mySet2];
console.log(newArr2);

let result = [];
for (let index = 0; index < arr.length; index++) {
   const element = arr[index];
   if (!result.includes(element)) {
      result.push(element);
   } else {
      console.log("Duplicate value", element);
   }
}

console.log(result);
// 10. Debugger in vscode
for (let z = 1; z < 5; z++) {
   setTimeout(function () {
      console.log(z);
   }, 1000);
}