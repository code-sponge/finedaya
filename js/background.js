const images = ['0.jpg', '1.jpeg', '2.jpeg', '3.jpeg'];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement('img');
bgImg.setAttribute('src', `img/${chosenImg}`);

document.body.appendChild(bgImg);
