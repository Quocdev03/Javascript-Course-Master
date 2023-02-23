// String - Chuỗi
"Hello World";
'My Name Evondev';
`I'm Frontend Developer`
// Double quote, single quote, backtick (template literal)
const name = 'Evondev';
const job = 'Frontend Developer';
console.log(name);
console.log(typeof name);
const newStr = "my name is evondev and i'm fontend developer";
const newStr2 = "my name is " + name + " evondev and i'm" + job;
console.log(newStr2);
// ${Variable} - Template literal
const newStr3 = `My name is ${name} and i am ${job}`;
console.log(newStr3);
// .length - Độ dài của chuỗi
console.log(newStr3.length);
// My name is Evondev and i am Frontend Developer => 46
// Index vị trí của từng ký tự trong chuỗi bao gồm cả khoảng trắng
// Split - Tách chuỗi thành mảng
const myStr = "Frontend Developer D";
console.log(myStr.split(" ")); // ["Frontend", "Developer"]
console.log(myStr.split("")); // ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
console.log(myStr.split("/")); // ["Frontend Developer"]
console.log(myStr.toLowerCase()); // Chuyển chuỗi thành chữ thường
console.log(myStr.toUpperCase()); // Chuyển chuỗi thành chữ hoa
// StartsWith - Dùng để kiểm tra chuỗi có bắt đầu bằng ký tự nào đó hay không
console.log(myStr.startsWith("frontend"));
// EndsWith - Dùng để kiểm tra chuỗi có kết thúc bằng ký tự nào đó hay không
console.log(myStr.endsWith("Developer"));
// Includes - Dùng để kiểm tra chuỗi có chứa ký tự nào đó hay không
console.log(myStr.includes("end"));
// False
console.log(myStr.includes("abc"));
// IndexOf - Dùng để tìm vị trí của ký tự trong chuỗi
console.log(myStr.indexOf("D")); // 9
// LastIndexOf - Dùng để tìm vị trí của ký tự cuối cùng trong chuỗi
console.log(myStr.lastIndexOf("D")); // 19
// Replace - Dùng để thay thế ký tự trong chuỗi
console.log(myStr.replace("Developer", "Designer"))
// Repeat - Dùng để lặp lại chuỗi
console.log(myStr.repeat(5));
// Slice - Dùng để cắt chuỗi theo vị trí index
// "Frontend Developer D"
// slice(start, end)
console.log(myStr.slice(0, 8)) // Frontend
console.log(myStr.slice(0)) // Frontend Developer D
console.log(myStr.slice(-5)) // per D  
console.log(myStr.slice(999)) //  
console.log(myStr.trim()) // Remove space left and right
console.log(myStr.trimStart()) // Remove space left
console.log(myStr.trimEnd()) // Remove space rigth
const myStr2 = "Frontend";
// CharAt - Dùng để lấy ký tự theo vị trí index
console.log(myStr.charAt(1)) // r
// substr -> Lấy ra 1 phần cùa chuỗi
// substr(index, length) -> index: vị trí , length: số lượng kí tự mà bạn muốn lấy
// Bắt đầu từ 1 rổi lấy 5 kí tự trong chuỗi
console.log(myStr2.substr(1, 5)); // ronte
// substring -> Lấy ra các ký tự cùa chuỗi (string)
// substring(start index. end index);
// Bắt đầu từ 1 và kết thúc bằng 5;
console.log(myStr2.substring(1, 5)); // ront
// Bài tập:
// Loại bỏ khỏng trống, đưa về in hoa, thay chữ Developer D thành Developer and Designer, sau đó lặp lải lần.
const myStr3 = "   Frontend Developer D   ";
console.log(
   `Result of myStr3: ${myStr3.trim()
      .replace("Developer D", "Developer and Designer")
      .toUpperCase()
      .repeat(2)}`
);
