const timer = document.querySelector('#timer');
const dateCalc = document.querySelector('#datecalc');

export const handler = () => {
   timer.classList.toggle('visible');
   dateCalc.classList.toggle('visible');
};
