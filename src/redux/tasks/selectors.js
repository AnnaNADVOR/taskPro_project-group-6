import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter/selectors";

export const selectTasks = state => state.tasks.tasksList;
export const selectIsLoadingAdd = state => state.tasks.isLoadingAdd; 
export const selectError = state => state.tasks.error; 
export const selectDeletetaskId = state => state.tasks.deletetaskId;
export const selectVibleTasks = createSelector([selectTasks, selectFilter], (tasks, filter) => {
    const findTask = tasks.filter(task => task.priority.includes(filter));
    return findTask;
})