import { createSlice } from '@reduxjs/toolkit';

import { addBoard, getBoard, deleteBoard, editBoard, deleteCardOnBoard } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


export const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    boardList: [],
    board: {},
    background: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addBoard.pending, state => {
        state.isLoading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.boardList.push(action.payload);
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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

      .addCase(deleteBoard.pending, handlePending)
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.boardList.findIndex(
          board => board._id === action.payload._id
        );
        state.boardList.splice(index, 1);
      })
      .addCase(deleteBoard.rejected, handleRejected)
      .addCase(editBoard.pending, handlePending)
      .addCase(editBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.boardList.findIndex(
          el => el._id === action.payload._id
        );
        state.boardList[index] = action.payload;
      })
      .addCase(editBoard.rejected, handleRejected);
  },

      .addCase(deleteCardOnBoard.fulfilled, (state, action) => {
        
        let taskId = action.payload 
        state.board.columns = state.board.columns.map((column) => {
         
          return {
            ...column,
            tasks: column.tasks.filter(task => task._id !== taskId)
          }
        })
      }
      )
  }

});

export const boardsReducer = boardsSlice.reducer;
