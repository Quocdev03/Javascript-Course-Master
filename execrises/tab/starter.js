const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
// Chuyển tabItem thành mảng
[...tabItem].forEach(item => item.addEventListener('click', handleTabClick));
function handleTabClick(event) {
   // Xoá hết tất cả class active ở các tab item
   [...tabItem].forEach(item => item.classList.remove("active"));
   // sau đó add class active vào tab vừa click
   event.target.classList.add("active");
   // Phần tabContent
   // Lấy data-tab từ nút button
   const tabNumber = event.target.dataset.tab;
   [...tabContent].forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("data-tab") === tabNumber) {
         item.classList.add("active");
      }
   });
   // [...tabContent][tabNumber-1].classList.add("active");
}