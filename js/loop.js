// Vòng lặp
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
for (let i = 0; i < number.length; i++) {
   body code
}
*/
// for (let i = 0; i < number.length; i++) {
//    console.log(`The index is ${i}`)
// }
/*

length: 5
i =0;
i<5 -> true
i++ -> 1
result: 0

i = 1;
1 < 5 -> true
i++ -> 2
result: 1

i=2;
2< 5 -> true
i++ -> 3
result: 2

i=3;
3 < 5 -> true
i++ -> 4
result: 3

i=4;
4< 5 -> true
i++ -> 5
result: 4

i=5;
5< 5 -> false
loop end
*/
// for (let i = 0; i < number.length; i++) {
//    console.log(`The index is ${i}`)
// }
// i++ = i = i + 1
// number[0]
// number[number.lenght -1]
// for (let i = 0; i < number.length; i++) {
//    // console.log(`The index is ${i}`);
//    // console.log(`The value ${number[i]}`);
//    // Nếu giá trị là 8 thì dùng vòng lặp
//    // console.log(`The value ${number[i]}`);
//    // if (number[i] === 8) {
//    //    break;
//    // }
//    // Nếu giá trị là 8 thì bỏ qua giá trị và vòng lặp sẽ chạy tiếp
//    if (number[i] === 8) {
//       continue;
//    }
//    console.log(`The value ${number[i]}`);
// }
// Nếu giá trị bằng 8 thì dừng vòng lặp
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < number.length; i++) {
//    if (number[i] === 8) {
//       break;
//    }
//    // console.log(`This is index in number ${number[i]}`);
// }
// Nếu giá trị bằng 8 thì bỏ qua giá trị rồi chạy tiếp
// for (let i = 0; i < number.length; i++) {
//    if (number[i] === 6) {
//       // continue;
//    }
//    // console.log(`The index ${number[i]}`);
// }
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = number.length - 1; i >= 0; i--) {
//    console.log(`The value ${number[i]}`);
// }
// console.log(number.length);
// length = 10
// Vì mảng trong JavaScript được index từ 0, nên khi bạn muốn truy cập đến phần tử cuối cùng của mảng, bạn cần trừ đi 1 từ tổng số phần tử trong mảng.
// Ví dụ: nếu mảng có 10 phần tử, thì phần tử cuối cùng sẽ có index là 9 (0-based indexing), và không phải 10.
// Do đó, biến i được gán giá trị bằng number.length - 1 để bắt đầu từ phần tử cuối cùng của mảng.
// let i = number.length - 1 -> Lấy vị trí cuối cùng của mảng
// i >= 0 -> Điều kiện index lớn hơn hoặc bằng 0
// i-- -> i = i -1

// Nested loop
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = number.length - 1; i >= 0; i--) {
//    console.log(`The value ${number[i]}`);
//    for (let j = number.length - 1; j > 0; j--) {
//       console.log(j);
//    }
// }
/*
infinite loop
for ( let i = 0; 2 > i; i--) {
   
}
*/
// Vài bài tập!
// 1. sao chép mảng dùng vòng lặp for
// 1 2 3 4
// push(value): mỗi lần push thì sẽ thêm phần tử vào sau
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let copyArr = [];
// for (let i = 0; i < number.length; i++) {
//    copyArr.push(number[i]);
// }
// console.log(number.length);
// console.log(copyArr);
// 2. Đảo ngược từ
// let str = "i love"
// let result = "";
// console.log(str.length);
// for (let i = str.length - 1; i >= 0; i--) {
//    console.log(str[i]);
//    result = result + str[i];
// }
// console.log(result);
// while và do while
// while check điều kiện trước rồi mới xử lý
// while (condition: điều kiện) {
//    body code;
// }
// let number = -1;
// while (number < 10) {
//    number += 1;
//    console.log("Number is than:" + number)
// }
/*
do {
   
} while(condition: điều kiện)
*/
// do while xử lý xong rồi mới check điều kiện
// let number2 = 0;
// do {
//    number2 += 1;
//    console.log("Number2 is than:" + number2);
// } while (number2 < 10);
// for of
// for(value of array) {}
// dùng để loop qua mảng hoặc chuỗi thì chỉ lấy value
// let a = [];
// for (let value of numbers) {
//    value += 10;
//    a.push(value);
// }
// console.log(a);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = [];
for (value of numbers) {
   value += 10;
   a.push(value);
}

for (let c of "evondev") {
   console.log(c);
}

const language = [
   'Javascript',
   'PHP',
   'Java'
]
for (let value of language) {
   console.log(value);
}

const myInfo = {
   name: 'Chi Quoc',
   age: 18
}
for (let value of Object.keys(myInfo)) {
   console.log(value);
}