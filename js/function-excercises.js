// 1. Viét function so sánh 2 số a, b tìm ra số lớn hơn!
function compare(a = 0, b = 0) {
   if (typeof a !== "number" || typeof b !== "number") {
      console.log("Please enter valid number!");
      return 0;
   }
   return Math.max(a, b)
}
// console.log(compare(100, 1000))
// 2. In hoa chữ cái đầu trong chữ ví dụ: tuan -> Tuan, NAM -> nam
// Ý tưởng: tạo hàm cho tham số là 1 chuỗi -> Check1 điều kiện độ dài của chuổi = 0 thì trả về null -> tiếp đến chuyển tất cả về in thường -> sau đó dùng CharAt để lấy ký tự theo vị trí ví dụ để cho 4 chữ thì bắt đầu từ 0 -> Sau đó in hoa lên -> tiếp đến lấy phần còn lại theo vị trí index dùng slide và chuyển về in thường
function capitalize(word = "") {
   if (word.length = 0) return null;
   newWord = word.charAt(0).toUpperCase();
   console.log(newWord);
   otherWord = word.slice(1).toLowerCase()
   console.log(otherWord);
   return (`Chuỗi sau khi chuyển đổi: ${newWord}${otherWord}`)
}
// console.log(capitalize("QUOC"));
// 3. Viết hàm sử dụng callback ( function là 1 parameter của function khác ), in ra kết quả của hàm compare đã viết ở trên!
// Tạo hàm có 3 tham số a, b và tham số cuối là 1 function khác
function useCallBack(a, b, callback) {
   // Tạo biến và gọi lại hàm compare để lấy số lớn nhất!, a và b là tham số truyền vào của useCallBack
   let max = compare(a, b);
   // Sau đó truyền kết quả vào tham số callback
   callback(max);
}
// Tạo hàm để in ra kết quả ( số lớn nhất )
function showMax(number) {
   console.log(`Max is number: ${number}`)
}
// Truyền vào tham số của hàm useCallBack, tham số thứ 3 là hàm showMax
console.log(useCallBack(200, 2100, showMax))
// Khi truyền vào tham số callback bằng showMax có nghĩa là chỉ lấy kết quả là số lớn nhất, do lúc đầu đã gán kết quả là số lớn nhất vào tham số callback
// Arrow function: Anonymouse Function
// ECMAScript
// Normal function: Anonymouse Function
// const square = function (x) {
//    return x * x;
// };
// square(25) // 25
// // Arrow function
// const square = () => {
//    // if else
//    return 1000;
// }
// Rút gọn khi return
// const square2 = (x) => x * x;
// Arrow function khi xử lý nhiều dòng
// const square = () => {
//   handle code
//   return
// }
// const myName = () => {
//    return console.log("Cao Chi Quoc");
// }
// console.log(myName())
// Tính a + b + c / 2
// function add(a, b, c) {
//    return a + b + c;
// }
// const sum = add;
// function average(a, b, c, fn) {
//    const total = fn(a, b, c);
//    return total / 2;
// }
// Tạo biến result để lưu kết quả
// sum lúc này là tham số của fn trên hàm average, mà sum = add
// let result = average(200, 200, 200, sum);
// console.log(result)
// Viết chương trình cộng 2 số
// function tinhTong(a = 0, b = 0) {
//    return a + b;
// }
// const a = parseInt(prompt("Nhập vào số thứ nhất: "))
// const b = parseInt(prompt("Nhập vào số thứ hai: "))
// const ketQua = tinhTong(a, b);
// console.log(`Kết quả là: ${ketQua}`)
// Tìm số nhỏ nhất trong 2 giá trị
function minNumber(a = 0, b = 0) {
   if (typeof a !== "number" || typeof b !== "number") return null;
   return Math.min(a, b);
}
// console.log(minNumber(400, 500));
//
const minFn = minNumber;
function useCallBacks(a, b, callbacks) {
   let min = minFn(a, b);
   callbacks(min);
}
function isShows(numbers) {
   console.log(`Number is min: ${numbers}`)
}
console.log(useCallBacks(200, 300, isShows))