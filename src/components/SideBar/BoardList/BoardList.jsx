import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getBoard } from '../../../redux/boards/operation';
import { selectUser } from '../../../redux/auth/selectors';
import BoardListItem from '../BoardListItem/BoardListItem';
import { NavLink } from 'react-router-dom';

const BoardList = () => {
  const [boardId] = useState('');
  const location = useLocation();

  const { user } = useSelector(selectUser);
  const boards = user.boards;

  const dispatch = useDispatch();

  const handleClick = boardId => {
    console.log(boardId)
    dispatch(getBoard(boardId));
  };

  return (
    <ul>
      {boards.map(board => (
        <li key={board._id} onClick={() => handleClick(board._id)}>
          <NavLink to={`/home/${board.title}`} state={{ from: location }}>
            <BoardListItem board={board} allBoards={boards} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
