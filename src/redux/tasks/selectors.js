import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";

export const selectTasks = state => state.tasks.tasksList;
export const selectIsLoadingAdd = state => state.tasks.isLoadingAdd; 
export const selectError = state => state.tasks.error; 
export const selectDeletetaskId = state => state.tasks.deletetaskId;
export const selectVisibleTasks = createSelector([selectTasks, selectFilter], (tasks, filter) => {
    console.log("tasks", tasks)
      console.log("filter",filter)
    const findTask = tasks.filter(task => task.priority.includes(filter));
    return findTask;
})