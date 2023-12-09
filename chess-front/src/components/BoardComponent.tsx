import CellComponent from "./CellComponent.tsx";
import {Board} from "../models/Board.ts";
import {FC} from "react";
import {Cell} from "../models/Cell.ts";
import React from "react";
interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.cells.map((row, index) => (
                <React.Fragment key={index}>
                    {row.map((cell) => (
                        <CellComponent cell={cell} key={cell.id}/>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};

export default BoardComponent;