"use strict"

export default class GameController {

    constructor(table) {
        this.createBoard(table);
        this.player = 1;
        this.isActive = false;
        this.moves = [];
    }

    createBoard(table) {
        this.board = [];
        for (let i = 0; i < 3; i++) {
            const tr = document.createElement("tr");
            table.appendChild(tr);
            const row = [];
            for (let j = 0; j < 3; j++) {
                const td = tr.insertCell();
                td.onclick = this.makeMove;
                row.push(td);
            }
            this.board.push(row);
        }
    }

    start() {
        this.player = 1;
        this.isActive = true;
        this.moves = [];
    }

    end() {
        this.isActive = false;
    }

    makeMove(e) {
        const td = e.target();
        if (!this.isActive || !td || td.innerText === "X" || td.innerText === "O") return false;
        
        let piece = "X";
        if (player === 2) piece = "O";
        this.moves.push([piece, td]);
        if (this.moves.length >= 9) this.end();
        else this.player = next(this.player);

        return true;
    }

}

function next(player) {
    return player === 1 ? 2 : 1;
}