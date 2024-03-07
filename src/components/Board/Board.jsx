import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addBoard, getBoard } from 'redux/boards/operation';

const Board = ({ addBoard, getBoard, board }) => {
  useEffect(() => {
    getBoard('boardId');
  }, [getBoard]);

  return (
    <div>
      <h2>Board Component</h2>
      <p>Board ID: {board.id}</p>
      <p>Board Title: {board.title}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  board: state.boards.board,
});

const mapDispatchToProps = {
  addBoard,
  getBoard,
};

export default Board;
