import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    console.log('📁 PATH_DB:', PATH_DB);
    console.log('✍️ Writing contacts:', updatedContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
    console.log('✅ Successfully written to file.');
  } catch (err) {
    console.error('❌ Error writing contacts:', err.message);
  }
};
