/*
   
*/
const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content")
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("p")
modalDesc.className = "modal-desc";
modalDesc.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa debitis beatae officiis ex esse sint eveniet voluptatum enim dolores? Distinctio, amet. Facere dolorem laboriosam quidem, sapiente consequuntur tempora culpa ullam?";
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.className = "modal-action";
const modalSubmit = document.createElement("button");
modalSubmit.className = "modal-submit";
const modalCancel = document.createElement("button");
modalCancel.className = "modal-cancel";
modalSubmit.textContent = "Confirm";
modalCancel.textContent = "Cancel";
modalAction.appendChild(modalSubmit);
modalAction.appendChild(modalCancel);
modalContent.appendChild(modalAction);
document.body.appendChild(modal);
// const template = `
// <div class="modal">
// <div class="modal-content">
//    <i class="modal-close fa fa-times"></i>
//    <p class="modal-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
//       debitis beatae officiis ex esse sint eveniet voluptatum enim dolores? Distinctio, amet.
//       Facere dolorem laboriosam quidem, sapiente consequuntur tempora culpa ullam?
//    <div class="modal-action">
//       <button class="modal-submit">Confirm</button>
//       <button class="modal-cancel">Cancel</button>
//    </div>
//    </p>
// </div>
// </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);

const modalwrapper = document.querySelector(".modal");
if (modalwrapper) {
   setTimeout(function () {
      modalwrapper.classList.add("is-show");
   }, 2000)
}
// tới 138