// 1. offsetWidth, offsetHeight, offsetLeft, offsetParent, offsetTop
function log(value) {
   console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth); // Độ rộng của phần tử
log(boxed.offsetHeight); // Chiều cao của phần tử
log(boxed.offsetLeft); // Vị trí của nó so với bên trái
log(boxed.offsetTop); // Vị trí của nó so với bên trên
log(boxed.offsetParent); // Lấy ra phần tử cha để lấy giá trị của phần tử cha
// 2. clientWidth, clientHeight, clientLeft, clientTop
log(boxed.clientWidth); // Độ rộng phần tử trừ đi boder
log(boxed.clientHeight); // Chiều cao phần tử
log(boxed.clientLeft); // vị trí so với bên trái của boder
log(boxed.clientTop); // vị trí so với phía trên của boder
// 3. windows.innerHeight, windows.outrtHeight, windows
log(window.innerHeight); // trong khung trang web của trình duyệt
log(window.outerHeight); // lấy cả khoảng cách bắt đầu của trình duyệt
log(window.innerWidth);
log(window.outerWidth);
// 4. selector.getBoundingClientReact() -> lấy ra vị trí (Toạ độ kích thước của phần từ)
log(boxed.getBoundingClientRect());
// left, x: vị trí của khối so với bên trái
// top: vị trí của khối so với phía trên
// bottom: chiều cao của khối + top
// right: độ rộng của khối + left
// width: độ rộng
// height: chiều cao
// sự khác nhau giữa node List và HTML Collection
const li = document.getElementsByTagName("li") // HTML Collection
const li2 = document.querySelector("li");
log(li);
log(li2);
// Điểm giống: có thể truy cấp bằng index, có độ dài (length), giống mãng nhưng không hẳn là mảng tức là không sữ dụng được những phương thức đã học như pop, shift, push, map, filter
// HTML Colection: không sử được forEach
// NodeList: sử dụng được forEach
for (let i = 0; i < li.length; i++) {
   log(li[i]);
}
// Sự khác nhau giữa parrentNode và parentElement
// parentElement có thể null
// document.documentElement -> lấy thẻ html
log(document.documentElement.parentElement);
log(document.documentElement.parentNode);