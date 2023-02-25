// Thêm xoá sửa node torng javascript
// 1. Tạo ra Element trong javascript: document.createElement("tag");
const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> Thẻ body
// document.querySelector("body");
const body = document.body
body.appendChild(div);
div.classList.add("container");
div.className = "container wrapper";
div.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus quidem quos culpa. Fugiat sunt nisi deserunt veniam nihil reiciendis quis iste ipsa saepe quia, in, veritatis explicabo. Fugiat, quae."
div.innerHTML = `<div class="content"><h3></h3></div>`;
div.setAttribute("data-name", "evondev");
// Bài tập tạo ra html như đã minh hoạ ở html
const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
// cardImage.classList.add("cardImage")
cardImage.setAttribute("class", "CardImage");
// cardImage.setAttribute("src", "https://source.unsplash.com/random");
const cardContent = document.createElement("div");
// cardContent.classList.add("cardContent");
cardContent.setAttribute("class", "cardContent");
card.appendChild(cardContent);
card.appendChild(cardImage);
body.appendChild(card);
// 3. document.createTextNode
const text = document.createTextNode("Hello my name is evondev");
const h1 = document.createElement("h1");
h1.appendChild(text)
body.appendChild(h1);
// 4. element.cloneNode
const h1Clone = h1.cloneNode(true);
const h2Clone = h1.cloneNode();
body.appendChild(h1Clone);
// 5. element.hasChildNodes -> Kiểm tra có phần tử con hay không, có -> true, không thì trả về false
console.log(document.querySelector("h3").hasChildNodes());
// tới bài 130
