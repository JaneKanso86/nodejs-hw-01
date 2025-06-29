import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contactsCount = await readContacts();
    return `Number of contacts: ${contactsCount.length}`;
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  const result = await countContacts();
  console.log(result);
};

main();
