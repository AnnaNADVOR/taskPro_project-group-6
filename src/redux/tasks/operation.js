import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tasksAPI from "./cardsApi";

export const addCard = createAsyncThunk(
  "tasks/tasks",
  async ({column, title}, { rejectWithValue }) => {
    try {
      const response = await tasksAPI.addTask(column,title);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);