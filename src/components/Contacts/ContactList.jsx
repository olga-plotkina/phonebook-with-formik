import { StyledContacts, ContactsItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => (
  <StyledContacts>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem key={id}>
        {name}
        {number}
      </ContactsItem>
    ))}
    ;
  </StyledContacts>
);
