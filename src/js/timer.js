import { formatError } from "./common";
import { setTimer } from "./timerCalc";

export const timerForm = document.forms.timer__form;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const error = document.getElementById("error");
const ring = new Audio("../assets/digger.mp3");

start.addEventListener("click", handleClickStartTimer);
stop.addEventListener("click", handleClickStopTimer);

let timerId = null;

function handleClickStartTimer(e) {
  e.preventDefault();

  if (!timerId) {
    debugger;
    error.innerHTML = "";
    let time = timerForm.elements.time.value;

    if (time) {
      timerId = setInterval(() => {
        const timer = setTimer(time);

        if (timer) {
          timerForm.elements.time.value = timer;
          time = timer;
        } else {
          clearInterval(timerId);
          ring.play();
        }
      }, 1000);
    } else error.innerHTML = formatError("Введите время");
  }
}

function handleClickStopTimer(e) {
  e.preventDefault();

  clearInterval(timerId);
  timerId = null;
  ring.pause();
}
