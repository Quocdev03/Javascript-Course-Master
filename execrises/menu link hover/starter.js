window.addEventListener('load', function () {
   const link = document.querySelectorAll(".menu-link");
   [...link].forEach((item) => item.addEventListener('mouseenter', handleHoverLink));
   const line = document.createElement("div");
   line.className = "line-effect";
   document.body.appendChild(line);
   function handleHoverLink(event) {
      const { left, top, height, width } = event.target.getBoundingClientRect();
      console.log({ left, top, width, height });
      const offsetBottom = 5;
      line.style.width = `${width}px`;
      line.style.left = `${left}px`;
      line.style.top = `${top + height + offsetBottom}px`;
   }
   const menu = document.querySelector(".menu");
   menu.addEventListener('mouseleave', function (event) {
      line.style.width = 0;
   })
});