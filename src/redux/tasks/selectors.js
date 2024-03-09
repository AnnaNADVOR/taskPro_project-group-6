// import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => {
    console.log("select", state.tasks.tasksList)
    return state.tasks.tasksList
};
export const selectIsLoadingAdd = state => state.tasks.isLoadingAdd; 
export const selectError = state => state.tasks.error; 