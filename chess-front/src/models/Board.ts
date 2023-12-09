import {Cell} from "./Cell.ts";
import {Colors} from "./Colors.ts";

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
}