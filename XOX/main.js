"use strict"

import GameController from "./GameController.js"

window.onload = run;
let gc;

function run() {

    const table = document.getElementById("table");
    const board = [];
    for (let i = 0; i < 3; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        const row = [];
        for (let j = 0; j < 3; j++) {
            const td = tr.insertCell();
            td.onclick = (e) => gc.makeMove(e.target);
            row.push(td);
        }
        board.push(row);
    }

    gc = new GameController(board);
    gc.start();
    
}