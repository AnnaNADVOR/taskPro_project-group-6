import { createAsyncThunk } from '@reduxjs/toolkit';
import * as AuthAPI from '../services/api';

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthAPI.addBoard(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBoard = createAsyncThunk(
  'boards/getBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const response = await AuthAPI.getBoardById(boardId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
