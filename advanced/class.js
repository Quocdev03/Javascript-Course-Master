// ES6
function Person(name) {
   this.name = name;
}
Person.prototype.getName = function () {
   console.log(this.name);
}
const evondev = new Person("Evondev");
evondev.getName();
// Class
class Person2 {
   constructor(name) {
      this.name = name;
   }
   get name() {
      return this._name;
   }
   // getName() {
   //    return this.name;
   // }
   set name(newName) {
      return this._name = newName;
   }
   // setName(newName) {
   //    this.name = newName;
   // }
}
const quoc = new Person2("Quoc");
console.log(quoc.name);
quoc.name = "Quoc 2";
console.log(quoc.name);
// 300