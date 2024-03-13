import { createSlice } from '@reduxjs/toolkit';
import {
  getBoard,
  deleteTask,
  addColumn,
  addTask,
  editTask,
  replaceTask,
  deleteColumn,
  editColumn,
} from './operation';
import { editBoard } from '../auth/operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    board: {},
    background: null,
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board = action.payload;
      })
      .addCase(getBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editBoard.fulfilled, (state, { payload }) =>
      {
        state.board = {...state.board, ...payload}
      })
      //-------------Columns case ------------------//
      .addCase(addColumn.pending, handlePending)
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board.columns.push(action.payload);
      })
      .addCase(addColumn.rejected, handleRejected)
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board.columns = state.board.columns.filter(
          column => column._id !== action.payload.id
        );
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.board.columns.findIndex(
          column => column._id === action.payload._id
        );
        state.board.columns[index].title = action.payload.title;
      })
      //-------------Tasks case ------------------//
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        let columnId = action.payload.columnId;
        state.board.columns = state.board.columns.map(column => {
          if (column._id === columnId) {
            column.tasks.push(action.payload);
          }
          return column;
        });
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        let taskId = action.payload._id;
        state.board.columns = state.board.columns.map(column => {
          return {
            ...column,
            tasks: column.tasks.filter(task => task._id !== taskId),
          };
        });
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(editTask.pending, handlePending)
      .addCase(editTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.board.columns = state.board.columns.map(column => {
          if (column._id === action.payload.columnId) {
            column.tasks = column.tasks.map(task => {
              if (task._id === action.payload._id) {
                return action.payload;
              }
              return task;
            });
          }
          return column;
        });
      })
      .addCase(editTask.rejected, handleRejected)
      .addCase(replaceTask.pending, handlePending)
      .addCase(replaceTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const columnIdx = state.board.columns.findIndex(
          column => column._id === action.payload.columnId
        );
        const currentColumnIdx = state.board.columns.findIndex(
          column => column._id === action.payload.currentColumnId
        );
        const currentCardIdx = state.board.columns[
          currentColumnIdx
        ].tasks.findIndex(task => task._id === action.payload.taskId);
        const currentCard =
          state.board.columns[currentColumnIdx].tasks[currentCardIdx];
        currentCard.columnId = action.payload.columnId;
        state.board.columns[columnIdx].tasks.push(currentCard);
        state.board.columns[currentColumnIdx].tasks = state.board.columns[
          currentColumnIdx
        ].tasks.filter(task => task._id !== action.payload.taskId);
      })
      .addCase(replaceTask.rejected, handleRejected);
  },
});

export const boardsReducer = boardsSlice.reducer;
