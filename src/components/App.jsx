import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './App.styled';

import { ContactForm } from 'components/Phonebook/ContactForm';
import { ContactList } from 'components/Contacts/ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Olia' },
      { id: nanoid(), name: 'Alisa' },
    ],
  };

  render() {
    return (
      <Form>
        <h1>Phonebook </h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </Form>
    );
  }
}
