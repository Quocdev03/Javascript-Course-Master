// 1. selector.classList.add("abc") -> thêm class
// const container = document.querySelector(".container");
// container.classList.add("is-active");
// 2. selector.classList.remove("abc")
// container.classList.remove("is-active"); -> xoá class
// container.classList.remove("container");
// 3. selector.classList.contains("") -> kiểm tra xem có chứa class đó hay không
// console.log(container.classList.contains("container")) // false
// console.log(container.classList.contains("is-active")); // true
// 4. selector.classList.toggle("is-active");
// if (container.classList.contains("is-active")) {
//    container.classList.remove("is-active");
// } else {
//    container.classList.add("is-active");
// }
// 
// container.classList.toggle("is-active");
// 5. selector.classname -> trả ra chuỗi các class của selector đó
// const title = document.querySelector(".title");
// console.log(title.className);
// // Chiêu
// title.className = "title";
// console.log(title.className);
// menu toggle
const menu = document.querySelector(".menu");
menu.classList.add("is-show");
menu.classList.remove("is-show")