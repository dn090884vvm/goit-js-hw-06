function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector('[data-create]');
//console.log(createButton);
const destroyButton = document.querySelector('[data-destroy]');
//console.log(destroyButton);

const valueOfElements = document.querySelector('input');
const elementToAdd = document.querySelector('#boxes');
// console.log(elementToAdd);
//console.log(valueOfElements);

const minAmountOfElements = Number(valueOfElements.getAttribute('min'));
const maxAmountOfElements = Number(valueOfElements.getAttribute('max'));

function createBoxes() {
  const arr = [];
  let width = 30;
  let height = 30;
  if (valueOfElements.value < 1 || valueOfElements.value > 100 || valueOfElements.value === NaN) {
    console.log('Check entered value');
  } else
    for (let i = 0; i < valueOfElements.value; i += 1) {
      const divEl = document.createElement('div');
      const elementColor = getRandomHexColor();
      divEl.style.width = `${width}px`;
      divEl.style.height = `${height}px`;

      divEl.textContent = i;
      divEl.style.backgroundColor = elementColor;
      divEl.classList.add('addedElements');
      width += 10;
      height += 10;
      arr.push(divEl);
      // console.log(elementColor);
      // console.log(arr);
    }
  return elementToAdd.append(...arr);
}

function removeElements() {
  //OR
  // const divToRemove = document.getElementsByClassName('addedElements');
  // console.log(divToRemove);
  // console.log(divToRemove.length);
  // for (let i = divToRemove.length - 1; i >= 0; i -= 1) {
  //   divToRemove[i].remove();
  // }

  elementToAdd.innerHTML = '';

  //DOESN"T WORK
  // const divToRemove = Array.prototype.slice.call(
  //   document.getElementsByClassName('addedElements'),
  //   0
  // );
}

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', removeElements);
