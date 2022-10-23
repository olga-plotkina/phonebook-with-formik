import styled from 'styled-components';

export const StyledContacts = styled.ul`
  font-size: 28px;
`;

export const ContactsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  button {
    padding: 5px;
    margin-left: 10px;
    background-color: white;
    border: 1px solid grey;
    border-radius: 4px;
    font-size: 22px;
    cursor: pointer;
  }
`;
