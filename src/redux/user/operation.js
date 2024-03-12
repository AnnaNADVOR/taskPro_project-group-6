import * as API from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateUser = createAsyncThunk(
    'users/update',
    async(credentials, {rejectWithValue}) => {
        try {
            const response = await API.editUser(credentials)
            return response;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)



