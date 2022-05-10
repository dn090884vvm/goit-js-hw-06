const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

function onInputChangeField(event) {
  const NAME_BY_DEFAULT = 'Anonymous';
  textOutput.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    textOutput.textContent = NAME_BY_DEFAULT;
  }
}

textInput.addEventListener('input', onInputChangeField);

//other solution
// textInput.addEventListener('input', event => {
//   const NAME_BY_DEFAULT = 'Anonymous';
//   textOutput.textContent = event.currentTarget.value;
//   if (!event.currentTarget.value) {
//     textOutput.textContent = NAME_BY_DEFAULT;
//   }
// });
