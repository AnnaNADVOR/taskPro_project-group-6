import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './tasks/slice';
import { authReducer } from './auth/slice';
import { columnsSlice } from './columns/slice';
import { filterSlice } from './filter/slice';
import { boardsSlice } from './boards/slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
        columns: columnsSlice.reducer,
        boards: boardsSlice.reducer,
        auth: authReducer,
        filter: filterSlice.reducer, 
    },
    middleware (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    },
})

export const persistor = persistStore(store);