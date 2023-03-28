window.addEventListener("load", function () {
   function renderSweetAlert() {
      const template = `<div class="sweet-alert">
      <i class="fa fa-check sweet-icon"></i>
      <p class="sweet-text">Congratulation on learning Javscript</p>
      </div>`;
      document.body.insertAdjacentHTML("beforeend", template);
   }
   const button = document.querySelector(".button");
   button.addEventListener("click", function (e) {
      renderSweetAlert();
      const sweetItem = document.querySelector(".sweet-alert");
      if (sweetItem) {
         setTimeout(function () {
            document.querySelector(".sweet-alert").remove();
         }, 2000);
      }
   });
});