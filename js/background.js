const images = [
  '0.jpg',
  '1.jpeg',
  '2.jpg',
  '3.jpeg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.setAttribute('src', `img/${chosenImg}`);
bgImg.setAttribute('class', 'bgImg');

document.body.appendChild(bgImg);
