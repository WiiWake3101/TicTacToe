import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setsquares] = useState(Array(9).fill(null));
  return (
    <div className="board">
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </div>
  );
};
export default Board;
