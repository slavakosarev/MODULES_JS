// const timerInput = document.getElementById('time');
// const startButton = document.getElementById('start');
// const stopButton = document.getElementById('stop');
// const display = document.getElementById('display');

// let time;

// startButton.addEventListener('click', function () {
//    time = parseInt(timerInput.value) * 60
// });

// const timer = setInterval(function () {
//    let seconds = time % 60; // Получаем секунды
//    let minutes = time / 60 % 60; // Получаем минуты
//    let hour = time / 60 / 60 % 60; // Получаем часы
//    // Условие если время закончилось то...
//    if (time <= 0) {
//       // Таймер удаляется
//       clearInterval(timer);
//       // Выводит сообщение что время закончилось
//       alert("Время закончилось");
//    } else { // Иначе
//       // Создаём строку с выводом времени
//       let strTimer = `
//       ${hour < 10 ? '0' + Math.trunc(hour) : Math.trunc(hour)}:
//       ${minutes < 10 ? '0' + Math.trunc(minutes) : Math.trunc(minutes)}:
//       ${seconds < 10 ? '0' + Math.trunc(seconds) : Math.trunc(seconds)}
//       `;
//       // Выводим строку в блок для показа таймера
//       display.innerText = strTimer;
//    }
//    --time; // Уменьшаем таймер
// }, 1000);

// stopButton.addEventListener('click', function () {
//    clearInterval(timer);
// });