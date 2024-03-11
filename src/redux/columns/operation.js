import { createAsyncThunk } from '@reduxjs/toolkit';
import * as ColumnsAPI from '../services/api';

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async (data, { rejectWithValue }) => {
    try {
      const response = await ColumnsAPI.addColumn(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//-------------Tasks operation ------------------//
export const deleteCard = createAsyncThunk(
  'columns/deleteCard',
  async (taskId) => {
    return taskId
  }
);

export const editCardOnColumn = createAsyncThunk(
  'columns/editCard',
    async (taskId) => {
      return taskId;
  }
)

