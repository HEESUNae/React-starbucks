import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listReducer from './listSlice';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const rootReducer = combineReducers({
  list: listReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: ['list'],
  },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
