import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './thunks';
import {
  handlerAddContact,
  handlerGetContactsFulfilled,
  handlerPending,
  handlerRejected,
  handlerDeleteContactFulfilled,
} from './handler';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: '',
  },
  extraReducers: bilder => {
    bilder
      .addCase(fetchContacts.fulfilled, handlerGetContactsFulfilled)
      .addCase(addContact.fulfilled, handlerAddContact)
      .addCase(deleteContact.fulfilled, handlerDeleteContactFulfilled)
      .addMatcher(action => action.type.endsWith('pending'), handlerPending)
      .addMatcher(action => action.type.endsWith('rejected'), handlerRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
