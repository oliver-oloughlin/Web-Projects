"use strict"

import GameController from "./GameController.js"

window.onload = run;

function run() {

    const table = document.getElementById("table");
    const gc = new GameController(table);
    gc.start();
    
}