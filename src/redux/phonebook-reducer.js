// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './phonebook-types';
// import {
//   addContactsRequest,
//   addContactsSuccess,
//   addContactsError,
//   deleteContactsRequest,
//   deleteContactsSuccess,
//   deleteContactsError,
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './phonebook-actions';

// const items = createReducer([], {
//   [fetchContactsSuccess]: (_, { payload }) => payload,
//   [types.ADD]: (state, action) => [...state, action.payload],
//   [types.DELETE]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

export const filter = createReducer('', {
  [types.FILTER]: (_, action) => action.payload,
});

// export default combineReducers({
//   items,
//   filter,
// });
