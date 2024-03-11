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

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (columnId, { rejectWithValue }) => {
    try {
      const response = await ColumnsAPI.deleteColumnById(columnId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/editColumn',
  async (columnId, { rejectWithValue }) => {
    try {
      const response = await ColumnsAPI.editColumn(columnId);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'columns/deleteCard',
  async taskId => {
    return taskId;
  }
);
