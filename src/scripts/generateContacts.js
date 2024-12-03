import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => { 
    const contactList = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    const newContactList = [...contactList, ...newContacts];
    await writeContacts(newContactList);
};

generateContacts(5);
