const result = document.getElementById('datecalc__result')

export const printError = (errText) => {
  result.innerText = errText;
  result.style.color = 'red';
}

export const printResult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
}