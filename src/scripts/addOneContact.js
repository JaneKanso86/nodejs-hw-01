import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    console.log('new:', newContact);

    const existingContacts = await readContacts();
    const updatedContacts = [...existingContacts, newContact];

    await writeContacts(updatedContacts);
    console.log(`🎉 Successfully added 1 contact.`);
  } catch (err) {
    console.error('❌ Error adding contact:', err.message);
  }
};

addOneContact();
