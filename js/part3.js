"4.5" // ParseFloat
"4" // ParseInt
// Number(value) -> Number
console.log(Number("4.5"));
console.log(Number("4"));
console.log(Number("abc"));
// NaN -> Not a Number
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(Number(false)) // 0
console.log(Number("")) // 0
console.log(Number(NaN)) // NaN
// Falsy Values 
console.log(Number(true)) // 1
// String(value) -> String
console.log(String(4.5)); // "4.5"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(false)); // "false"
console.log(String(true)); // "true"
// Boolean(value) -> true or false
console.log(`Boolean of zero : ${Boolean(0)}`);
console.log(`Boolean of one : ${Boolean(1)}`);
console.log(`Boolean of "" : ${Boolean("")}`);
console.log(`Boolean of null : ${Boolean(null)}`);
console.log(`Boolean of undefined : ${Boolean(undefined)}`);
console.log(`Boolean of NaN: ${Boolean(NaN)}`);
console.log(`Boolean of false: ${Boolean(false)}`);
console.log(`Boolean of text: ${Boolean("quoc")}`);
// Type Coercion -> Chuyển đổi kiểu dữ liệu 
// + - * / -> Number
// Weird
console.log(1 + 2); // 3
console.log(10 + 10); // 20
console.log(10 + "10"); // 1010
console.log("10" + 10); // 1010
// 10 -> "10" + "10" -> "1010"
// console.log(String(10) + "10")
console.log("10" - 10); // 0 Number("10") -10
console.log(null + ""); // null
console.log(null + undefined); // NaN
console.log("" - 1) // Number("") - 1 -> 0 - 1 -> -1
console.log(false - true) // 0 - 1 -> -1
console.log(null + 10) // 0 + 10 -> 10
// Toán tử so sánh > < >= <= == != === !==
console.log(5 > 7); // false
console.log(50 > 7); // true
console.log(50 < 7); // false
console.log(50 >= 50); // true
console.log(50 <= 50); // true
// Toán tử logic && || !
console.log(5 > 7 && 8 > 3); // false
console.log(5 > 7 || 8 > 3); // false || true -> true
const amIWrong = true;
console.log(!amIWrong); // false
// Boolean &&
// false && true -> false
// false && false -> false
// true && false -> false
// true && true -> true
// Booelan ||
// false || true -> true
// true || false -> true
// true || true -> true
// false || false -> false
// == loose equality vs === strict equality
// loose equality -> Chỉ so sánh giá trị
// strict equality -> So sánh cả giá trị và kiểu dữ liệu
console.log("== vs ===");
console.log(10 == "10"); // "10" = "10" -> true
console.log(true == 1); // Number(true) -> 1
console.log(1 == "01"); // Number("01") -> 1
console.log(null == "") // "null" != "" -> false
console.log(typeof 10); // number
console.log(typeof "10"); // string
console.log(10 === "10") // false
console.log(10 !== "10") // true
console.log(true === "true") // false
console.log(true === true) // true
// !==