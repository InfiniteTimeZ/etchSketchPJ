const grid = document.querySelector("#innerBox");
const changeSize = document.querySelector("#chngS")
let getNum = 0;

document.getElementById("resetBT").addEventListener('click', function(){
    document.querySelectorAll('.trR').forEach(e => e.remove());
});

document.getElementById("chngS").addEventListener('click', function(){
    document.querySelectorAll('.trR').forEach(e => e.remove());
    getNum = prompt("Pick a number 2-64");
    createGrid();

});

function createGrid(){
  if (getNum < 64 || getNum > 2){  
    for(i = 0; i < getNum; i++){
        const tr = document.createElement('tr');
        tr.classList.add("trR")

    for (j = 0; j < getNum; j++){
        const td = document.createElement('td');

        td.setAttribute('style', 'border:1px solid black');


        tr.append(td);

    }
     grid.appendChild(tr);
    }
}
}

