// Cách khai báo object
// object literal
const objectLiteral = {};
// object contructor
const objectContructor = new Object();
const student = {
   // Key (properties) : Value
   name: "evondev",
   age: 27,
   male: true,
   "last-name": "quoc",
   hi: function () {
      console.log("hello evondev");
   },
};
// method 
// 2 cách truy xuất giá trị của object 
// 2.1 Dot notation object.key
console.log(student.name);
// 2.2 Bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);
// Thay đổi giá trị của Object
student.age = 20;
student.male = "male";
student.isDeveloper = true;
student["is-developer"] = false;
student.helo = function () {
   console.log("Hello");
}
console.log(student);
// Cách xoá object
delete student["last-name"];
//for in -> duyệt qua các key trong object
// for (key in student) {
//    if (key === "name") {
//       student.name = "Cao Chi Quoc"
//    }
//    const value = student[key];
//    console.log(`${key}:${student[key]}`);
// }
// Object.key(object) -> trả về 1 mảng chứa tất cả các key của object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);
// Oject.value(object) -> trả về 1 mảng chứa tất cả giá trị của object
const values = Object.values(student);
console.log(values);
// Object.entries(object) -> trả về 1 mảng nested [["name", "evondev", "age", 20]] gồm có key và value
const entries = Object.entries(student);
console.log(entries);
// Object.assign() Gộp các object lại
const a = {
   firstName: "Chi"
};
const b = {
   lastName: "Quoc"
};
const c = Object.assign(a, b);
console.log(c);
const d = { ...a, ...b };
console.log(d);
// Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
const car = {
   brand: "BMW"
};
// const newCar = Object.freeze(car);
// newCar.brand = "Audi";
// console.log(newCar);
// Object.seal(object) -> cho phép chỉnh sửa key value nhưng không được thêm value mới
const user = {
   userName: "evondev",
   school: {
      name: "Cao Thang",
      room: {
         name: "IT",
      }
   },
};
// const newUser = Object.seal(user);
// newUser.userName = "Cao Chi Quoc";
// console.log(newUser);
// [...array] {...object}
const newUser = { ...user };
newUser.userName = " Cao Chí Quốc";
console.log(newUser);
// Object.assign
const newUser2 = Object.assign({}, user);
// newUser2.school.name = "Designer";
console.log(newUser2);
// Clone nested object
const userName3 = JSON.parse(JSON.stringify(user));
userName3.school.name = "CTUET"
console.log("User Name3");
console.log(userName3);
// this keyword
// this nó sẽ đề cập tới object gần nhất
const student2 = {
   // Key (properties) : Value
   name: "evondev",
   age: 27,
   male: true,
   "last-name": "quoc",
   hi: function () {
      console.log(this);
      console.log(`My name is ${this.name}and i am ${this.age} year old`);
   },
   fullname: {
      name: "Cao Chi Quoc"
   },
};
student2.hi();
// optional chaining -> Truy xuất nhiều key lồng nhau
console.log(student2.fullname); // undefine
console.log(student2.fullname.name); // undefine.name -> Cannot read properties of undefined (reading 'name')
if (student2.fullname) {
   if (student2.fullname.name) {
      console.log(student2.fullname.name);
   }

}
//object?
// student2.fullname?.name
console.log(student2.fullname?.name);
// destructurig object
const { name, age, male, ...rest } = student2;
console.log(rest);
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
// normal function
// function whatYourInfo(name, age, school) {
//    console.log(name, age, school);
// }
// whatYourInfo("evondev", 27, "Cao Thang");
// function with object parameter
function whatYourInfo(obj) {
   console.log(obj.name, obj.age, obj.school);
}
const newObj = {
   school: "Cao Thang",
   age: 27,
   name: "evondev",
}
whatYourInfo(newObj);
// object destructuring parameter
function whatYourInfo2({ name, age, school }) {
   console.log(name, age, school);
}
whatYourInfo2({
   name: "tuan",
   age: "27",
   school: "Cao Thang",
})