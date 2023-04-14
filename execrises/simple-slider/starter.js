window.addEventListener("load", function () {
   const slides = document.querySelector(".slider");
   const slidesMain = document.querySelector(".slider-main");
   const slidesItems = document.querySelectorAll(".slider-item");
   const nextBtn = document.querySelector(".slider-next");
   const prevBtn = document.querySelector(".slider-prev");
   const dotItems = document.querySelectorAll(".slider-dot-item");
   const slidesItemWidth = slidesItems[0].offsetWidth;
   const slidesLenght = slidesItems.length;
   let positionX = 0;
   let index = 0;

   nextBtn.addEventListener("click", function () {
      handleChangeSlide(1);
   });

   prevBtn.addEventListener("click", function () {
      handleChangeSlide(-1);
   });

   [...dotItems].forEach((item) =>
      item.addEventListener("click", function (e) {
         [...dotItems].forEach((dot) => dot.classList.remove("active"));
         e.target.classList.add("active");
         const slideIndex = parseInt(e.target.dataset.index);
         index = slideIndex;
         positionX = -1 * index * slidesItemWidth;
         slidesMain.style = `transform: translateX(${positionX}px)`;
      })
   );

   function handleChangeSlide(direction) {
      if (direction === 1) {
         if (index >= slidesLenght - 1) {
            index = slidesLenght - 1;
            return;
         };
         positionX = positionX - slidesItemWidth;
         slidesMain.style = `transform: translateX(${positionX}px)`;
         index += 1;
         console.log(index);
      } else if (direction === -1) {
         if (index <= 0) {
            index = 0;
            return;
         };
         positionX = positionX + slidesItemWidth
         slidesMain.style = `transform: translateX(${positionX}px)`;
         index -= 1;
         console.log(index);
      }
      [...dotItems].forEach((dot) => dot.classList.remove("active"));
      dotItems[index].classList.add("active");
   }
});