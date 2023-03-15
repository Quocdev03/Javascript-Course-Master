const button = document.querySelector(".button");
// mousemove, mouseover, mouenter, mouseleave
// button.addEventListener('mousemove', function () {
//    console.log("Mouse move");
// });
// mouseover: chạy khi rê chuột vào phần tử và con của phần tử đó
// button.addEventListener('mouseover', function () {
//    console.log("Mouse move");
// });
// mouseenter: chỉ chọn duy nhất 1 phần tử
// button.addEventListener('mouseenter', function () {
//    console.log("Mouse move");
// });
// mouseleave: chạy khi rê chuột vào phần tử và rê ra ngoài
// button.addEventListener('mouseleave', function () {
//    console.log("Mouse move");
// });
// pageX, pageY, clientX, clientY
document.addEventListener("mousemove", function (event) {
   console.log(`pageY: ${event.pageY}`);
   console.log(`clientY: ${event.clientY}`);
});
// clientY: nó sẽ lấy toạ độ theo viewport
// pageY: nó sẽ lấy toạ độ của document, khi mà có scrol thì nó sẽ thay đổi.
// X: chiều ngang
// Y: chiều dọc