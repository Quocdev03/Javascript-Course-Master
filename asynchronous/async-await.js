function wait(timer = 0) {
   return new Promise(function (resole, reject) {
      setTimeout(resole, timer);
   });
}
async function run() {
   console.log("Starting");
   await wait(5000);
   console.log("Running");
   await wait(5000);
   console.log("Ending");
}
// run();
// arrow function
const fn = async () => { };
const student = {
   fullname: async function () { },
   async calcAge() { },
   yearly: async () => { },
}

function makeTimer(timer = 1000, str) {
   return new Promise(function (resole, reject) {
      setTimeout(() => {
         resole(str);
      }, timer);
   })
}
async function allTimer() {
   const timer1 = makeTimer(1000, "first time");
   const timer2 = makeTimer(2000, "second time");
   const [a, b] = await Promise.all([timer1, timer2]);
   console.log(a, b);
   // const timer3 = makeTimer(3000, "third time");
   // console.log(timer1);
   // console.log(timer2);
   // console.log(timer3);
}
// allTimer();
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
async function go() {
   const dev1 = await isFrontendDev(["css"]);
   console.log(dev1);
   return dev1;
}
// console.log(go());
go()
   .then()
   .catch((err) => console.log(err));

