const boxContainer = document.getElementById('boxContainer');

let box;
let userInput;
let gridSize;

//Create an event to listen to a button click 
//and give user a prompt to set the grid size when it fires
const button = document.querySelector('.button');
button.addEventListener('click', setGrid);


function changeColor(e){
        e.target.style.backgroundColor = 'green';
}



//function to enter size of the grid
function setGrid(e){
    if (userInput !== 'undefined'){
        for(let i = 0; i < gridSize; i++){
            boxContainer.removeChild(boxContainer.firstChild);
        }
    }
    userInput = prompt('Enter the size you want for the grid');
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

//let gridSize = userInput * userInput;



