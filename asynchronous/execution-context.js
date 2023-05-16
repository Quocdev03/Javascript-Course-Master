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
 * y: timesTen(x) -> 100
 */
// function execution context
// creation phase
/**
 * Global object: arguments
 * this: window
 * a: undefine
 */
// execution phase
/**
 * Global object: arguments
 * this: window
 * a: 10
 */
