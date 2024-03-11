import { createSlice } from '@reduxjs/toolkit';
import { addBoard, getBoard, deleteCardOnBoard } from './operation';

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
