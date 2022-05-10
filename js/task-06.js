const textInput = document.querySelector('#validation-input');
const correctLengthImput = Number(textInput.getAttribute('data-length'));
console.log(correctLengthImput);

textInput.addEventListener('blur', OnInputTextBlur);

function OnInputTextBlur(event) {
  if (correctLengthImput === event.currentTarget.value.length) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    // textInput.classList.remove('valid');
  }
  //console.log(event.currentTarget.value.length, correctLengthImput);
}

// const textInput = document.querySelector('#validation-input');
// console.log(textInput.dataset);
// const correctLengthInput = Number(textInput.dataset.length);

// console.log(validLength);
