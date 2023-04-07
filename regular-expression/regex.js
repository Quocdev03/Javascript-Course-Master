// Regular Expression: Biểu thức chính quy
// 1. 2 cách khai báo với rexgex
const re1 = /hello/;
const re2 = new RegExp("Hello");
// hello world
// regx.test(value) -> true or false
console.log(re1.test("hello"));
// 2. anchor ^ S
// ^ string bắt đầu với từ nào trong đó
// S string kết thúc với từ nào đó
// const re3 = /hi/;
/hi/.test("hi");
/hi$/.test("Welcome to hi");
/hi$/.test("Welcome to hello");
/^hi/.test("hi Welcome to hi");
/^hi/.test("Welcome to hi");
// 3. range []
// [a-z]: các kí tự từ a đến z in thường
// [A-Z]: các kí tự từ A đến Z in HOA
// [0-9]: các số từ 0-9
// [a-z0-9A-Z]: các số từ 0-9 hoặc từ A->Z
/[a-z]/.test("askjdhfj"); // true
/[a-z]/.test("A"); // false
/[A-Z]/.test("Z"); // true
/[A-Z]/.test("x"); // false
/[0-9]/.test("10000000"); // true
/[0-9]/.test("dqwadujhqiuw10000000"); // true
/[0-9]/.test("abc"); // false
/[a-zA-Z0-9]/.test("12ewhubjcbAAAA"); // true
// Phủ định
/[^a-z]/.test("a"); // false
// 4. Meta characters
// \d: Khớp với số nó sẽ tương đương với [0-9]
/\d/.test("1234"); // true
// \D: ngược lại với \d [^0-9]
/\D/.test("123"); // false
// \w: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9_]
/\w/.test("_"); // true
// \W: ngược lại với \ư tương đương [^a-zA-Z0-9_]
/\W/.test("_"); // false
// \s: khớp với lại kí tự khoảng trắng: spaces,tab, newline
/\s/.test(" "); // false
// \S: các kí tự không phải khoảng trắng
/\S/.test(" "); // false
// \n: khớp vói newline (Xuống hàng)
// \t: khớp với lại tab character
// .: khớp với tất cả mọi thứ ngoại trừ newline(\n);
// [^]: khớp với tất cả mọi thứ bao gồm newline(\n);

// 5.Quantifiers: {n}, {n,m} + ? *
// string.natch(regex) "abc".match(/\W/) -> []
// {n} số lượng nhất định 
// {n,m} số lượng nhất định trong khoảng từ n đến m
// +: lấy 1 hoặc nhiều kí tự thoả điều kiện
const str1 = "wellcome to 20224523453241";
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d{4,6}/)[0]);
console.log(str1.match(/\d+/)[0]);
const srt2 = "color or colour?";
// có thể có hoặc không có kí tự nào đó
console.log(srt2.match(/colou?r/g)); // ["color", "colour"]
// flag
// g: global
// i: case insensitive
// m: multipe lines
// *: không có hoặc là nhiều
const srt3 = " ";
console.log(srt3.match(/\d?/g));
// 6. groups ()
/(\d{3})?(\w+)/.test("123"); // false
// 7. Escaping \ / [ ] () { } ? + * . ^ $
/\?/.test("?");
/\*/.test("*");
// 8. Doundaries \b \B
// \b: khi đứng 1 mình độc lập
"my name is evondev".match(/\bevondev/g); // ["evondev"]
// \B: khi có trước nó
"my name is isevondev".match(/\Bevondev/g);
// 9.
const str4 = "hello welcome hello to my hello";
// console.log(str4.replace("hello", "hi")); // hi welcome to my hello
// console.log(str4.replace("hello", "evondev")); // hi welcome to my evondev
console.log(str4.replace("hello", "evondev")); // hi welcome to my evondev
// string.replace(regex,value);
str4.replace(/hello/g, "evondev");
"1234567".match(/\d+/g);