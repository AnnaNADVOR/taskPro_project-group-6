import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoards } from '../../../redux/boards/selectors';
import BoardListItem from '../BoardListItem/BoardListItem';

const BoardList = () => {
  const boards = useSelector(selectBoards);

  if (!Array.isArray(boards) || boards.length === 0) {
    console.error('Boards array is empty or undefined:', boards);
    return null;
  }

  return (
    <ul>
      {boards.map(board => (
        <li key={board._id}>
          <BoardListItem board={board} allBoards={boards} />
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
