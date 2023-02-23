// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi - Dễ
// năm hiện tại - năm sinh
function getAge(year) {
   // year = parseInt(prompt("Nhập vào năm sinh!"))
   if (typeof year !== "number") return 0;
   const now = new Date();
   const currentYear = now.getFullYear();
   return currentYear - year;
}
let result = getAge();
// console.log(`Tuổi của bạn là: ${result}`)

// 2. Viết chương trình đếm ngược thời gian theo từng giây ( Count Down ) dựa vào thời gian đầu vào. Ví dụ thời gian làm bài tập là 30 phút nếu chạy về 0 thì thông báo đã kết thúc thời gian - Trung Bình
function coundown(minutes = 1) {
   let secound = minutes * 60;
   let counter = 0
   const timer = setInterval(function () {
      counter += 1;
      console.log(counter);
      if (counter === secound) {
         console.log("Your Time End");
         clearInterval(timer);
      }
   }, 1000)
}
// const endTime = coundown(1);
// console.log(endTime)

// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại, ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước` - khó
function timeSince(date) {
   // Current Time - Date
   // Lấy thời gian hiện tại
   const now = new Date();
   // Biến để lưu thời gian được nhập vào
   const yourDate = new Date(date);
   // Lấy thời gian hiện tại - thời gian được nhập vào
   const secounds = Math.floor((now.getTime() - yourDate.getTime()) / 1000); // In ra số giây
   let timer = secounds / 31536000;
   if (timer > 1) {
      console.log(`${Math.floor(timer)} năm trước`);
      return;
   }
   timer = secounds / 2678400;
   if (timer > 1) {
      console.log(`${Math.floor(timer)} tháng trước`);
      return;
   }
   timer = secounds / 604800;
   if (timer > 1) {
      console.log(`${Math.floor(timer)} tuần trước`);
      return;
   }
   timer = secounds / 86400;
   if (timer > 1) {
      console.log(`${Math.floor(timer)} ngày trước`);
      return;
   }
   timer = secounds / 3600;
   if (timer > 1) {
      console.log(`${Math.floor(timer)} giờ trước`);
      return;
   }
   timer = secounds / 60;
   if (timer > 1) {
      console.log(`${Math.floor(timer)} phút trước`);
      return;
   }
   timer = secounds;
   if (timer > 1) {
      console.log(`${Math.floor(timer)} giây trước`);
      return;
   }
}
timeSince("Tue Jan 31 2023 13:21:52 GMT+0700 (Indochina Time)")

// `3 phút trước`, `3 ngày trước`, `2 tháng trước`, `30 giây trước`, `1 năm trước`
// 1 năm = 365 * 24 * 60 * 60 = 31536000
// 1 Tháng = 32 * 24 * 60 * 60 = 2678400
// 1 Tuần = 7 * 24 * 60 * 60 = 604800
// 1 Ngày = 1 * 24 * 60 * 60 = 86400
// 1 Giờ = 1 * 60 * 60 = 3600
// 1 Phú = 1 * 60 = 60