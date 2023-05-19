/**
 * status: pending
 * status: success
 * status: reject
 */
// new Promise(function(resole, reject))
// let byIphone = true;
// let willByPhone = new Promise(function (resole, reject) {
//    setTimeout(() => {
//       if (byIphone) {
//          resole("i have a new phone");
//          console.log("ok");
//       } else {
//          reject("i dont have new phone");
//          console.log("not ok");
//       }
//    }, 5000);
// });
// console.log(willByPhone);
// .then(onFullfiled, onRejected)
function makePromise(byIphone) {
   return new Promise(function (resole, reject) {
      setTimeout(() => {
         if (byIphone) {
            resole("i have a new phone");
         } else {
            reject("i dont have new phone");
         }
      }, 5000)
   });
}
// onFullfiled -> resole
// onRejected -> reject
// let haveIphone = makePromise(false);
// haveIphone
//    .then(
//       (success) => {
//          console.log(success);
//          // console.log("Im still happy");
//       },
//       // undefined,
//       // (reason) => console.log(reason)
//    )
//    .catch((error) => {
//       console.log(error);
//    })
//    .finally(() => {
//       console.log("Im still happy");
//    })
// catch finally
// Exercise
// new Promise(function (resole, reject) {
//    setTimeout(() => {
//       resole("run the this time");
//    }, 3000)
// })
//    .then((data) => {
//       console.log(data);
//       return new Promise(function (resole, reject) {
//          setTimeout(() => {
//             resole("run the second time");
//          }, 1000)
//       })
//    })
//    .then((data) => {
//       console.log(data);
//       return new Promise(function (resole, reject) {
//          setTimeout(() => {
//             resole("run the third time");
//          }, 1000)
//       })
//    })
//    .then((data) => {
//       console.log(data);
//    })
// setTimeout(() => {
//    console.log("run the first time");
//    setTimeout(() => {
//       console.log("run the second time");
//       setTimeout(() => {
//          console.log("run the third time");
//          setTimeout(() => {
//             console.log("run the fourth time");
//             setTimeout(() => {
//                console.log("run the fifth time");
//             }, 2000);
//          }, 1000);
//       }, 1000);
//    }, 1000);
// }, 3000);

// Promise.all
// Trả về resole khi tất cả Promise truyền vào đều là resole
// Trả về reject khi tất cả Promise truyền vào đều là reject
function makeTimer(timer = 1000, str) {
   return new Promise(function (resole, reject) {
      setTimeout(() => {
         resole(str);
      }, timer)
   });
}
const timer1 = makeTimer(1000, "first time");
const timer2 = makeTimer(2000, "second time");
const timer3 = makeTimer(3000, "third time");
const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
   // console.log(data);
});
// Promise.race
const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) => {
   // console.log(data);
});
// Promise.allSettled
function isFrontendDev(language) {
   return new Promise(function (resole, reject) {
      if (!language.includes("html")) {
         reject("you are front end developer");
      }
      setTimeout(() => {
         resole("you are not front end developer");
      }, 1000)
   });
}
const dev1 = isFrontendDev(["html", "css"]);
const dev2 = isFrontendDev(["css"]);
// const devAll = Promise.all([dev1, dev2]).then((data) => {
//    console.log(data);
// });
// const devRace = Promise.race([dev1, dev2]).then((data) => {
//    console.log(data);
// });
const devRace = Promise.allSettled([dev1, dev2]).then((data) => {
   console.log(data);
});
// Try catch
function isFrontendDevv2(language) {
   if (!language.includes("html")) {
      throw new Error("you are front end developer");
   }
   return new Promise(function (resole, reject) {
      setTimeout(() => {
         resole("you are not front end developer");
      }, 1000)
   });
}
try {
   isFrontendDevv2(["css"]).then((data) => {
      console.log(data);
   }).catch((err) => {
      console.log(err);
   })

}
catch (error) {
   console.log(" error");
} finally {
   console.log("demo");
}