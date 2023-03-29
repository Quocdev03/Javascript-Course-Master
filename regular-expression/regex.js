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
// tới 233