import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
import types from './phonebook-types';

// export const fetchContactsRequest = createAction(
//   'phonebook/fetchContactsRequest',
// );
// export const fetchContactsSuccess = createAction(
//   'phonebook/fetchContactsSuccess',
// );
// export const fetchContactsError = createAction('phonebook/fetchContactsError');

// export const addContactsRequest = createAction('phonebook/addContactsRequest');
// export const addContactsSuccess = createAction('phonebook/addContactsSuccess');
// export const addContactsError = createAction('phonebook/addContactsError');

// export const deleteContactsRequest = createAction(
//   'phonebook/deleteContactsRequest',
// );
// export const deleteContactsSuccess = createAction(
//   'phonebook/deleteContactsSuccess',
// );
// export const deleteContactsError = createAction(
//   'phonebook/deleteContactsError',
// );

export const filterContact = createAction(types.FILTER);

// export const addContact = createAction(types.ADD, (name, number) => {
//   return {
//     payload: {
//       id: uuidv4(),
//       name,
//       number,
//     },
//   };
// });

// export const deleteContact = createAction(types.DELETE);
// export const filterContact = createAction(types.FILTER);
