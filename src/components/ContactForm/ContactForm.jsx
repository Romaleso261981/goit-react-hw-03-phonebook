import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  InputLabel,
  FormWrap,
  InputSpan,
  InputSpanName,
  FormBtn,
  InputForm,
} from './ContactFormStyle.js';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ [fieldName]: value });
  };

  onSubmit = e => {
    const { addContact } = this.props;
    e.preventDefault();
    addContact({ ...this.state });
    this.reset();
  };

  reset = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;
    return (
      <FormWrap onSubmit={this.onSubmit}>
        <InputLabel>
          <InputSpanName>Name</InputSpanName>
          <InputForm
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
          />
        </InputLabel>
        <InputLabel>
          <InputSpan>Number</InputSpan>
          <InputForm
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          />
        </InputLabel>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormWrap>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
