const grid = document.querySelector("#innerBox");
const getNum = ("Grid num");

function createGrid(){
    for(i = 0; i < getNum; i++){
        const tr = document.createElement('tr');
    for (j = 0; j < getNum; j++){
        const td = document.createElement('td');

        td.setAttribute('style', 'border:1px solid black');

        tr.append(td);

    }
     grid.appendChild(tr);
    }
}
createGrid();

