// 1. keydown hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener('keydown', function (e) {
   // console.log(e.key);
   // console.log(e.keyCode);
   // console.log(e.which);
   // ascii MDN
   // e.key: key nhập vào
   // if (e.key === 'Enter') {
   //    console.log("You hit enter!");
   // } else {
   //    console.log(e.key);
   // }
   // console.log(e.key);
});
// 2. keyup: Sự kiện sẽ sảy ra khi nhấn phím rồi thả ra
input.addEventListener('keyup', function (e) {
   // console.log(e.key);
   // e.preventDefault();
});
// 3.keypress: sự kiện xảy ra khi nhấn phím
// key press sẽ ignore các phím như delete, mũi tên, page up, page down home, end, ctrl, alt, shift, asc
input.addEventListener('keypress', function (e) {
   // console.log(e.key);
   // if (e.key === "Home") {
   //    console.log('Key up')
   // }
});
// Thứ tự ưu tiên keydown -> keypress -> keyup
// 4. change: xảy ra khi gõ xong nhấn Enter hoặc nhấn chuột ra ngoài
input.addEventListener('change', function (e) {
   // console.log("Working");
})
// 5. focus: khi nhấn vào
input.addEventListener('focus', function (e) {
   // console.log("Input is Focusing");
});
// 5. blur: khi nhấn ra
input.addEventListener('blur', function (e) {
   // console.log("Input is blur");
})
// 7. Submit form
const form = document.querySelector(".form");
form.addEventListener('submit', function (e) {
   e.preventDefault();
   // this, e.target
   // console.log(this);
   // console.log(e.target);
   // this.emelents
   // console.log(this.elements);
   // console.log(this.elements['username']);
   // console.log(this.elements['username'].value);
   const username = this.elements["gender"].value;
   const gender = this.elements["gender"].value;
   const hobby = this.querySelectorAll(`input[name="hobby"]`);
   console.log({ username, gender, hobby });
   let hobbyValue = [];
   [...hobby].forEach((item) => hobbyValue.push(item.value));
   console.log(hobbyValue);
   // stuck -> bị bí
})
// tới 199