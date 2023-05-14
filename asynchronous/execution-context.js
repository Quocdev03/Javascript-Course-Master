let x = 10;
function timesTen(a) {
   return a * 10;
}
let y = timesTen(x);
console.log(y); // the 100
// -Global execution context
// the creation phase
/**
 * Golbal object: window
 * this: window
 * x: undefine
 * timesTen: function(){}
 * y: undefine
 */

// the execution phase
/**
 * Golbal object: window
 * this: window
 * x: 10
 * timesTen: function(){}
 * y: timesTen(x)
 */
// tới 314
