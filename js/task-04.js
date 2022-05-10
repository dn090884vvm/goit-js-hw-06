let conterValue = 0;

const decrementButton = document.querySelector('button[data-action ="decrement"]');
const incrementButton = document.querySelector('button[data-action ="increment"]');
const valueEl = document.querySelector('#value');

function onDecrementButtonClick() {
  conterValue -= 1;
  valueEl.textContent = conterValue;
}

function onIncrementButtonClick() {
  conterValue += 1;
  valueEl.textContent = conterValue;
}

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick);

//////!!!! other solution

// decrementButton.addEventListener('click', () => {
//   conterValue -= 1;
//   console.log(conterValue);
//   valueEl.textContent = conterValue;
// });

// incrementButton.addEventListener('click', () => {
//   conterValue += 1;
//   console.log(conterValue);
//   valueEl.textContent = conterValue;
// });
