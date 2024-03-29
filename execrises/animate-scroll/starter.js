document.addEventListener("DOMContentLoaded", function () {
   const images = document.querySelectorAll(".container img");
   window.addEventListener("scroll", function (e) {
      const windowScrollTop = window.pageYOffset;
      [...images].forEach((item) => {
         if (windowScrollTop > item.offsetTop - (item.offsetHeight / 1.5)) {
            item.classList.add("active");
         } else {
            item.classList.remove("active");
         }
      });
   });
});
