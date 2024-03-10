import * as AuthAPI from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const requestHelp = createAsyncThunk(
  'users/help/request',
  async (credentials, thunkAPI) => {
    try {
      const res = await AuthAPI.support(credentials);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
