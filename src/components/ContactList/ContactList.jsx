import { StyledContacts, ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <StyledContacts>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </ContactsItem>
    ))}
  </StyledContacts>
);
