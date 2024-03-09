import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-team-6-backend.onrender.com';

export const requestHelp = createAsyncThunk(
  'users/help/request',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/help', credentials);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
