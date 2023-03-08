const button = document.querySelector(".change")
button.addEventListener("click", handleChangeColor);
const colors = [
   "#ffa400",
   "#00aefd",
   "#ff6bcb",
   "#07a787",
   "#2979ff",
   "#e74c3c",
   "#3D6EF7",];
function handleChangeColor() {
   // document.body.setAttribute("style", "background-color: red");
   // Lấy random từ mảng color
   // yourArray[Math.floor(Math.random() * yourArray.length)];
   const color = colors[Math.floor(Math.random() * colors.length)];
   document.body.style.backgroundColor = color;
}
