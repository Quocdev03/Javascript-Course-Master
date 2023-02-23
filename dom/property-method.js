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
// 2. selector.setAttribute("attribute", value) -> set giá trị cho attribute nào đó của selector
link.setAttribute("target", "_blank");
const listLink = document.querySelectorAll("a.link");
listLink.forEach((item) => item.setAttribute("target", "_blank"));
// 3. selector.removeAttribute("attribute",) -> Xoá attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("styles");
// const p = document.querySelectorAll("#spinner");
// p.forEach((item) => item.getAttribute("style"));
// console.log(p);
// 4. hasAttribute("attribute") -> kiểm tra selector có selector nào đó hay không, nếu có -> true ngược lại không có trả về false
console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"));
if (p.hasAttribute("id")) {
   // do something here
}