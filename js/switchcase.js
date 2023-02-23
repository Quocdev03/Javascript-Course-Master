// const fruit = 'lemon';
// if (fruit == "apple") {
//    console.log("You like to eat apple");
// }
// if (fruit === "lemon") {
//    console.log("You like to eat lemon");
// }
// if (fruit === "watermelon") {
//    console.log("You like to eat watermelon");
// }
// switch (fruit) {
//    case "apple":
//       console.log("You like to eat apple");
//       break;
//    case "watermelon":
//    case "lemon":
//       console.log("You like to eat lemon or watermelon");
//       break;
//    default:
//       console.log("You like to eat orange")
//       break;
// }
// const number = "500";
// switch (Number(number)) {
//    case 500:
//       console.log("500");
//       break;

//    default:
//       break;
// }
// Terenary operator 
const yourAge = 15;
let message = "You are young";
if (yourAge >= 18) {
   message = "You are adult";
} else if (yourAge <= 10) {
   message = "You are still child";
}
// condition ? true : false
let message2 = yourAge >= 18 ? "You are adult" : "You are still child";
let message3 =
   yourAge >= 18
      ? "You are adult"
      : yourAge <= 10
         ? "You are still child"
         : "You are young";
console.log(message3)