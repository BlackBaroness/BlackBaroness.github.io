function updateTimers() {
  const now = new Date().getTime();
  
  const startTime = new Date('2022-10-23T00:00:00+03:00').getTime();
  const endTime = new Date('2024-10-27T00:00:00+03:00').getTime();
  
  const timePassed = now - startTime;
  const timeRemaining = endTime - now;

  const timePassedElement = document.getElementById('timePassed');
  timePassedElement.innerHTML = getTimeString(timePassed);

  const timeRemainingElement = document.getElementById('timeRemaining');
  timeRemainingElement.innerHTML = getTimeString(timeRemaining);
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
