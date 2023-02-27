/*
   
*/
const template = `
<div class="modal">
<div class="modal-content">
   <i class="modal-close fa fa-times"></i>
   <p class="modal-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
      debitis beatae officiis ex esse sint eveniet voluptatum enim dolores? Distinctio, amet.
      Facere dolorem laboriosam quidem, sapiente consequuntur tempora culpa ullam?
   <div class="modal-action">
      <button class="modal-submit">Confirm</button>
      <button class="modal-cancel">Cancel</button>
   </div>
   </p>
</div>
</div>`;
const body = document.body;
body.insertAdjacentHTML("afterbegin", template);

const modal = document.querySelector(".modal");
if (modal) {
   setTimeout(function () {
      modal.classList.add("is-show")
   }, 3000)
}
// tới 137