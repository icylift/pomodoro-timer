// variables

let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 1;
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

  let timerFunction = () => {
    // change the display
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    // start
    seconds = seconds - 1;
  };

  if (seconds === 0) {
    workMinutes = workMinutes - 1;
    if (workMinutes === -1) {
      if (breakCount % 2 === 0) {
        // start break
        workMinutes = breakMinutes;
        breakCount++;

        // change the painel
        workTitle.classList.remove("active");
        breakTitle.classList.remove("active");
      } else {
        // continue work
        workMinutes = workTime;
        breakCount++;
      }
    }
    seconds = 59;
  }
}

// start countdown
setInterval(timerFunction, 1000); // 1000 = 1s
