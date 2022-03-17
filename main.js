let columnValue = document.querySelector('#columnChoose');
let rowValue = document.querySelector('#rowChoose');

let container = document.querySelector('.container');
container.addEventListener('mouseover', sketch);

const start = document.querySelector('.start').addEventListener('click', function(){
    let columns = columnValue.value;
    let rows = rowValue.value;
    document.querySelector('.start').style.display = 'none';
    document.querySelector('.reset').style.display = 'flex';
    createGrid(columns, rows);
})

const reset = document.querySelector('.reset').addEventListener('click', function(){
    container.innerHTML = '';
    let columns = columnValue.value;
    let rows = rowValue.value;
    createGrid(columns, rows);
})

function createGrid(columns, rows){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-item');
    container.appendChild(cell);
}}

function sketch(event) {
    if (event.target !== container) {
        event.target.style.backgroundColor = `#000000`;
    }
}