import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const phonebookApi = createApi({
  reducerPath: 'phonebookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({ query: () => '/contacts' }),
    addContact: builder.mutation({
      query: (name, number) => ({
        url: '/contacts',
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: '/contacts',
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
  }),
});

export const { useFetchContacts, useAddContact, useDeleteContact } =
  phonebookApi;
