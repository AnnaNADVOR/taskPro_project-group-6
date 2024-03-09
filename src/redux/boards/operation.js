import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBoard as addBoardService, getBoardById } from '../services/api';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-team-6-backend.onrender.com';

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (data, { rejectWithValue }) => {
    try {
      const response = await addBoardService(data);
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
      const response = await getBoardById(boardId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
