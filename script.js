// Функция для обновления таймера
function updateTimer(elementId, targetDate, isCountdown) {
    const now = new Date().getTime();
    let timeDelta = targetDate - now;

    if (isCountdown) {
      timeDelta = now - targetDate;
    }

    const days = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDelta % (1000 * 60)) / 1000);

    const displayText = `${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
    document.getElementById(elementId).textContent = displayText;
  }

  // Определение дат и вызов функций обновления таймеров
const targetDate1 = new Date("2024-10-27T00:00:00+03:00").getTime();
const targetDate2 = new Date("2022-10-23T00:00:00+03:00").getTime();
const anniversaryDay = 23; // День юбилея (например, 23 ноября)

setInterval(() => {
  updateTimer("countdown1", targetDate1, true);
  updateTimer("countdown2", targetDate2, false);
}, 1000);

// Обновление таймера до ближайшего месячного юбилея
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1; // Месяцы нумеруются с 0
const daysUntilAnniversary = anniversaryDay - currentDate.getDate();
const monthsUntilAnniversary = daysUntilAnniversary <= 0 ? 12 - currentMonth : 11 - currentMonth;
const nextAnniversaryDate = new Date(currentDate.getFullYear(), currentMonth + monthsUntilAnniversary - 1, anniversaryDay);
updateTimer("countdown3", nextAnniversaryDate, true);