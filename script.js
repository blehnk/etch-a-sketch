const container = document.getElementById('container');

//Create 16 div to form 16 x 16 grid pattern
let box;
for(let i = 0; i < 16; i++){
    box = document.createElement('div');
    box.classList.add('box', 'hover');
    container.appendChild(box);
}

//Create an event for changing color when hovering over a div
const hover = document.querySelectorAll('.hover');
hover.forEach(item => item.addEventListener('mouseenter', changeColor));

function changeColor(e){
        e.target.style.backgroundColor = 'green';
}
