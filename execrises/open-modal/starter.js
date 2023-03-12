/*
<div class="modal">
      <div class="modal-content">
         <i class="fa fa-times modal-close"></i>
      </div>
   </div>
*/

// const button = document.querySelector(".button");
// const template = `<div class="modal">
// <div class="modal-content">
//    <i class="fa fa-times modal-close"></i>
// </div>
// </div>`;
// button.addEventListener('click', function () {
//    document.body.insertAdjacentHTML("beforeend", template);
// })
// document.body.addEventListener('click', function (event) {
//    console.log(event.target);
//    if (event.target.matches(".modal-close")) {
//       // handle close modal here
//       const modal = event.target.parentNode.parentNode; // modal
//       modal.parentNode.removeChild(modal);
//    } else if (event.target.matches(".modal")) {
//       console.log(event.target.parentNode);
//       event.target.parentNode.removeChild(event.target);
//    }
// });

// const modalClose = document.querySelector(".modal-close");
// modalClose.addEventListener('click', handleModalClose);
// function handleModalClose(event) {
//    console.log(event.target);
// }

const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-content">
   <i class="fa fa-times modal-close"></i>
</div>
</div>`;
button.addEventListener('click', function (e) {
   document.body.insertAdjacentHTML('beforeend', template);
})
document.body.addEventListener('click', function (e) {
   console.log(e.target);
   if (e.target.matches(".modal-close")) {
      const modal = e.target.parentNode.parentNode;
      modal.parentNode.removeChild(modal);
   } else if (e.target.matches(".modal")) {
      console.log(e.target.parentNode);
      e.target.parentNode.removeChild(e.target);
   }
})
// Tới 168