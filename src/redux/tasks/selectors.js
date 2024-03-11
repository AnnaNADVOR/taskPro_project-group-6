import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";
import { selectAllColumns } from '../columns/selectors';

export const selectTasks = state => state.tasks.tasksList;
export const selectIsLoadingAdd = state => state.tasks.isLoadingAdd; 
export const selectError = state => state.tasks.error; 
export const selectDeletetaskId = state => state.tasks.deletetaskId;

export const selectVisibleTasks = createSelector([selectTasks, selectAllColumns, selectFilter], (tasks, columns, filter) => {
    const currentTasks = columns.reduce((prev, column) => {
        return prev.concat(column.tasks.map(task => {
            return {...task, columnId: column._id }
        }))
    }, tasks)

    const idSet = new Set([])

    const findTask = currentTasks.filter(task => {
        if (!task) {
            return false
        }

        if (idSet.has(task._id)) {
            return false
        }

        idSet.add(task._id)

        return task.priority.includes(filter)
    } );
    
    return findTask;
})