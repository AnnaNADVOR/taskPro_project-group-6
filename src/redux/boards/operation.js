import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-team-6-backend.onrender.com';

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (boardData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/boards', boardData);
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
      const response = await axios.get(
        `https://project-team-6-backend.onrender.com/api/boards/${boardId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
