import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { filterSlice } from './filter/slice';
import { boardsReducer } from './boards/slice';
import { themeReducer } from './themes/slice';
import { requestHelpReducer } from './help/slice';

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
    boards: boardsReducer,
    auth: authReducer,
    filter: filterSlice.reducer,
    theme: themeReducer,
    help: requestHelpReducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
