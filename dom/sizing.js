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