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
let a = 0;

function accum() {
  // console.log(valueOfElements.value);
  a = a + Number(valueOfElements.value);
  console.log(a);
  return a;
}

function createBoxes() {
  const arr = [];
  let width;
  let height;
  if (a === 0) {
    width = 30;
    height = 30;
  } else {
    width = 30 + a * 10;
    height = 30 + a * 10;
  }
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

  elementToAdd.append(...arr);
  accum();
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
  a = 0;

  //DOESN"T WORK
  // const divToRemove = Array.prototype.slice.call(
  //   document.getElementsByClassName('addedElements'),
  //   0
  // );
}

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', removeElements);
