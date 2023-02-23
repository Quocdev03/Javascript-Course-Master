// 1. textContent -> Lấy hết cả nội dung bao gồm cả khoảng trắng
const spinner = document.querySelector("#spinner");
// Thay đổi text content
// 2. innerText -> Chỉ lấy text không lấy khoảng trắng, và không lấy được text đã bị ẩn đi
console.log(spinner.textContent);
console.log(spinner.innerText);
spinner.textContent = `<div class="demo">Hello HTML</div>`;
// 3. innerHTML -> Lấy ra nội dung của selector bao gồm cả html
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">Hello HTML</div>`;