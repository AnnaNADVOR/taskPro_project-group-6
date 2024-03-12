import { useSelector, useDispatch } from 'react-redux';

import { getBoard } from '../../../redux/boards/operation';
import { selectUser } from '../../../redux/auth/selectors';
import BoardListItem from '../BoardListItem/BoardListItem';

import css from './BoardList.module.css';

const BoardList = () => {
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
            <BoardListItem board={board} allBoards={boards} />
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
