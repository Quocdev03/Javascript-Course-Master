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
// Class expression
let Student = class {
   constructor(name) {
      this.name = name;
   }
   get name() {
      return this._name;
   }
   set name(newName) {
      return this._name = newName;
   }

}
const evon = new Student("Evondev");
console.log(evon.name);
function company(aClass) {
   return new aClass();
}
let hello = company(
   class {
      sayHello() {
         console.log("Hello");
      }
   }
);
hello.sayHello();
// Static Method
class Article {
   constructor(title, date) {
      this.title = title;
      this.date = date;
   }
   static compare(a, b) {
      return a.date - b.date;
   }
}
let article = [
   new Article("HTML", new Date(2021, 1, 11)),
   new Article("CSS", new Date(2021, 0, 1)),
   new Article("JS", new Date(2021, 1, 11)),
];
// const b = Article("CSS", new Date(2021, 0, 1));
// b.compare();
// article.sort((a,b)=>a.date-b.date)
article.sort(Article.compare);
console.log(article[0].title);
// Static Properties
class Item {
   constructor(name) {
      this.name = name;
      this.constructor.count++;
   }
   static count = 0;
   static getCount() {
      return Item.count;
   }
}
const pencil = new Item("Pencil");
const laptop = new Item("laptop");
const phone = new Item("phone");
console.log(Item.getCount());
// Super and extends
class Animal {
   constructor(legs) {
      this.legs = legs;
   }
   walking() {
      console.log(`Walking on ${this.legs} legs`);
   }
}
class Bird extends Animal {
   constructor(legs) {
      super(legs);
   }
   fly() {
      console.log("I can fly!");
   }
}
let bird = new Bird(2);
console.log(bird.fly())
console.log(bird.walking())
