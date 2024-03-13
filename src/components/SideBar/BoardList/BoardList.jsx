import { useSelector, useDispatch } from 'react-redux';

import { getBoard } from '../../../redux/boards/operation';
import { selectUser } from '../../../redux/auth/selectors';
import BoardListItem from '../BoardListItem/BoardListItem';

import css from './BoardList.module.css';

const BoardList = () => {
  const { user } = useSelector(selectUser);
  console.log("BoardList:user", user)

  const boards = user.boards;
  
  const dispatch = useDispatch();

  const handleClick = boardId => {
    dispatch(getBoard(boardId));    
  };

  console.log("BoardList:boards", boards)

  return (
    <ul className={css.boardList}>
      {boards?.map(board => (
        <li key={board._id} onClick={() => handleClick(board._id)}>          
            <BoardListItem board={board} allBoards={boards} />
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
