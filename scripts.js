// variables

let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let seconds = "00";

// display
window.onload = () => {
  document.getElementById("minutes").innerHTML = workTime;
  document.getElementById("seconds").innerHTML = seconds;

  workTitle.classList.add("active");
};

// start timer
function start() {
  // change the time
  seconds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  // countdown

  let timerFunction = () => {};

  // start countdown
  setInterval(timerFunction, 1000); // 1000 = 1s
}
