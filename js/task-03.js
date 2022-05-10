const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
const parentClass = galleryEl.getAttribute('class');
//console.log(parentClass);

const markup = imagesListDatas => {
  return imagesListDatas
    .map(element => {
      const listEl = `<li class="${parentClass}-item"><img class = "${parentClass}-img" src="${element.url}" alt="${element.alt}"></li>`;
      return listEl;
    })
    .join('');
};

const imagesDatas = markup(images);
console.log(imagesDatas);
galleryEl.insertAdjacentHTML('afterbegin', imagesDatas);

///////!!!!! other solution
// const markup = images
//   .map(
//     element =>
//       `<li class="gallery-item"><img class = "gallery-img"src="${element.url}" alt="${element.alt}"></li>`
//   )
//   .join('');

// galleryEl.insertAdjacentHTML('afterbegin', markup);
