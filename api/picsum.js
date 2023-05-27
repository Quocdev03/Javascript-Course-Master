const imageList = document.querySelector(".images");
const loadMore = document.querySelector(".load-more");
const loading = document.querySelector(".image-loader");
loadMore.style.display = "none";
const limit = 4;
const endPoint = `https://picsum.photos/v2/list?limit=${limit}`;
let page = 1;
function imageTemplate(url) {
   const template = ` <div class="image-item">
   <img src="${url}" alt="">
</div>`;
   imageList.insertAdjacentHTML("beforeend", template);
}

async function fetchImage(page = 1) {
   loading.style.display = "block";
   const response = await fetch(`${endPoint}&page=${page}`);
   const images = await response.json();
   if (images.length > 0 && Array.isArray(images)) {
      loading.style.display = "none";
      loadMore.style.display = "block";
      [...images].forEach((item) => {
         imageTemplate(item.download_url);
      });
   }
}
async function handleLoadMore() {
   page++;
   await fetchImage(page);
}
loadMore.addEventListener("click", handleLoadMore);
fetchImage();
//336