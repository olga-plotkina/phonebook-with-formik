import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './App.styled';

import { ContactForm } from 'components/Phonebook/ContactForm';
import { ContactList } from 'components/Contacts/ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Olia', number: '87475' },
      { id: nanoid(), name: 'Alisa', number: '834758585' },
    ],
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      console.log(data);
    });
  };

  render() {
    return (
      <Form onSubmit={this.formSubmitHandler}>
        <h1>Phonebook </h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </Form>
    );
  }
}
