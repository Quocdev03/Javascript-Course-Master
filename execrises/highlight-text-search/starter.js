window.addEventListener("load", function () {
   const input = document.querySelector(".input-search");
   const items = document.querySelectorAll(".dropdown-item");
   input.addEventListener("input", handleHighlight);
   // input nó sẽ lấy giá trị mỗi khi chúng ta gỏ
   function handleHighlight(e) {
      let filter = "";
      filter = filter + e.target.value;
      filter = filter.toLowerCase();
      // console.log(filter);
      [...items].forEach((item) => {
         const text = item.textContent;
         const index = text.toLowerCase().indexOf(filter);
         // console.log(index);
         if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
            item.innerHTML = `${text.substring(0, index)}<span class="primary">${text.substring(index, index + filter.length)}</span>${text.substring(index + filter.length)}`;
         }
      });
   }
});
// tới 202