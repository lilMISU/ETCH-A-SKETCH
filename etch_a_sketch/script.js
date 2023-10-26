let container = document.querySelector('.container');
let btn = document.querySelector('button');
let matrixLen;
btn.addEventListener("click", () => {
    matrixLen = prompt("Enter matrix length");
    if (matrixLen) {
        RemoveChildren(container);
        createGrid(matrixLen);
    }
})


// function MakeMatrix(matrixLen) {
//     RemoveChildren(container);
//     for (let i = 0; i < matrixLen; i++) {
//         let divRow = document.createElement('div');
//         divRow.classList.add("rowDiv");
//         divRow.style.width = window.innerWidth;
//         divRow.style.height = '50px';
//         console.log("DATECAMIBAGPL");
//         for (let j = 0; j < matrixLen; j++) {
//             let divCol = document.createElement('div');
//             divCol.classList.add("colDiv");
//             console.log(window.innerWidth);
//             divCol.style.width = window.innerWidth / matrixLen;
//             divCol.style.height = divCol.style.width;
//             divCol.addEventListener("mouseenter", function () {
//                 divCol.style.backgroundColor = "#FF5733"; // Change background color on hover
//             });
//             container.appendChild(divCol);
//             divRow.appendChild(divCol);
//         }

//         container.appendChild(divRow);
//     }
// }

function RemoveChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(size) {
    container.style.setProperty('--size', size); // Set the CSS variable --size
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.addEventListener("mouseenter", function () {
                cell.style.backgroundColor = "#FF5733"; // Change background color on hover
            });
            row.appendChild(cell);
        }
    }
}