"use strict"

window.addEventListener("onload", run());

function run() {

    const root = document.getElementById("root");
    const table = document.getElementById("table");

    console.log(root);
    
    for (let i = 0; i < 3; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        for (let j = 0; j < 3; j++) {
            const td = tr.insertCell();
            td.innerText = "X";
        }
    }

}