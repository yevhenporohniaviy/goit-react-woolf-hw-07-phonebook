import axios from 'axios';

axios.defaults.baseURL = 'https://663dca5be1913c4767956b65.mockapi.io/';

export const getContactsApi = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const deleteContactApi = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data.id;
};

export const addContactApi = async newContact => {
  const { data } = await axios.post('contacts', newContact);
  return data;
};
