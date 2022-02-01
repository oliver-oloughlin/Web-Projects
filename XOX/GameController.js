"use strict";

export default class GameController {

    constructor(board) {
        this.board = board;
        this.isActive = false;
        this.player = 0;
        this.moves = [];
    }

    start() {
        this.player = 1;
        this.isActive = true;
        this.moves = [];
    }

    end() {
        this.isActive = false;
    }

    next() {
        this.player === 1 ? this.player = 2 : this.player = 1;
    }

    won() {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 1; j < this.board[i].length; j++) {
                if (!this.board[i][j].innerText || this.board[i][j].innerText !== this.board[i][j-1].innerText) break;
                if (j === 2) return true;
            }
        }

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 1; j < this.board[i].length; j++) {
                if (!this.board[j][i].innerText || this.board[j][i].innerText !== this.board[j-1][i].innerText) break;
                if (j === 2) return true;
            }
        }

        for (let i = 1; i < this.board.length; i++) {
            if (!this.board[i][i].innerText || this.board[i][i].innerText !== this.board[i-1][i-1].innerText) break;
            if (i === 2) return true;
        }

        let j = 1;
        for (let i = 1; i >= 0; i--) {
            if (!this.board[i][j].innerText || this.board[i][j].innerText !== this.board[i+1][j-1].innerText) break;
            if (j === 2) return true;
            j++;
        }

        return false;
    }

    makeMove(td) {
        if (!this.isActive || !td || td.innerText === "X" || td.innerText === "O") return false;
        
        let piece = "X";
        if (this.player === 2) piece = "O";
        td.innerText = piece;
        console.log("Has won: " + this.won());
        this.moves.push([piece, td]);
        if (this.moves.length >= 9) this.end();
        else this.next();
    }

}