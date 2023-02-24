// Thêm xoá sửa node torng javascript
// 1. Tạo ra Element trong javascript: document.createElement("tag");
const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> Thẻ body
// document.querySelector("body");
const body = document.body;
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper"
div.textContent = "lorem";
div.innerHTML = `<div class="content"><h3></h3></div>`;
div.setAttribute("date-name", "evondev");
// Bài tập tạo ra HTML như đã minh hoạ ở file HTML
const card = document.createElement("div")
// Tới bài 126