import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeContact = createAction('contacts/changeContacts');
const contactsAction = { addContact, deleteContact, changeContact };
export default contactsAction;
