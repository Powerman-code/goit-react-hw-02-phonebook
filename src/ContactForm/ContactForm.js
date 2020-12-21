import { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
    console.log(evt);
    this.props.onAddContact(this.state);
    // this.props.onSubmit(this.state);
    this.reset();
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter contact name"
            onChange={this.handleNameChange}
          ></input>
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            placeholder="Enter contact number"
            onChange={this.handleNameChange}
          ></input>
        </label>
        <button
          type="submit"
          // onClick={this.onAddContact}
        >
          Add contact
        </button>
      </form>
    );
  }
}
