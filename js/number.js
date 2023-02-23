// Số nguyên: 1 2 3 4 999 44 33
// Số thập phân: 1.2 3.4 5.6 7.8 9.9
console.log(5 + 7);
console.log(typeof 10);
const number1 = "5";
const number2 = "4.8";
// Dùng parseInt để chuyển đổi chuỗi thành số nguyên
console.log(parseInt(number1)); // 5
// Dùng parseFloat để chuyển đổi chuỗi thành số thập phân
console.log(parseFloat(number2)); // 4.8
const number3 = -10;
// Math.abs() trả về giá trị tuyệt đối của số
console.log(Math.abs(number3)); // 10
// Maht.floor(value) làm tròn xuống -> Vd: 4.3 -> 4
console.log(Math.floor(4.3)); // 4
// Math.ceil(value) làm tròn lên -> Vd: 4.3 -> 5
console.log(Math.ceil(4.3)); // 5
// Math.round(value) làm tròn gần nhất -> Vd: 4.3 -> 4, 4.5 -> 5
console.log(Math.round(4.5)); // 4
console.log(1 / 3); // 0.3333333333333333
// toFixed() làm tròn số thập phân -> Ví dụ 0.3333333333333333 -> 0.33
console.log(parseFloat((1 / 3).toFixed(2))); // 0.33
// Random chạy từ 0 đến số truyền vào
console.log(Math.ceil(Math.random()) * 10); // Random Infinity 
// Math.max(1,3, -5,100) trả về số lớn nhất
console.log(`Max: ${Math.max(1, 2, 3)}`);
// Math.min(1,3, -5,100) trả về số nhỏ nhất
console.log(`Min: ${Math.min(1, 2, 3)}`);
// Math.pow(number 1, number 2); Math.pow(3,2) -> 3^2 = 9
console.log(Math.pow(3, 2));
// isNaN(value) vs Number.isNaN(value)
// Dùng isNaN để kiểm tra xem giá trị truyền vào có phải là NaN hay không
// NaN -> Not a Number 
console.log(isNaN("This is a string")) // true
console.log(isNaN("12345")) // isNaN trả về false vì 12345 là một số
console.log(Number.isNaN("1234"));
console.log(Number.isNaN(NaN));