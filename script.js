const boxContainer = document.getElementById('boxContainer');

let box;
let userInput;
let gridSize;

//Create an event to listen to a button click 
//and give user a prompt to set the grid size when it fires
const button1 = document.querySelector('.button');
button1.addEventListener('click', setGrid);

//function to change the individual grid color
let count = 0;
function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return

    if(eraser === 1){
        e.target.style.setProperty('--r', 255);
        e.target.style.setProperty('--g', 255);
        e.target.style.setProperty('--b', 255);
    }
    else{
        while(!e.target.value){
            e.target.value = 1;
        }

        if (e.target.value < 11){
            e.target.value++;
        }
        count = e.target.value - 1;

        let r = Math.floor(Math.random() * (256 - 25.6 * count));
        let g = Math.floor(Math.random() * (256 - 25.6 * count));
        let b = Math.floor(Math.random() * (256 - 25.6 * count));
        e.target.style.setProperty('--r', r);
        e.target.style.setProperty('--g', g);
        e.target.style.setProperty('--b', b);
    }
}



//function to enter size of the grid
function setGrid(e){
    if (userInput !== 'undefined'){
        for(let i = 0; i < gridSize; i++){
            boxContainer.removeChild(boxContainer.firstChild);
        }
    }

    //Ask for input again if userInput != [1-100]
    do{
        userInput = prompt('Enter the size you want for the grid[1-100]');
        if(userInput < 0 || userInput > 100){
            userInput = -1;
        }
    }while(userInput == -1)

    gridSize = userInput * userInput;
    for(let i = 0; i < gridSize; i++){
        box = document.createElement('div');
        box.classList.add('box', 'hover');
        let x = `${100 / userInput}%`;
        box.style.setProperty ('--gridSize', x);
        boxContainer.appendChild(box);
    }

    //Change set to reset
    const set = document.querySelector('span');
    set.textContent = 'Reset the size of the grid:';
    button1.textContent = 'RESET';

    //Append button2 to a div
    btnContainer.appendChild(button2);

    //Append button3 to a div
    btnContainer.appendChild(button3);

    //Remove greetings
    while(temp == 0){
        greetings.parentNode.removeChild(greetings);
        temp = 1;
    }

}

//create a div to contain a button
const btnContainer = document.querySelector('#btnContainer');
const button2 = document.createElement('button');
button2.classList.add('button', 'big');
button2.textContent = 'START DRAWING';

//create Eraser
const button3 = document.createElement('button');
button3.classList.add('button', 'big');
button3.textContent = 'START ERASING';

let eraser = 0;
let mouseDown = false
let temp = 1;
const greetings = document.createElement('h1');

//Event to start erasing
button3.addEventListener('click', erase);
function erase(){
    eraser = 1;
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)

    //Create an event for changing color when hovering over a div
    const hover = document.querySelectorAll('.hover');
    hover.forEach(item => {
        item.addEventListener('mouseover', changeColor)
        item.addEventListener('mousedown', changeColor)
    });
}

button2.addEventListener('click', start);
//function to start make the drawing area active
function start(){
    while(temp != 0){
        greetings.textContent = "Yay! You can now start drawing on the canvas below";
        btnContainer.insertBefore(greetings, button2);
        temp = 0;
    }

    eraser = 0;
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)

    //Create an event for changing color when hovering over a div
    const hover = document.querySelectorAll('.hover');
    hover.forEach(item => {
        item.addEventListener('mouseover', changeColor)
        item.addEventListener('mousedown', changeColor)
    });
}

 