import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';

import { FormBox } from './ContactForm.styled';
// import { Component } from 'react';

const schema = yup
  .object()
  .shape({ name: yup.string().required(), number: yup.number().required() });
const initialValues = {
  name: '',
  number: '',
};
export const ContactForm = ({ submitProp }) => {
  // handleChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    submitProp(values);
    // this.reset();
  };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormBox>
        <label>
          Name
          <Field
            type="text"
            name="name"
            // value={this.state.name}
            // onChange={this.handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
          <ErrorMessage name="name" component="div" />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <ErrorMessage name="number" component="div" />
        </label>
        <button type="submit">Add contact</button>
      </FormBox>
    </Formik>
  );
};
