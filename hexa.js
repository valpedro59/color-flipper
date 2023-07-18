const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

const changeColor = () => {
    let hexaColor = "#";
    for (let i = 0; i < 6; i++) {
        hexaColor += hexa[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexaColor;
    color.textContent = hexaColor;

}


// generate randomly numbers
const getRandomNumber = () => Math.floor(Math.random() * hexa.length);


//the event change Color when we click on the button
btn.onclick =  changeColor;