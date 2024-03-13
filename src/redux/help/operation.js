import * as API from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const requestHelp = createAsyncThunk(
  'users/help/request',
  async (credentials, thunkAPI) => {
    try {
      const res = await API.support(credentials);
      toast.success('We have received you email!');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
