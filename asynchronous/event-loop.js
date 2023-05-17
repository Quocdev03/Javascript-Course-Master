// simple thread
function task(message) {
   let number = 100000000;
   while (number > 0) {
      number--;
   }
   console.log(message);
}
// console.log("start");
// task("Loading");
// console.log("end");
// main
// call stack
/**
 * Start ->
 * task ->
 * End ->
 */
// CallBack
console.log("start");
// Start ->
setTimeout(() => {
   task("Loading");
}, 2000);
// Rời khỏi callstack và chạy qua Web APIs -> Callback queue -> khi callstack empty -> chạy xong -> rời khỏi callstack
console.log("end"); // chạy xong và ròi khỏi call stack
// Web APIs: setTimeout, fetch request, DOM Event