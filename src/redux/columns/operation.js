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