// API là gì?
// Application Programming Interface
// https://api.github.com/users/Quocdev03
// JSON.parse(data)
const endpoint = "https://api.github.com/users";
const userEl = document.querySelector(".username");
// fetch

async function displayUser(username) {
   userEl.textContent = "Loading ...";
   const promise = await fetch(`${endpoint}/${username}`);
   const data = await promise.json();
   userEl.textContent = `${data.login}`;
   console.log("🚀 ~ file: api.js:9 ~ displayUser ~ data:", data)
}
function handleError() {
   console.log("Something wrong with your api");
   userEl.textContent = "No data found";
}
// console.log(displayUser("Quocdev03"));
displayUser("Quocdev03").catch(handleError);
// cors
