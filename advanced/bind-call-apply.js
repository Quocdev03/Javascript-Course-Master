// Bind dùng để xác định tham số this của function
const student = {
   firstName: "Cao ",
   lastname: "Chi Quoc",
   fullName: function () {
      console.log(`${this.firstName}${this.lastname}`);
   }
}
// $
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const button = $(".button");
button.addEventListener("click", student.fullName.bind(student));
// console.log(selectors(".button"));
function log(level, time, message) {
   console.log(`${level}${time}${message}`);
}

// function logErrToday(message) {
//    log("Erroe", "Today", message);
// }
// logErrToday("Server Ok!");
// tạo ra 1 function mới = cácb gán mặc định 1 số ts của fn củ
const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server Ok!");
// 2. Call and apply
const person = {
   firstName: "Evondev",
   lastname: "Front End Developer"
};
function sayHello(str1, str2) {
   console.log(`${str1}${str2}${this.firstName}${this.lastname}`);
}
// function.call(this,agr1,agr2)
sayHello.call(person, "Hello", "Good Evenight");
// function.apply[this,agr1,agr2]
sayHello.apply(person, ["Hello", "Good Evenight"]);
const arr = [1, 2, 3];
const arr2 = [2, 3, 4];
arr.push.apply(arr, arr2);
console.log(arr);