//! Howler выдает ошибку( Ошибка разрешения спецификатора модуля «howler». Связанные спецификаторы модуля должны начинаться с «./», «../» или «/». Или ambiguous indirect export: Howler - при cdn подкючении ) и блокирует работу приложения.
// import { Howl, Howler } from 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js';

// const sound = new Howl({
//    src: ['sound.webm', 'sound.mp3'],
//    sprite: {
//       blast: [0, 3000],
//       laser: [4000, 1000],
//       winner: [6000, 5000]
//    }
// });
// Howler.volume(0.5);

const timerInput = document.getElementById('time');
const display = document.getElementById('display');

export let timer;
export const startTimer = () => {

   if (!timerInput.value) {
      return
   }
   let inputTime = parseInt(timerInput.value) * 60;
   timer = setInterval(() => {

      let seconds = inputTime % 60;
      let minutes = inputTime / 60 % 60;
      let hour = inputTime / 60 / 60 % 60;

      if (inputTime <= 0) {
         // sound.play('blast');
         clearInterval(timer);
         alert("Время закончилось");
         timerInput.value = "";
      } else {
         let strTimer = `${hour < 10 ? '0' + Math.trunc(hour) : Math.trunc(hour)}:${minutes < 10 ? '0' + Math.trunc(minutes) : Math.trunc(minutes)}:${seconds < 10 ? '0' + Math.trunc(seconds) : Math.trunc(seconds)}`;
         display.innerText = strTimer;
      }
      --inputTime; // Уменьшаем таймер
   }, 1000)
}