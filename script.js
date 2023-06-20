const boxContainer = document.getElementById('boxContainer');

let box;
let userInput;
let gridSize;

//Create an event to listen to a button click 
//and give user a prompt to set the grid size when it fires
const button = document.querySelector('.button');
button.addEventListener('click', setGrid);

//function to change the individual grid color
function changeColor(e){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.target.style.setProperty('--r', r);
        e.target.style.setProperty('--g', g);
        e.target.style.setProperty('--b', b);
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
        console.log(gridSize);
        box = document.createElement('div');
        box.classList.add('box', 'hover');
        let x = `${100 / userInput}%`;
        box.style.setProperty ('--gridSize', x);
        boxContainer.appendChild(box);
    }

    //Create an event for changing color when hovering over a div
    const hover = document.querySelectorAll('.hover');
    hover.forEach(item => item.addEventListener('mouseenter', changeColor));
}


