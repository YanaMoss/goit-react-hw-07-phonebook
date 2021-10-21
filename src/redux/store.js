import { configureStore } from '@reduxjs/toolkit';
// import phonebookReducer from './phonebook-reducer';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { phonebookApi } from '../services/phonebook-api';
import { filter } from './phonebook-reducer';

const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});
setupListeners(store.dispatch);
// eslint-disable-next-line import/no-anonymous-default-export
export default store;
