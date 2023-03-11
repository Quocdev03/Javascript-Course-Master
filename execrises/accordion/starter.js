const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach((item) => item.addEventListener('click', handleClickAccordion));
function handleClickAccordion(e) {
   // Lấy element phía sau accordion-header
   const content = e.target.nextElementSibling;
   // lấy chiều cao tối đa của element bao gồm cả boder padding
   const contentHeight = content.scrollHeight;
   // Gán height bằng scrollHeight vừa lấy
   content.style.height = `${contentHeight}px`;
   // Tạo biến lưu class active
   const activeClass = "is-active"
   // add class
   content.classList.toggle(activeClass);
   // check nếu content không có class active thì set height = 0px
   if (!content.classList.contains("is-active")) {
      content.style.height = "0px";
   }
   // Phần icon
   const icon = e.target.querySelector(".icon");
   icon.classList.toggle("fa-angle-down");
   icon.classList.toggle("fa-angle-up");
}
// tới 167