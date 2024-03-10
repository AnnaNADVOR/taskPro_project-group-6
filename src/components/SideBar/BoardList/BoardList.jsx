import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { getBoard } from '../../../redux/boards/operation';
import { selectUser } from '../../../redux/auth/selectors';
import BoardListItem from '../BoardListItem/BoardListItem';

import css from './BoardList.module.css';

const BoardList = () => {
  const location = useLocation();

  const { user } = useSelector(selectUser);
  const boards = user.boards;

  const dispatch = useDispatch();

  const handleClick = boardId => {
    dispatch(getBoard(boardId));
  };

  return (
    <ul className={css.boardList}>
      {boards.map(board => (
        <li key={board._id} onClick={() => handleClick(board._id)}>
          <NavLink
            to={`/home/${board.title}`}
            state={{ from: location }}
            className={css.navLink}
          >
            <BoardListItem board={board} allBoards={boards} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
