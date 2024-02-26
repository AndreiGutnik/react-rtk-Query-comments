import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { commentsApi } from './services/comments';

export const store = configureStore({
  reducer: {
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    commentsApi.middleware,
  ],
});

setupListeners(store.dispatch);
