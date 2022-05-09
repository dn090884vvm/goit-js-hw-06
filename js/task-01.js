const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories ${numberOfCategories.length}`);

const categoryNames = document.querySelectorAll('.item');
categoryNames.forEach(element => {
  const categoryName = element.querySelector('h2');
  console.log(`Category: ${categoryName.textContent}`);
  const numberOfItems = element.querySelectorAll('li');
  console.log(`Elements ${numberOfItems.length}`);
});

///////-------------------
// const categoryNames = document.querySelector('.item h2');
// categoryNames.forEach(item => {
//   console.log(item.textContent);
// });

//console.log(categoryName.textContent);

// const a = document.querySelectorAll('.item h2');
// console.log(a);

// a.forEach(element => {
//   console.log(element.textContent);
// });

// const b = document.querySelectorAll('.item');
// console.log(b);
// b.forEach(element => {
//   const c = element.querySelectorAll('li');
//   console.log(c);
//   console.log(c.length);
// });
