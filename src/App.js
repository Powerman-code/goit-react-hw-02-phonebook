// const { Component } = require('react');
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
    activeOptionIndex: 0,
  };

  // handleNameChange = evt => {
  //   const { name, value } = evt.target;
  //   this.setState({
  //     [name]: value,
  //   });
  //   // console.log(name);
  //   // console.log(value);
  // };

  onAddContact = ({ name, number }) => {
    // const { contacts, name, number, value } = this.state;
    // contacts.push({ name, number, id: uuidv4() });

    const { contacts } = this.state;

    const normalizedFilter = name.toLowerCase();

    const msg = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFilter,
    );

    if (msg) {
      alert('Taкое имя уже есть');
    } else contacts.push({ name, number, id: uuidv4() });

    console.log(msg);
    console.log(name);
    // console.log(normalizedFilter);
    // console.log(value);
    console.log(contacts);
  };

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   console.log(this.state);
  //   console.log(evt);
  //   this.onAddContact();
  //   // this.props.onSubmit(this.state);
  //   this.reset();
  // };

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

  // reset = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

  render() {
    const { filter, name, number, contacts } = this.state;

    const filteredContacts = this.getVisibleContacts();

    // const normalizedFilter = filter.toLowerCase();

    // const filteredContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter),
    // );

    console.log(filteredContacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          // onSubmit={this.handleSubmit}
          // onChange={this.handleNameChange}
          onAddContact={this.onAddContact}
        />
        {/* <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleNameChange}
            ></input>
          </label>
          <label>
            Number
            <input
              type="number"
              name="number"
              value={number}
              onChange={this.handleNameChange}
            ></input>
          </label>
          <button
            type="submit"
            // onClick={this.onAddContact}
          >
            Add contact
          </button>
        </form> */}

        <div>
          <h2>Contacts</h2>
          <ul>
            Contacts
            <label>
              <input
                type="string"
                name="filter"
                value={filter}
                onChange={this.onFilter}
              ></input>
            </label>
            {
              filteredContacts &&
                filteredContacts.map((filteredContact, index) => (
                  <li key={filteredContact.id}>
                    <p>
                      {filteredContact.name} {filteredContact.number}
                    </p>
                    <button
                      type="button"
                      id={filteredContact.id}
                      onClick={this.deleteContact}
                    >
                      Delete
                    </button>
                  </li>
                ))
              // contacts.length > 0 &&
              //   contacts.map(contact => (
              //     <li key={contact.id}>
              //       {contact.name} {contact.number}
              //     </li>
              //   ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
