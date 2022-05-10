function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorValue = document.querySelector('.color');

const changeButtonColorClick = document.querySelector('.change-color');

changeButtonColorClick.addEventListener('click', onButtonChangeColorClick);

function onButtonChangeColorClick() {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent;
}
