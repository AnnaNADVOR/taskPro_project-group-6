import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoard } from '../../../redux/boards/operation';
import BoardListItem from '../BoardListItem/BoardListItem';

const BoardList = () => {
  const dispatch = useDispatch();
  const boards = useSelector(state => state.boards.boards) || [];

  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);

  return (
    <ul>
      {boards.map(({ boardId, title, icon }) => (
        <BoardListItem key={boardId} title={title} icon={icon} />
      ))}
    </ul>
  );
};

export default BoardList;
