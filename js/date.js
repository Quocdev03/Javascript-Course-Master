const now = new Date();
// Build-in Object
console.log(now);
// Mon Jan 30 2023 16:43:18 GMT+0700 (Indochina Time)
// Time Zone: GMT+0700 (Indochina Time)
// Secound: 18
// Minute: 43
// Hour: 16
// Year: 2023
// Month: January
// Day 30
// Day of the week: Monday
// Time stamp & Epoch time
// Unix time
// timestamp tính ra kết quả là milisecound
console.log(now.getTime()); // Print time stamp
// console.log(new Date(0));
// new Date() -> In ra ngày giời hiện tại
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ
// new Date(date string)->
// new Date(Year, month. day. hours. minutes. secounds. milisecounds)
console.log(new Date(1675072438433));
console.log(new Date("Mon Jan 30 2023 16:53:58 GMT+0700 (Indochina Time)"));
console.log(new Date(2023, 5, 1, 23, 24, 32));
// Các hàm get trong Date
const birthday = new Date(2003, 4, 6);
// In ra năm
console.log(birthday.getFullYear()); //2003
// In ra tháng
// getmonth(): 0-11
// 0 tháng 1(Jan) 11 tháng 12 (Dec)
console.log(birthday.getMonth()); // 4
// In ra ngày của tháng: 1 -> 31
console.log(birthday.getDate());
// In ra thứ của tuần
// 0-6:
// 0: chủ nhật, 6 thứ 7
console.log(birthday.getDay());
// In ra giờ
console.log(birthday.getHours());
// In ra phút
console.log(birthday.getMinutes());
// In ra giây
console.log(birthday.getSeconds());
// In ra mili giây
console.log(birthday.getMilliseconds());
// In ra timestamp
console.log(birthday.getTime());

// Các hàm set trong date
console.log(`My Birthday: ${birthday}`);
birthday.setFullYear(2023);
birthday.setMonth(4);
birthday.setDate(30);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
birthday.setMilliseconds(23);
console.log(`My Birthday After Update: ${birthday}`);

// UTC
// In ra năm
console.log(birthday.getUTCFullYear()); //2003
// In ra tháng
// getmonth(): 0-11
// 0 tháng 1(Jan) 11 tháng 12 (Dec)
console.log(birthday.getUTCMonth()); // 4
// In ra ngày của tháng: 1 -> 31
console.log(birthday.getUTCDate());
// In ra thứ của tuần
// 0-6:
// 0: chủ nhật, 6 thứ 7
console.log(birthday.getUTCDay());
// In ra giờ
console.log(birthday.getUTCHours());
// In ra phút
console.log(birthday.getUTCMinutes());
// In ra giây
console.log(birthday.getUTCSeconds());
// In ra mili giây
console.log(birthday.getUTCMilliseconds());

//
console.log(now.toDateString()); // Mon Jan 30 2023
console.log(now.toTimeString()); // 20:11:30 GMT+0700 (Indochina Time)
console.log(now.toLocaleDateString()); // m/dd/yyyy -> 1/30/2023
console.log(now.toLocaleDateString("vi-VN")); // 30/1/2023
console.log(now.toISOString()); // 2023-01-30T13:13:32.491Z

// Bài tập
// input: Mon Jan 30 2023 16:53:58 GMT+0700 (Indochina Time)
const myTime = new Date("Mon Jan 30 2023 16:53:58 GMT+0700 (Indochina Time)");
const myYear = myTime.getFullYear(); // Get Year
const myMonth = myTime.getMonth() + 1; // Get Month
const myDay = myTime.getDate(); // Get Day
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDay}/${prefixMonth}${myMonth}/${myYear}`);
// SetTimeout vs setInterval
// setTimeout(function () {
//    alert("Call me after 3 second!");
// }, 3000);

const timer = setInterval(function () {
   console.log("Call me!");
}, 1000);
clearInterval(timer);
