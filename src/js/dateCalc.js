import { formatError } from "./common";
import { diffDate, diffToHtml } from "./diff";

export const dateCalcForm = document.getElementById("dateCalc__form");
const resultElement = document.getElementById("dateCalc__result");

dateCalcForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  resultElement.innerHTML = "";

  let { firstDate, secondDate } = e.target.elements;
  firstDate = firstDate.value;
  secondDate = secondDate.value;

  if (firstDate > secondDate) {
    [firstDate, secondDate] = [secondDate, firstDate];
  }

  if (firstDate && secondDate) {
    const result = diffToHtml(diffDate(firstDate, secondDate));
    resultElement.innerHTML = result;
  } else resultElement.innerHTML = formatError("Для расчета введите две даты");
}
