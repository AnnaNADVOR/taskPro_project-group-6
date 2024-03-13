import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { getBoard } from '../../../redux/boards/operation';
import { selectUser } from '../../../redux/auth/selectors';
import BoardListItem from '../BoardListItem/BoardListItem';

import css from './BoardList.module.css';

const BoardList = () => {
  const { user } = useSelector(selectUser);
  const boards = user.boards;
  const dispatch = useDispatch();
  const [activeBoardId, setActiveBoardId] = useState(null);
  const handleClick = boardId => {
    dispatch(getBoard(boardId));
    setActiveBoardId(boardId);
  };

  return (
    <ul className={css.boardList}>
      {boards?.map(board => (
        <li
          key={board._id}
          onClick={() => handleClick(board._id)}
          className={`${activeBoardId === board._id ? css.activeBoard : ''}`}
        >
          <BoardListItem board={board} allBoards={boards} />
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
