// const { Component } = require('react');
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// import { string } from 'prop-types';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: uuidv4(), name, number }],
      };
    });
    console.log(contacts);
  };

  onFilter = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.filter);
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = evt => {
    console.log(evt.target.id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== evt.target.id,
      ),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    // const filteredContacts = this.getVisibleContacts();
    // console.log(filteredContacts);
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilter} />
        <ContactList
          onClick={this.deleteContact}
          onGetVisibleContacts={this.getVisibleContacts}
        />
      </div>
    );
  }
}
