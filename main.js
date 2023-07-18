const colors = [ "green", "red", "Rgba(0,0,255)", "yellow"];
const btn = document.getElementById("btn");

const color = document.querySelector(".color");

const changeColor = () => {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

}

const getRandomNumber = () => Math.floor(Math.random() * colors.length);

btn.onclick =  changeColor;