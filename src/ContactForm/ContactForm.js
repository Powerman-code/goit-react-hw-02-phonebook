import PropTypes from 'prop-types';
import { Component } from 'react';

import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    console.log(evt);
    // this.props.onAddContact(this.state);
    this.validateData();

    this.reset();
  };

  validateData = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;
    const normalizedFilter = name.toLowerCase();
    const msg = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFilter,
    );

    if (!name || !number) {
      alert('Введите правильное имя и телефон');
      return;
    }

    if (msg) {
      alert('Taкое имя уже есть');
      return;
    } else {
      this.props.onAddContact(this.state);
    }
  };

  handleNameChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
    // console.log(name);
    // console.log(value);
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            placeholder="Enter contact name"
            onChange={this.handleNameChange}
          ></input>
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            placeholder="Enter contact number"
            onChange={this.handleNameChange}
          ></input>
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
