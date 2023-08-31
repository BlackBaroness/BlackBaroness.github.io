function updateTimers() {
  const now = new Date().getTime();

  const startTime = new Date('2022-10-23T00:00:00+03:00').getTime();
  const endTime = new Date('2024-10-27T00:00:00+03:00').getTime();

  const timePassed = now - startTime;
  const timeRemaining = endTime - now;

  document.getElementById('timePassed').innerHTML = getTimeString(timePassed);
  document.getElementById('timeRemaining').innerHTML = getTimeString(timeRemaining);
  document.getElementById('timeUntilAnniversary').innerHTML = `${getTimeString(calculateTimeUntilNext23rd())} (это будет ${getMonthNumber()} месяц)`;
}

function calculateTimeUntilNext23rd() {
  const now = new Date();
  const utcOffset = 3 * 60; // GMT+3 in minutes

  // Calculate the UTC time
  const utcTime = now.getTime() + now.getTimezoneOffset() * 60 * 1000;

  // Adjust for the desired timezone (GMT+3)
  const localTime = new Date(utcTime + utcOffset * 60 * 1000);

  let targetDate;

  if (localTime.getDate() >= 23) {
    // If the current date is 23 or later in the month, move to the next month
    targetDate = new Date(localTime.getFullYear(), localTime.getMonth() + 1, 23);
  } else {
    // Otherwise, stay in the current month
    targetDate = new Date(localTime.getFullYear(), localTime.getMonth(), 23);
  }

  // Calculate the time difference
  const timeUntilNext23rd = targetDate - localTime;
  return timeUntilNext23rd
}

function getMonthNumber() {
  const now = new Date();
  const baseDate = new Date(2022, 9, 23); // October is month 9

  const monthsDiff = (now.getFullYear() - baseDate.getFullYear()) * 12 + now.getMonth() - baseDate.getMonth();
  return monthsDiff + 1; // Adding 1 to get the ordinal number
}


function getTimeString(timeInMilliseconds) {
  const days = Math.floor(timeInMilliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeInMilliseconds % (1000 * 60)) / 1000);

  return `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

updateTimers();
setInterval(updateTimers, 1000);