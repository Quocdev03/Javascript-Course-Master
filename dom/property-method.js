// 1. selector.getAttribute("attribute") -> Lấy ra giá trị của attribute selector
// selector: 1 cái
// attribute -> thuộc tính: hfre, id , class, src, style, ...
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
// li.getAttribute("class");
li.forEach((item) => {
   console.log(item.getAttribute("class"));
})
console.log(li);
// if (link) {

// }