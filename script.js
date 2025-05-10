let isWaiting = false;

function startEarning() {
  if (isWaiting) return;

  isWaiting = true;
  let timeLeft = 10;
  document.getElementById("countdown").innerText = `Time: ${timeLeft}s`;
  document.getElementById("reward").innerText = "";

  // Load Adsterra smart link
  const adLinks = [
    "https://www.profitableratecpm.com/gek6e26ws?key=8fc5fec2b6aa16de54e32b8a1a75c315"
  ];
  const randomAd = adLinks[Math.floor(Math.random() * adLinks.length)];
  document.getElementById("adFrame").src = randomAd;

  const countdownInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      document.getElementById("countdown").innerText = `Time: ${timeLeft}s`;
    } else {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerText = "Done!";
      document.getElementById("reward").innerText = "You earned $0.0001";
      isWaiting = false;
    }
  }, 1000);
}