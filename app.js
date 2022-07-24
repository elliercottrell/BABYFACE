let countDownDate = new Date("Jan 1, 2023 00:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " DAYS ";

  document.getElementById("hours").innerHTML = hours + " HOURS ";

  document.getElementById("minutes").innerHTML = minutes + " MINUTES ";

  document.getElementById("seconds").innerHTML = seconds + " SECONDS ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
