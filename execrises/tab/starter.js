const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
// Chuyển thành mảng
[...tabItem].forEach(item => item.addEventListener('click', handleTabClick));
function handleTabClick(event) {
   // Xoá class active khi nhấn vào tabItem
   [...tabItem].forEach(item => item.classList.remove("active"));
   // Thêm class active khi click vào tabItem
   event.target.classList.add("active");
   // Active tabContent
   // Lấy dataset từ tabItem
   const tabNumber = (event.target.dataset.tab);
   // Xoá class active từ tabContent khi tabItem được click vào
   [...tabContent].forEach(item => {
      item.classList.remove("active");
      // Check điều kiện để thêm class
      // Nếu data-tab của tabContent === với data-tab với tabItem thì add class active
      if (item.getAttribute("data-tab") === tabNumber) {
         item.classList.add("active");
      }
   })
}