import React from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ItemContact } from './Contacts.styled';
import { ItemListContact } from './Contacts.styled';
import { useFetchContacts } from '../../services/phonebook-api';
import { Button } from '../Button/Button';
import { List } from './Contacts.styled';
// import { deleteContact } from '../../redux/phonebook-actions';
// import { useDeleteContact } from '../../services/phonebook-api';

export function ContactList() {
  // const [deleteContact] = useDeleteContact;
  const [getContacts] = useFetchContacts();
  const contacts = useSelector(state =>
    getListContact(getContacts, state.phonebook.filter),
  );

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ItemListContact key={id}>
          <ItemContact>{name}:</ItemContact>
          <ItemContact>{number}</ItemContact>
          <Button
            title={'Delete'}
            type="button"
            onClick={() => 'deleteContact(id)'}
          />
        </ItemListContact>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  phonebook: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.func,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

const getListContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export default ContactList;
