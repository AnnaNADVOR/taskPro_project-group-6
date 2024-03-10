import { createSlice } from '@reduxjs/toolkit';
import { addBoard, getBoard } from './operation';

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
        state.board = (action.payload);
      })
      .addCase(getBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const boardsReducer = boardsSlice.reducer;
