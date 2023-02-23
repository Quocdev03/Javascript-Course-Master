// const a = "a";
// const b = "b";
// const c = "c";
// const d = "d";
// // 2 cách tạo mảng
// // Array literal
// // const students1 = ["evodev","tuan","quoc","nam","thanh"];
// // Array Contructor
// // const students = new Array();
// // Ví dụ 1 mảng
// // Mảng phức tạp [0, false, undefined, null, "evondev", ["evondev", false, 1200, []]]
// // Mảng đơn giản [0, false, undefined, null,"evondev"]
// // [1,2,3,4,5] ["a","b","c","d"] [fasle, true]
// // []: Empty Array -> mảng rổng
// // const students1 = ["evodev", "tuan", "quoc", "nam", "thanh"];
// //0 1 2 3 4
// // Index: vị trí cảu phần tử(Giá trị) trong mảng và nó bắt đầu từ 0
// // lenght: độ dài của mảng, nó đếm từ 1
// // truy xuất trong mảng -> students1[index]
// // console.log(students1[0]);
// // console.log(students1[1]);
// // console.log(students1[5]); // Không có -> undefined
// // Lấy phần tử cuối củng trong mảng = độ dài của mảng - 1 -> array.length - 1
// // console.log(students1[students1.length - 1]);
// // students1.length = 0;
// // console.log(students1);
// // Phương thức hay dùng của mảng nên biết
// // array.method
// // length -> trả về độ dài của mảng
// const students1 = ["evodev", "tuan", "quoc", "nam", "thanh",];
// console.log("----array.length----")
// console.log(students1.length);
// // reverse -> Đảo ngược giá trị trong mảng
// console.log("----array.reverse----")
// // console.log(students1.reverse())
// // join -> nối các phần tử trong mảng thành chuỗi
// console.log("----array.join----")
// console.log(students1.join());
// // indexOf -> tìm ra vị trí của giá trị đó trong mảng khi tìm thấy đầu tiên
// console.log("----array.indexOf----")
// console.log(students1.indexOf("tuan"));
// // lastIndexOf -> tìm ra vị trí của giá trị đó trong mảng khi tìm thấy cuối củng
// console.log("----array.lastIndexOf----")
// console.log(students1.lastIndexOf("tuan"));
// console.log(students1)
// // push -> Thêm phần tử vào cuối mảng
// console.log("----array.push----")
// console.log(students1.push("javascript"));
// console.log(students1)
// // unshift -> Thêm phần tử vào đầu mảng
// console.log("----array.unshift----")
// console.log(students1.unshift("FrontEnd"));
// console.log(students1)
// // pop -> xoá phần tử trong mảng
// console.log(students1);
// students1.pop();
// console.log(students1);
// // shift -> xoá phần tử đầu tiên trong mảng
// console.log(students1);
// students1.shift();
// console.log(students1);
// console.log("----array.slice----")
// // Tạo tao 1 mảng coppy của mảng ban đầu
// const animals = ["tiger", "lion", "horse", "elephant"];
// // slice() Tạo ra 1 mảng mới y hệt mảng ban đầu
// const animals2 = animals.slice();
// // ['tiger', 'lion', 'horse', 'elephant']
// console.log(animals2);
// // slice(start): start -> Sao chép tại vị trí index trong mảng
// const animals3 = animals.slice(1);
// // ['lion', 'horse', 'elephant']
// console.log(animals3);
// // slice(start, end): start lấy từ vị trí bắt đầu , end là vị trí kết thúc
// // Sẽ sao chép từ phần tử từ vị trí start tới vị trí end - 1
// const animals4 = animals.slice(1, 3);
// //  ['lion', 'horse']
// console.log(animals4);
// const animals5 = animals.slice(-2);
// console.log(animals5);
// console.log("----array.splice----")
// // Nó sẽ xoá phần tử trong mảng hoặc thay thế phần tử trong mảng
// const pets = ["dog", "cat", "bird", "dragon"];
// // slice(start)
// // const pets2 = pets.splice(0);
// // console.log(pets2);
// // slice(start, deleteCount): deleteCount -> số lượng phần tử muốn xoá và thay thế
// // const pets3 = pets.splice(0, 4);
// // [] emty array
// // slice(start, deleteCount, item1, item2, itemN): deleteCount -> số lượng phần tử muốn xoá và thay thế
// const pets3 = pets.splice(0, 2, "dinasour", "pig", false, 7);
// console.log(pets)
console.log("----array.sort----");
// Sắp xếp các phần tử trong mảng theo chuẩ unicode-16
const random = [1, 5, 9999, 10000000, 6, 09]
// console.log(random.sort());
// sort(function(a, b))
// function(callback)
// sắp xếp. Sẽ duyệt qua từng phần tử trong mảng
// Cách 1: Dùng normal function
const random2 = random.sort(
   function (a, b) {
      if (a > b) return 1; // Sắp xếp theo tăng dần
      if (a < b) return -1; // Sắp xếp theo giảm dần
   }
)
// console.log(random2);
// Cách 2: Dùng arrow function
const random3 = random.sort(
   (a, b) => (a > b ? 1 : -1)
);
// console.log(random3);
console.log("----array.find----");
// Nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng khi thoả điều kiện nào đó.
const number = [1, 8, 9, 6, 4, 6, 99999, 5, 3];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = number.find((element) => (element > 10));
// Nếu không thoả điều kiện thì sẽ trả về kết quả undefined.
// console.log(findYourNumber);; // 9999
console.log("----array.findIndex----");
// Nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng khi thoả điều kiện nào đó.
const findYourIndex = number.findIndex((element) => (element > 9));
// Nếu không tìm thấy thì sẽ trả về kết quả là -1;
console.log(findYourIndex);
// Sort bổ sung
// const random = [1,9999,10000000,6,09]
// Giảm dần
const random4 = random.sort(
   (a, b) => (a > b ? -1 : 1)
);
// Tăng dần
const random5 = random.sort(
   (a, b) => (a > b ? 1 : -1)
);
// console.log(random4);
// console.log(random5);
console.log("----array.map----");
// Duyệt qua từng phần tử trong mảng và trả ra 1 mảng mới mà không thay đổi mảng ban đầu
// .map(callback(value,index,array))
const listNumber = [1, 2, 3, 4, 5];
// Value là từng phần tử trong mảng
// Trả ra 1 mảng mới, mà các giá trị trong mảng cũ nhân 2
// Normal function
const listNumberDouble = listNumber.map(function (value, index, array) {
   // Trả về kết quả mong muốn theo đề
   return value * 2;
})
console.log(listNumberDouble);
// arrow function
// const listNumberDouble = listNumber.map((value, index, array) => value * 2
// )
console.log(listNumberDouble)
console.log("----array.forEach----");
// Duyệt qua từng phần tử trong mảng và trả ra 1 mảng mới mà không thay đổi mảng ban đầu
// .foreach(callback(value,index,array))
const listnumberTriple = listNumber.forEach((value, index, array) => {
   return value * 3;
})
console.log(listnumberTriple);
// * Hãy cho biết sự khác nhau giữa forEach và map
// - forEach sẽ return được còn map thì không.
// - map sẽ trả ra 1 mảng mới dựa vào mảng ban đầu ( có thể thay đổi ) còn forEach thì không thay đổi được.
// - forEach do không có return thì nó sẽ chạy mãi không dừng, thường được sử dụng trong DOM
console.log("----array.filter----");
// Dùng để filter ( Sàng lọc các phần tử trong mãng thoả điều kiện nào đó).
// .filter(callback(value,index,array))
// const listNumber = [1,2,3,4,5];
const greaterThanThree = listNumber.filter((item) => item > 3);
console.log(listNumber);
console.log(greaterThanThree);
console.log("----array.some----");
// Trả về true khi thoả 1 điều kiện và ngươc lại trả về false khi không thoả mãn điều kiện nào cả
const someNumber = listNumber.some(value => value > 3);
// console.log(someNumber);
console.log("----array.every----");
// Chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 cái sai là nó sẽ return false
const everyNumber = listNumber.every(value => value > 3);
// console.log(every);
// * Hãy cho biết sự khác nhau giữa Some và every
// - Some chỉ cần 1 điều kiện đúng thì sẽ trả về true
// - every thì tất cả điều kiện cần phải đúng hết nếu có 1 giá trị nào sai thì sẽ trả về false
console.log("----array.reduce----");
// Gom các phần tử trong mảng lại thành 1
// .reduce((a b) => {}, initialize value)
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
   console.log(previousValue, currentValue);
   return previousValue + currentValue;
}, 0)
console.log(totalNumber)