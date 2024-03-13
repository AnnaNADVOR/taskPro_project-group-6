import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/selectors';

export const selectBoards = state => state.boards.boardList;
export const selectBoard = state => state.boards.board;
export const selecColumnList = state => state.boards.board.columns;

export const selectTasks = createSelector([selecColumnList], columns => {
  return columns.reduce((prev, column) => {
    return prev.concat(
      column.tasks.map(task => {
        return { ...task, columnId: column._id };
      })
    );
  }, []);
});

export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    return tasks.filter(task => task.priority.includes(filter));
  }
);
