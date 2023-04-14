const cardsArray = [
   {
      name: "fire",
      img: "img/fire.png",
   },
   {
      name: "youtube",
      img: "img/youtube.png",
   },
   {
      name: "flash",
      img: "img/flash.png",
   },
   {
      name: "gift",
      img: "img/gift.png",
   },
   {
      name: "tron",
      img: "img/tron.png",
   },
   {
      name: "ufo",
      img: "img/ufo.png",
   },
   {
      name: "plant",
      img: "img/plant.png",
   },
   {
      name: "burger",
      img: "img/burger.png",
   },
];
const grid = document.querySelector(".grid");
let count = 0;
let previousCards;
// .sort(() => 0.5 - Math.random()): random array
const cardsArrayMerge = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());
cardsArrayMerge.forEach((item) => {
   const card = document.createElement("div");
   card.classList = "card";
   card.setAttribute("data-name", item.name);
   // card.dataset.name = item.name;
   card.style.backgroundImage = `url(${item.img})`;
   grid.appendChild(card);
});
// grid.addEventListener("click", function (e) {
//    const clicked = e.target;
//    if (clicked.nodeName === "SECTION" || previousCards === clicked) {
//       return;
//    }
//    if (count < 2) {
//       count++;
//       clicked.classList.add("selected");
//    }
//    previousCards = clicked;
// });
grid.addEventListener("click", function (e) {
   const clicked = e.target;
   if (clicked.nodeName === "SECTION" || previousCards === clicked) {
      return;
   }
   if (count < 2) {
      clicked.classList.add("selected");
      count += 1;
   }
   previousCards = clicked;

});