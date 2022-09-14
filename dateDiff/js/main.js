import { timer, startTimer } from './timer.js';
import { handler } from './handler.js';
import getDateDiff from './getDateDiff.js';
import { printError, printResult } from './printResult.js';

const switcher = document.querySelector('#switcher');
switcher.addEventListener('click', handler);

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
startButton.addEventListener('click', startTimer);
// TODO: запуск таймера после остановки, продолжить отчет времени с момента остановки.
stopButton.addEventListener('click', () => {
  clearInterval(timer);
});

const form = document.getElementById('datecalc');
form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const firstDate = formData.get('firstDate');
  const secondDate = formData.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Выберите даты!');
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate);
    printResult(dateDiff);
  }
};