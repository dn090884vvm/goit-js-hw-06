const rangeEl = document.querySelector('#font-size-control');
// const minValueOfRange = Number(rangeEl.getAttribute('min'));
// const maxValueOfRange = Number(rangeEl.getAttribute('max'));
// const step = Number(rangeEl.getAttribute('step'));
//console.log(maxValueOfRange);

const textToChange = document.querySelector('#text');

function changeTextSize(event) {
  //console.log(rangeEl.value);
  textToChange.style.fontSize = `${rangeEl.value}px`;
}

rangeEl.addEventListener('input', changeTextSize);

////additional with step

//textToChange.style.fontSize = `${rangeEl.value + step}px`;
