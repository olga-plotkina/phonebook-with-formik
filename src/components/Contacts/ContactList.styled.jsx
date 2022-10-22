import styled from 'styled-components';

export const StyledContacts = styled.ul`
  font-size: 28px;
`;

export const ContactsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
