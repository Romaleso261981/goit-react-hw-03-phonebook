import { FilterInput, NotificationSpan } from './AppStyle.js';
import { Component } from 'react';
import Notification from './Notification/Notification';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
const INITIAL_STATE = {
  contacts: [
    { id: nanoid(), name: 'коля мельніков', number: '097 742 4367' },
    { id: nanoid(), name: 'коля подсобнік', number: '068 823 9986' },
    { id: nanoid(), name: 'леся', number: '645-17-79' },
    { id: nanoid(), name: 'Сергій Дикий', number: '067......54' },
  ],
  filter: '',
};

export default class App extends Component {
  state = { ...INITIAL_STATE };
  

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  addContact = contact => {
    const { contacts } = this.state;
    if (contacts.filter(({ number }) => number === contact.number).length !== 0) {
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
    console.log(id);
    this.setState(({ contacts }) => {
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      return { ...INITIAL_STATE, contacts: updatedContacts };
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

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
