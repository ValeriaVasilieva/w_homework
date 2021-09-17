import { dateCalcForm } from "./dateCalc";
import { timerForm } from "./timer";
import { toggleRoutes } from "./common";

const dateCalc = document.querySelector(".datecalc-btn");
const timer = document.querySelector(".timer-btn");

dateCalc.addEventListener("click", () => toggleRoutes(timerForm, dateCalcForm));
timer.addEventListener("click", () => toggleRoutes(dateCalcForm, timerForm));
