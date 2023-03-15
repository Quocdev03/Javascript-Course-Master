window.addEventListener('load', function () {
   const text = document.querySelector(".text");
   text.addEventListener('mouseenter', function (event) {
      const title = event.target.dataset.tooltip;
      const tooltipDiv = document.createElement("div");
      tooltipDiv.className = "tooltip-text";
      tooltipDiv.textContent = title;
      document.body.appendChild(tooltipDiv);
      // Lấy toạ độ của phần tử khi rê chuột vào
      const cords = event.target.getBoundingClientRect();
      console.log(cords);
      const { left, top, width, height } = cords;
      const tooltipHeight = tooltipDiv.offsetHeight;
      const triangleHeight = 20;
      tooltipDiv.style.left = `${left - width / 2}px`;
      tooltipDiv.style.top = `${top - tooltipHeight - triangleHeight}px`;
   });
   text.addEventListener('mouseleave', function (event) {
      const tooltip = document.querySelector(".tooltip-text");
      if (!tooltip) return; {
         tooltip.parentNode.removeChild(tooltip);
      }
   });
});