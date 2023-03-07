// addEventListener
const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handleClick() {
   console.log("click button")
}
// Lỗi sai khi function vào eventListener
// button.addEventListener("click", handleClick());
// Đúng
// button.addEventListener("click", handleClick);
// // event: e
// span.addEventListener("click", function (e) {
//    // e.stopPropagation();
//    e.stopImmediatePropagation();
//    console.log("Click span ")
// });

// span.addEventListener("click", function (e) {
//    e.stopPropagation();
//    console.log("Click span 2 ");
// });

// document.body.addEventListener("click", function () {
//    console.log("Click body");
// });

// bubbling: nỗi bọt sự kiện chạy từ trong ra ngoài
// capture: từ ngoài vào trong
// target vs currentTarget
button.addEventListener("click", function (event) {
   console.log(`event.target: ${event.target}`);
   // event.terget: nó sẽ chọn element mà mình click tới
   console.log(`event.Currtarget: ${event.currentTarget}`);
   // event.currentTarget: nó sẽ chọn chính xác phần mà mình click tới
})
// event.preventDefault(): ngăn chặn vi default
const link = document.querySelector(".link");
link.addEventListener("click", function (e) {
   e.preventDefault();
   console.log("click me");
})