import {Cell} from "./Cell.ts";
import {Colors} from "./Colors.ts";
import {Queen} from "./figures/Queen.ts";
import {King} from "./figures/King.ts";
import {Knight} from "./figures/Knight.ts";
import {Bishop} from "./figures/Bishop.ts";
import {Rook} from "./figures/Rook.ts";
import {Pawn} from "./figures/Pawn.ts";

export class Board {
    cells: Cell[][] = []

    public initCells() {
        for(let x = 0; x < 8; x++) {
            const row: Cell[] = []
            for (let y = 0; y < 8; y++) {
                if((x + y) % 2 === 0) {
                    row.push(new Cell(this, x, y, Colors.BLACK, null)) // black
                } else {
                    row.push(new Cell(this, x, y, Colors.WHITE, null)) // white
                }
            }
            this.cells.push(row)
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }

    public addFigures() {
        this.addPawns();
        this.addRooks();
        this.addKnights();
        this.addBishops();
        this.addKingsAndQueens();
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.WHITE, this.getCell(i, 6));
            new Pawn(Colors.BLACK, this.getCell(i, 1));
        }
    }

    private addRooks() {
        new Rook(Colors.WHITE, this.getCell(0, 7));
        new Rook(Colors.WHITE, this.getCell(7, 7));
        new Rook(Colors.BLACK, this.getCell(0, 0));
        new Rook(Colors.BLACK, this.getCell(7, 0));
    }

    private addKnights() {
        new Knight(Colors.WHITE, this.getCell(1, 7));
        new Knight(Colors.WHITE, this.getCell(6, 7));
        new Knight(Colors.BLACK, this.getCell(1, 0));
        new Knight(Colors.BLACK, this.getCell(6, 0));
    }

    private addBishops() {
        new Bishop(Colors.WHITE, this.getCell(2, 7));
        new Bishop(Colors.WHITE, this.getCell(5, 7));
        new Bishop(Colors.BLACK, this.getCell(2, 0));
        new Bishop(Colors.BLACK, this.getCell(5, 0));
    }

    private addKingsAndQueens() {
        new King(Colors.WHITE, this.getCell(3, 7));
        new Queen(Colors.WHITE, this.getCell(4, 7));
        new King(Colors.BLACK, this.getCell(3, 0));
        new Queen(Colors.BLACK, this.getCell(4, 0));
    }
}