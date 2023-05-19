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