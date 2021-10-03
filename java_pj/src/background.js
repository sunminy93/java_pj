const imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]


const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
const cssBack = document.createElement("img");
cssBack.src = `img/${randomImg}`;
document.body.appendChild(cssBack);


