const progress = document.querySelector('.progress');
window.addEventListener("scroll", function (e) {
   // const scrollTop = document.documentElement.scrollTop;
   // khoảng cách của scrollbar so với phía trên khi scroll;
   const scrollTop = window.pageYOffset;
   // chiều cao của document bao gồm scrollbar document.documentElement.scrollHeight
   // chiều cao của document không bao gồm document.documentElement.clientHeight
   // Tính ra chiều cao thật của scrollbar
   const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
   const width = (scrollTop / height) * 100;
   console.log(width);
   progress.style.width = `${width}%`;
});