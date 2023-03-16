window.addEventListener("load", function () {
   const imageCover = document.querySelector(".image-cover");
   imageCover.addEventListener("mousemove", handleHoverImage);
   const imageWrapper = document.querySelector(".image-wrapper");
   const image = document.querySelector(".image");
   let imageWrapperWidth = imageWrapper.offsetWidth;
   let imageWrapperHeight = imageWrapper.offsetHeight;
   function handleHoverImage(e) {
      const pX = e.pageX;
      const pY = e.pageY;
      image.style = "width: auto; height: auto; max-height: unset;";
      let imageWidth = image.offsetWidth;
      let imageHeight = image.offsetHeight;
      let spacex = (imageWidth / 2 - imageWrapperWidth) * 2;
      let spacey = (imageHeight / 2 - imageWrapperHeight) * 2;
      imageWidth = imageWidth + spacex;
      imageHeight = imageHeight + spacey;
      let ratioX = imageWidth / imageWrapperWidth / 2;
      let ratioY = imageHeight / imageWrapperHeight / 2;
      let x = (pX - imageWrapper.offsetLeft) * ratioX;
      let y = (pY - imageWrapper.offsetTop) * ratioY;
      image.style = `left: ${-x}px; top: ${-y}px; height: auto; width: auto; max-height: unset; transform: none;`;
   }
   imageCover.addEventListener("mouseleave", handleLeaveImage);
   function handleLeaveImage(e) {
      image.style = "";
   };
});

// 187