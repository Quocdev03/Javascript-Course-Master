/**
 * status: pending
 * status: success
 * status: reject
 */
// new Promise(function(resole, reject))
let byIphone = true;
let willByPhone = new Promise(function (resole, reject) {
   setTimeout(() => {
      if (byIphone) {
         resole("i have a new phone");
         console.log("ok");
      } else {
         reject("i dont have new phone");
         console.log("not ok");
      }
   }, 5000);
});
console.log(willByPhone);
// tới 320