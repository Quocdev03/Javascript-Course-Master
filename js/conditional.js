// Điều kiện
// if (condition) {
//    // code;
//}
// const isRich = true;
// const myMoney = 100;
// if (!isRich) {
//    // !true = false
//    console.log("I will buy new car!");
// } else if (myMoney > 1000) {
//    console.log("I will give you some money!");
// } else {
//    console.log("I poor!");
// }
// Prompt, confirm, alert
// alert("Your Website has been hacked!");
// const yourName = prompt("Vui long nhap ten cua ban: ", "");
// console.log("Ten cua ban la:", yourName);
// const isYourMoney = confirm("Do you have money?");
// console.log("isYourMoney:", isYourMoney);
// Bài 1: Nhập vào số tuổi và kiểm tra nếu số tuổi >= 18 thì được coi phim rạp, ngược lại không được coi.
// const yourAge = prompt("Nhap vao so tuoi cua ban: ", "");
// console.log(typeof yourAge); // Check type of yourAge
// let message = "Xin lỗi bạn không đủ tuổi!";
// if (Number(yourAge) >= 18) {
//    message = "Bạn có thể vào rạp"
// }
// alert(message);
// Bài 2: Cho 2 số a và b, tìm ra số lớn hơn
const a = 10;
const b = 10;
if (a > b) {
   alert(`Số lớn hơn là ${a}`)
} else if (a < b) {
   alert(`Số lớn hơn là ${b}`)
} else {
   alert("Hai số bằng nhau")
}