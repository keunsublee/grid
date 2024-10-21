//Global variables
let colorSelected; 
let grid = document.getElementById("grid"); // table grid in index

//add cell and set onclick function
function addCell(row) {
    let cell = row.insertCell();
    cell.onclick = function () {
        colorCell(cell, colorSelected);
    };
}

//Add row
function addR() {
    let row = grid.insertRow(-1);
    let col = document.querySelector("tr").children.length;
    let i = 0;
    do { addCell(row); i++; }
    while (i < col);
}

//Add column
function addC() {
    let rows = document.querySelectorAll("tr");
    rows.forEach(row => addCell(row));
    if (rows.length === 0) { 
        addR();}
}

//Remove row
function removeR() {
    if (grid.children.length > 0) {
        grid.deleteRow(-1);
    }
}

//Remove column
function removeC() {
    document.querySelectorAll("tr").forEach(row => row.deleteCell(-1));
    
    //Check if 0 columns, remove all rows 
    let Row = document.querySelector("tr");
    if (Row && Row.children.length === 0) {
        document.querySelectorAll("tr").forEach(row => grid.deleteRow(row.rowIndex));
    }
}

// Remove all rows and columns
function removeAll() {
    while (grid.rows.length > 0) {
        grid.deleteRow(0);
    }
}
