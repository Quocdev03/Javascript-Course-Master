// 1. Cho 1 mảng nhiều giá trị [1,100,false,null,"evondev","",undefined,"Javascript",[1,2,3]]. Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là 0 null undefine false "" NaN.
// Boolean
// Built-in object
// const array = [1, 100, false, null, "evondev", "", undefined, "Javascript", [1, 2, 3], NaN];
// const filterFalsy = array.filter((item) => Boolean(item));
// console.log(filterFalsy);

// 2. Cho 1 mảng phức tạp [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]]. Và kết quả mong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90]
// const complexArray = [[1, 2, 3, [false, null]], [1, 5, 6, ["javascript"]], [888, 666, [90]]];
// // flat (number) -> số cấp của mảng
// const result = complexArray.flat(3);
// console.log(result);

// 3. Đảo ngược số nguyên. Ví dụ 1234 -> 4321, -567 -> -765
// Math.sign(123) -> 1
// Nath.sign(1123) -> -1
// function reverseNumber(number) {
//    const value = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
//    const result = value;
//    return result;
// }
// console.log(reverseNumber(1234));
// console.log(reverseNumber(-1234));

// 4. Viết chương trình có tên là fizzBuzz với đầu vào là 1 tài nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu số đó chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho cả 2 và 3 thì in ra "FizzBuzz".
// function fizzBuzz(number) {
//    number = prompt("Nhap vao so n: ");
//    if (isNaN(number)) return false;
//    for (let i = 1; i <= number; i++) {
//       if (i % 2 === 0 && i % 3 === 0) {
//          console.log("FizzBuzz");
//       } else if (i % 2 === 0) {
//          console.log("Fizz");
//       } else if (i % 3 === 0) {
//          console.log("Buzz");
//       }
//    }
// }
// fizzBuzz();
// + - * / %

// // 5. Cho 1 chuỗi bất kỳ, đếm só lượng kí tự `vowels` có trong chuỗi.
// // vowels là các kí tự u e o a i
// // ví dụ "evondev" -> 3
// function countVowels(string) {
//    string = prompt("Nhập vào 1 chuỗi");
//    if (string.length === 0) return null;
//    let count = 0;
//    const character = "ueoai"
//    for (let check of string.toLowerCase()) {
//       if (character.includes(check)) count += 1;
//    }
//    return count;
// }
// console.log(countVowels());

// 6. Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. Viết một function trả về một mảng với các giá trị unique ( Duy nhất ). Kết quả ở trên sẽ là [1,2,3,5,7,6];
// function unique(arr) {
//    let result = [];
//    if (!Array.isArray(arr)) return result;
//    for (let i = 0; i < arr.length; i++) {
//       if (!result.includes(arr[i])) {
//          result.push(arr[i]);
//       }
//    }
//    return result;
// }
// console.log(unique([1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6]));
// console.log(unique("quwh"));

// 7. Viết 1 function xử lý từ 1 mảng lớn thành nhiều mảng con dựa vào 1 số nguyên đầu vào. Ví dụ ([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]]
function splitArray(array, number) {
   let result = [];
   let index = 0;
   while (index < array.length) {
      result.push(array.slice(index, number + index))
      index += number;
   }
   return result;
}
console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
//
let myArray = [
   [1, 2],
   [3, 4],
   [5, 6]
];
for (let i = 0; i < myArray.length; i++) {
   for (let j = 0; j < myArray[i].length; j++) {
      console.log(myArray[i][j]);
   }
}