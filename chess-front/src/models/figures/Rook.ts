import {Figure, FigureNames} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from '../../assets/img/black-rook.png'
import whiteLogo from '../../assets/img/white-rook.png'
export class Rook extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo;
        this.name = FigureNames.ROOK;
    }

}