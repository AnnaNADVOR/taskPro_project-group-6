import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoard } from 'redux/boards/operation';

const Board = () => {
  const dispatch = useDispatch();

  const board = useSelector(state => state.board);

  useEffect(() => {
    dispatch(getBoard('boardId'));
  }, [dispatch]);

  return (
    <div>
      <h2>Board Component</h2>
      <p>Board ID: {board.id}</p>
      <p>Board Title: {board.title}</p>
    </div>
  );
};

export default Board;
