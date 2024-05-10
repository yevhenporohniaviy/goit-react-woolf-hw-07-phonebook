import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const filterList = useSelector(selectVisibleContacts);

  return (
    <ul>
      {filterList.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
