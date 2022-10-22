import { StyledContacts, ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => (
  <StyledContacts>
    {contacts.map(({ id, name }) => (
      <ContactsItem key={id}>{name}</ContactsItem>
    ))}
    ;
  </StyledContacts>
);
