import React, { useEffect } from 'react';
import { ContactForm, ContactList, Filter, Section } from './Phonebook';
import { fetchContacts } from '../redux/thunks';
import { selectError, selectLoader } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Error from './Error/Error';
import Loader from './Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoader);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {error ? (
        <Error />
      ) : (
        <>
          <Section title="Phonebook" />
          <ContactForm />
          <Section title="Contacts" />
          <Filter />
          {loader ? <Loader /> : <ContactList />}
        </>
      )}
    </>
  );
}

export default App;
