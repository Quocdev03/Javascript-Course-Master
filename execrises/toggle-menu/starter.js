// const toggle = document.querySelector(".menu-toggle");
// const menu = document.querySelector(".menu");
// toggle.addEventListener("click", handleToggleMenu);
// function handleToggleMenu(event) {
//    event.target.classList.toggle("fa-times");
//    event.target.classList.toggle("fa-bars");
//    menu.classList.toggle("is-show");
// }
// // Chọn toàn bộ html
// document.addEventListener("click", handleClickOutMenu);
// function handleClickOutMenu(event) {
//    // console.log(event.target);
//    // Selector.contains: kiểm tra element có chứa element khác không
//    // event.target.matches("selector")
//    //  Phương thức match() dùng để trả về ký tự (hoặc chuỗi ký tự) trùng khớp với ký tự (hoặc chuỗi ký tự) mà bạn muốn tìm kiếm bên trong một chuỗi nào đó.
//    // Nếu menu không có chứa Element mình nhấn vào và Element nhấn vào không phải là menu toggle thì xoá class
//    if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
//       menu.classList.remove("is-show");
//       toggle.classList.remove("fa-times");
//       toggle.classList.add("fa-bars");
//    }
// }
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener('click', handleToggleMenu);
function handleToggleMenu(e) {
   menu.classList.toggle("is-show");
   e.target.classList.toggle("fa-times");
   e.target.classList.toggle("fa-bars");
}
document.addEventListener('click', handleClickOutMenu);
function handleClickOutMenu(e) {
   if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
      menu.classList.remove("is-show");
      toggle.classList.remove("fa-times");
      toggle.classList.add("fa-bars");
   }
}