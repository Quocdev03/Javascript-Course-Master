const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach((item) => item.addEventListener('click', handleTabCLick));
function handleTabCLick(event) {
   console.log(event.target);
   // Xoá hết tất cả class active ở các tab-item
   [...tabItems].forEach(item => item.classList.remove("active"));
   // sau đó add class active vào tab vừa click
   event.target.classList.add("active");
}
// tới 161
