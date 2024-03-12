import { createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthAPI from '../services/api'

export const updateUser = createAsyncThunk(
    'users/update',
    async(credentials, {rejectWithValue}) => {
        try {
            const response = await AuthAPI.editUser(credentials)
            return response;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
