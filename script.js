function updateTimers() {
  const now = new Date().getTime();
  const startDate = new Date('2022-10-23T00:00:00+03:00').getTime();
  const endDate = new Date('2024-10-27T00:00:00+03:00').getTime();

  const upperTimerElement = document.getElementById('upper-timer');
  const lowerTimerElement = document.getElementById('lower-timer');
  const sandElement = document.getElementById('sand');

  const upperTimeRemaining = endDate - now;
  const lowerTimeElapsed = now - startDate;

  const upperDays = Math.floor(upperTimeRemaining / (1000 * 60 * 60 * 24));
  const upperHours = Math.floor((upperTimeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const upperMinutes = Math.floor((upperTimeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const upperSeconds = Math.floor((upperTimeRemaining % (1000 * 60)) / 1000);

  const lowerDays = Math.floor(lowerTimeElapsed / (1000 * 60 * 60 * 24));
  const lowerHours = Math.floor((lowerTimeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const lowerMinutes = Math.floor((lowerTimeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  const lowerSeconds = Math.floor((lowerTimeElapsed % (1000 * 60)) / 1000);

  upperTimerElement.textContent = `${upperDays}d ${upperHours}h ${upperMinutes}m ${upperSeconds}s`;
  lowerTimerElement.textContent = `${lowerDays}d ${lowerHours}h ${lowerMinutes}m ${lowerSeconds}s`;

  const sandHeight = (lowerTimeElapsed / (endDate - startDate)) * 100;
  sandElement.style.height = `${sandHeight}%`;
}

updateTimers();
setInterval(updateTimers, 1000);
