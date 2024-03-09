import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tasksAPI from "../services/api";

export const addTask = createAsyncThunk(
  "tasks/addTasks",
  async ({ column, title, description, priority, deadline }, { rejectWithValue }) => {
    console.log("hi")
    try {
      const response = await tasksAPI.addTask(column,title, description, priority, deadline);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);