// String, Number, Boolean
// String.prototyoe, Number.prototype
let str = "abc";
str.toUpperCase();

String.prototype.duplicate = function () {
   return this + this;
};
console.log(str.duplicate());

function Girl() {
   this.cook = function () {
      console.log("Your girlfriend can cook");
   };
}
Girl.prototype.sing = function () {
   console.log("your girlfriend can sing cook");
}
Object.prototype.makeSandwich = function () {
   console.log("Make sand wich");
}
let jane = new Girl();
jane.cook();
jane.sing();
jane.makeSandwich();
