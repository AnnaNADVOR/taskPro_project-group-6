import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-team-6-backend.onrender.com';

export const updateTheme = createAsyncThunk(
  'auth/theme',
  async ({ theme }, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/api/users/themes', { theme });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
