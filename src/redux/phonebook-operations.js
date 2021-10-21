// /* eslint-disable import/no-anonymous-default-export */
// import axios from 'axios';
// // import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
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

// const BASE_URL = 'http://localhost:3000';

// axios.defaults.baseURL = BASE_URL;

// const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   axios
//     .get('/contacts')
//     .then(({ contacts }) => dispatch(fetchContactsSuccess(contacts)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };

// const addContact = (name, number) => dispatch => {
//   const newContact = {
//     name,
//     number,
//   };

//   dispatch(addContactsRequest());

//   axios
//     .post('/contacts', newContact)
//     .then(({ contacts }) => dispatch(addContactsSuccess(contacts)))
//     .catch(error => dispatch(addContactsError(error)));
// };

// const deleteContact = id => dispatch => {
//   dispatch(deleteContactsRequest(id));

//   axios
//     .delete('/contacts')
//     .then(() => dispatch(deleteContactsSuccess(id)))
//     .catch(error => dispatch(deleteContactsError(error)));
// };

// export default { fetchContacts, addContact, deleteContact };
// // export const phonebookApi = createApi({
// //   reducerPath: 'phonebookApi',
// //   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),

// //   endpoints: builder => ({
// //     fetchContacts: builder.query({ query: () => '/contacts' }),
// //     createContact: builder.mutation({
// //       query: newContact => ({
// //         url: '/contacts',
// //         method: 'POST',
// //         body: newContact,
// //       }),
// //     }),
// //   }),
// // });

// // export const { useGetContacts } = phonebookApi;
