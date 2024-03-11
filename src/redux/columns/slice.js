import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  deleteColumn,
  editColumn,
  deleteCard,
} from '../columns/operation';

export const columnsSlice = createSlice({
  name: 'columns',
  initialState: {
    columnsList: [],
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(addColumn.pending, state => {
        state.isLoading = true;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.columnsList.push(action.payload);
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        let taskId = action.payload;
        state.columnsList = state.columnsList
          .map(column => {
            return {
              ...column,
              tasks: column.tasks.filter(task => task._id !== taskId),
            };
          })
          .addCase(deleteColumn.pending, state => {
            state.isLoading = true;
          })
          .addCase(deleteColumn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.columnsList.findIndex(
              column => column._id === action.payload._id
            );
            state.columnsList.splice(index, 1);
            // const deletedId = action.payload.id || action.payload._id;

            // state.columnsList = state.columnsList.filter(
            //   column => column._id !== deletedId
            // );
          })
          .addCase(deleteColumn.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(editColumn.pending, state => {
            state.isLoading = true;
          })
          .addCase(editColumn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.columnsList.findIndex(
              column => column._id === action.payload._id
            );
            state.columnsList[index] = action.payload;
          })
          .addCase(editColumn.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
      });
  },
});
