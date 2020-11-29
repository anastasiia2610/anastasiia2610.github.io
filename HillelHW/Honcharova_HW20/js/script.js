'use strict';

const table = document.getElementById('table');

const tbody = table.querySelector('tbody');

function sortTable(columnIndex) {
    
let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
    table.tBodies[0].append(...sortedRows);
}

sortTable();
