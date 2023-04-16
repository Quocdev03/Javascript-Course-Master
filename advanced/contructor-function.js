let student = {
   name: "evondev",
   age: 28,
};
// let student2 = {
//    name: "john",
//    age: 40,
// };
// Contructor function Person Student
function Student(name, age) {
   // this =()
   // add properties to this
   this.name = name;
   this.age = age;

   this.getName = () => {
      return `Your name is this ${this.name}`;
   }
   // return this
}
let student2 = new Student("john", 40);
console.log(student2);
// tới 293