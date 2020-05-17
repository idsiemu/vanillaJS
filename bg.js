const body = document.querySelector("body");

const IMG_NUMBER = 6;

const paintImage = (number) => {
    const image = new Image();
    image.src = `images/${number + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

const getRandom = () => {
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

const initBg = () => {
    const randomNum = getRandom();
    paintImage(randomNum);
}

initBg();