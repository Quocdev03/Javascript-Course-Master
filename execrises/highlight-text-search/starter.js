window.addEventListener("load", function () {
   const input = document.querySelector(".input-search");
   const items = document.querySelectorAll(".dropdown-item");
   input.addEventListener("keypress", handleHighlight);
   let filter = "";
   function handleHighlight(e) {
      filter = filter + e.key;
      filter = filter.toLowerCase();
      console.log(filter);
      [...items].forEach((item) => {
         const text = item.textContent.toLowerCase();
         const index = text.indexOf(filter);
         console.log(index);
      })
   }
});
// tới 202