import { Howl, Howler } from 'howler';
import { handler } from './handler.js';
import getDateDiff from './getDateDiff.js';
import { printError, printResult } from './printResult.js';

const sound = new Howl({
  src: ['sound.webm', 'sound.mp3'],
  sprite: {
    blast: [0, 3000],
    laser: [4000, 1000],
    winner: [6000, 5000]
  }
});
Howler.volume(0.5);

const switcher = document.querySelector('#switcher');
switcher.addEventListener('click', handler);

const timerInput = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const display = document.getElementById('display');

let timer;

startButton.addEventListener('click', () => {

  if (!timerInput.value) {
    return
  }
  let inputTime = parseInt(timerInput.value) * 60;
  timer = setInterval(() => {

    let seconds = inputTime % 60;
    let minutes = inputTime / 60 % 60;
    let hour = inputTime / 60 / 60 % 60;

    if (inputTime <= 0) {
      sound.play('blast');
      clearInterval(timer);
      alert("Время закончилось");
      timerInput.value = "";
    } else {
      let strTimer = `${hour < 10 ? '0' + Math.trunc(hour) : Math.trunc(hour)}:${minutes < 10 ? '0' + Math.trunc(minutes) : Math.trunc(minutes)}:${seconds < 10 ? '0' + Math.trunc(seconds) : Math.trunc(seconds)}`;
      display.innerText = strTimer;
    }
    --inputTime; // Уменьшаем таймер
  }, 1000)
});
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