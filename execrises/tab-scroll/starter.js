window.addEventListener("load", function () {
   const tabItem = document.querySelectorAll(".tab-item");
   const tabList = document.querySelector(".tab-list");
   const tab = document.querySelector(".tab");
   const tabOffSetLeft = tab.offsetLeft;
   [...tabItem].forEach((item) => item.addEventListener("click", handleListner));
   function handleListner(e) {
      [...tabItem].forEach((item) => item.classList.remove("active"));
      e.target.classList.add("active");
      let letSpacing = e.target.offsetLeft - tabOffSetLeft;
      tabList.scroll(letSpacing / 2, 0);
   }
});