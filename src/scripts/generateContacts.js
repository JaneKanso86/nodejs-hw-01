import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (amount = 5) => {
  try {
    const newContact = faker.helpers.multiple(createFakeContact, {
      count: amount,
    });
    console.log('new:', newContact);
    const existingContacts = await readContacts();
    const updatedContacts = [...existingContacts, ...newContact];

    await writeContacts(updatedContacts);
    console.log(`🎉 Successfully added ${amount} contacts.`);
  } catch (err) {
    console.error('❌ Error in generateContacts:', err.message);
  }
};

generateContacts();
