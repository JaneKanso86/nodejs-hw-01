import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  const contacts = await getAllContacts();
  console.log(contacts);
};

main();
