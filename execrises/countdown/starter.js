window.addEventListener("load", function () {
   const daysText = document.querySelector(".days");
   const hoursText = document.querySelector(".hours");
   const minutesText = document.querySelector(".minutes");
   const secondsText = document.querySelector(".seconds");
   // Sat Apr 08 2023 09:50:13 GMT+0700 (Indochina Time)
   function countdown(date) {
      const endDate = new Date(date).getTime(); //1680922514717
      let currentDate = new Date().getTime();
      if (isNaN(endDate) || endDate - currentDate <= 0) return;
      setInterval(calculate, 1000);
      function calculate() {
         let days, hours, minutes, seconds;
         const now = new Date();
         //convert to timestamp
         const startDate = now.getTime(); //1680922462182
         // time remaining calculate to seconds
         let timeRemaining = parseInt((endDate - startDate) / 1000);
         if (timeRemaining > 0) {
            // 1 ngày = 24 * 60 * 60 = 86400
            days = parseInt(timeRemaining / 86400);
            timeRemaining = timeRemaining % 86400;
            // 1 giờ = 60 * 60 = 3600
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = timeRemaining % 3600;
            // 1 phút = 60
            minutes = parseInt(timeRemaining / 60);
            // 1 giây
            timeRemaining = timeRemaining % 60;
            seconds = parseInt(timeRemaining);
            daysText.textContent = `0${days}`.slice(-2);
            hoursText.textContent = `0${hours}`.slice(-2);
            minutesText.textContent = `0${minutes}`.slice(-2);
            secondsText.textContent = `0${seconds}`.slice(-2);
         } else {
            return;
         }
      }

   }
   countdown("Sat Apr 16 2023 09:50:13 GMT+0700 (Indochina Time)");
   // setInterval(function () {
   // }, 1000);
});
//256