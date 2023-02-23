// By value vs by referrences
// By value -> Giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true
// By Referrences -> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false
// JSON: Javascript Object Notation
/*
{
   "key":value,
   "key":value,
   "key":value,
   "key":value,
   "key":value,
}
*/
// JSON.stringfy(value) -> convert giá trị dưới dạng json string
// toString()
//[1,2,3].toString() -> "1,2,3"
//[1,2,3].JSON.stringfy([1,2,3]) -> "[1,2,3]"
// [1,2,3]
// JSON.parse("[1,2,3]") -> [1,2,3]
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str)
// clone
const students = ["a", "b", "c", "d", "e"];
// students.pop(); // Xoá phần tử cuối cùng
// 1. Sử dụng phương thức slice()
const sliceStudents = students.slice();
console.log(sliceStudents);
// 2/ Spread Operater [...array]
const spreadStudents = [...students];
console.log(spreadStudents);
// [1,2] [3,4] [5,6] -> [1,2,3,4,5,6]
// concat
// array1.concat(array2,array3,arrayN);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
// Spread Operator
// [...array]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);
// Desctructuring array
// Lấy giá trị đầu tiên
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const a = toys[0];
const b = toys[1];
const c = toys[2];
console.log(a, b, c);
// const [indexname,indexname,indexname] = toys;
const [aa, ba, ca] = toys;
console.log(aa, ba, ca);
// rest parameter ...
// Lấy phần còn lại của mang
const [ball, ...rest] = toys;
console.log(rest);
function demo(a, ...rest) {
   console.log(a, rest);
}
demo(1, 2, 3, 4, 5)
// a là 1 từ 2 đến 5 là rest
