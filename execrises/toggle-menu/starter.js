const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event) {
   event.target.classList.toggle("fa-times");
   event.target.classList.toggle("fa-bars");
   menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
   // console.log(event.target);
   // Selector.contains: kiểm tra element có chứa element khác không
   // event.target.matches("selector")
   //  Phương thức match() dùng để trả về ký tự (hoặc chuỗi ký tự) trùng khớp với ký tự (hoặc chuỗi ký tự) mà bạn muốn tìm kiếm bên trong một chuỗi nào đó.
   // Nếu menu không có chứa target mình nhấn vào và target nhấn vào không phải là menu toggle thì xoá class is-show
   if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
      menu.classList.remove("is-show");
      toggle.classList.remove("fa-times");
      toggle.classList.add("fa-bars");
   }
}
// tới 160     