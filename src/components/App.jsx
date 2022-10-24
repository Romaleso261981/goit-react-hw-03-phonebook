import { FilterInput, NotificationSpan } from './AppStyle.js';
import { Component } from 'react';
import Notification from './Notification/Notification';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export default class App extends Component {
  state = { contacts: [], filter: '' };

  componentDidMount() {
    console.log(JSON.parse(localStorage.getItem('contacts')));
    const contactLength = JSON.parse(localStorage.getItem('contacts'));
    if (contactLength === null) return;
    this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  addContact = contact => {
    const { contacts } = this.state;
    if (
      contacts.filter(({ number }) => number === contact.number).length !== 0
    ) {
      alert(contact.number + ' this number is already in your phone book');
      return;
    }
    this.setState(prevState => {
      const newContact = { id: nanoid(), ...contact };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      console.log(updatedContacts);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return { ...this.state, contacts: updatedContacts };
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts , filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <ContactForm addContact={this.addContact} value={20} />
        <FilterInput type="text" onChange={this.handleFilter} />
        {filteredContacts.length > 0 ? (
          <ContactList
            contactsData={filteredContacts}
            deleteContact={this.deleteContact}
          />
        ) : (
          <NotificationSpan>
            <Notification message="No contacts yet" />
          </NotificationSpan>
        )}
      </>
    );
  }
}
