// 1. Đảo ngược 1 chuỗi. Ví dụ "My name is evondev" -> "Evondev is name My";
// Ý tưởng cho nó thành 1 mảng rồi chuyễn về.
// Nguyên liệu:
// split() -> Tách chuỗi chuyển thành mảng
// reverse() -> Đảo ngược mảng lại
// join() -> chuyển từ mảng sang string
// console.log("My name is evondev!")
function reverseString(str) {
   // Cách 1:
   // Check điều kiện
   if (!str) return null;
   // Tách chuỗi thành 1 mảng
   const convertArr = str.split(" ");
   // Đảo ngược mảng lại
   const reverseArr = convertArr.reverse();
   // Chuyển mảng thành 1 chuỗi
   const convertStr = reverseArr.join(" ");
   // Lấy kết quả
   const result = convertStr;
   return result;
   // Cách 2:
   if (!str) return null;
   return str.split(" ").reverse().join(" ");
}
// console.log(reverseString("My name is evondev!"))

// 2. Đảo ngược 1 chuỗi bao gồm các kí tự. Ví dụ "I love" -> "evol i"
// Nguyên liệu:
// map() Duyệt qua từng phần tử trong mảng và trả ra 1 mảng mới mà không thay đổi mảng ban đầu
// console.log("I love")
function reverseWord(word) {
   // Cách 1:
   // Check điều kiện
   if (!word) return null;
   // Tách chuỗi thành 1 mảng
   const convertArr = word.split(" ");
   // Duyệt qua các phần tử trong mảng
   const mapArr = convertArr.map(function (item) {
      return item.split("").reverse().join("")
   })
   console.log(mapArr);
   // Đảo ngược chuỗi
   const reverseArr = mapArr.reverse();
   // Chuyển mảng về chuỗi
   const convertStr = reverseArr.join(" ");
   // Trả về kết quả
   const result = convertStr;
   return result;
   // Cách 2:
   return word.split(" ").map((item => item.split("").reverse().join(""))).reverse().join(" ");
   // ["i","love"] => ["L","0","v","e"] -> ["e","v","o","l"] -> evol
}
// console.log(reverseWord("I love"))
// 3. In hoa chữ cái đầu trong chữ ví dụ: my name is evodev -> My Name Is Evondev
// function capitalizeWord(word = "") {
//    if (word.length === 0) return null;
//    let newWord = word.toLowerCase().charAt(0).toUpperCase();
//    let otherWord = word.toLowerCase().slice(1);
//    const result = `${newWord}${otherWord}`;
//    return result;
// }
// console.log(capitalizeWord("quoc"))
// function capitalizeStr(str) {
//    if (!str) return null;
//    const result = str.split(" ").map((item) => capitalizeWord(item)).join(" ");
//    return result;
// }
// console.log(capitalizeStr("my name is evondev"))

// Viết 1 hàm in hoa chữ cái đầu Vd: quoc -> Quoc
function capitalizeWord(word = "") {
   if (word.length === 0) return null;
   let newWord = word.toLowerCase().charAt(0).toUpperCase();
   let otherWord = word.slice(1).toLowerCase();
   const result = `${newWord}${otherWord}`;
   return result;
}
// Tách chuổi thành 1 mảng sau đó dùng .map() để duyệt qua từng phần tử, và dùng hàm capitalizeWord để xử lý
console.log(capitalizeWord("quoc"));
function capitalizeStr(str) {
   if (!str) return null;
   const result = str.split(" ").map((item) => capitalizeWord(item)).join(" ");
   return result;
}
console.log(capitalizeStr("my name is evondev"))
// Xong bài 71