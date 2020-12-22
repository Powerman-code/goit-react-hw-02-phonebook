import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ onClick, onGetVisibleContacts }) {
  const filteredContacts = onGetVisibleContacts();
  return (
    <ul>
      {filteredContacts &&
        filteredContacts.map((filteredContact, index) => (
          <li key={filteredContact.id}>
            <p>
              {filteredContact.name} {filteredContact.number}
            </p>
            <button
              type="button"
              id={filteredContact.id}
              onClick={onClick}
              className={s.button}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  onGetVisibleContacts: PropTypes.func.isRequired,
};
