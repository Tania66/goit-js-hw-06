function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const bodyColor = document.querySelector("body");


btnEl.addEventListener('click', onChangeColorClick)


function onChangeColorClick() {
  
  bodyColor.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();


}
