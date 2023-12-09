import './assets/styles/App.scss'
import BoardComponent from "./components/BoardComponent.tsx";
import {useEffect, useState} from "react";
import {Board} from "./models/Board.ts";

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
      restart()
  }, [])

  const restart = () => {
      const newBoard = new Board();
      newBoard.initCells();
      newBoard.addFigures();
      setBoard(newBoard)
  }

  return (
    <div className='app'>
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
    </div>
  )
}

export default App
