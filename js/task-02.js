const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const makeIngredientList = options => {
  const arr = [];
  options.forEach(element => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = element;
    return arr.push(itemEl);
  });

  return arr;
};

const elements = makeIngredientList(ingredients);
//console.log(elements);
const listEl = document.querySelector('#ingredients');
listEl.append(...elements);

//!!!!!!!!!!! SECOND option of resolving
//!!!!!!!!!!! Which of these would be better in your opinion?

// const makeIngredientList = options => {
//   return options.map(option => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent = option;
//     return itemEl;
//   });
// };

// const elements = makeIngredientList(ingredients);
// console.log(elements);
// const listEl = document.querySelector('#ingredients');
// listEl.append(...elements);
