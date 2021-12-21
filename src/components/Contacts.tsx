import React from 'react';
import Contact from './Contact';

type ContactType = {
  id: number;
  src: string;
  name: string;
}

interface ContactsProps {
  contacts: ContactType[]
}

const Contacts: React.FC<ContactsProps> = ({ contacts }) => {
  return (
    <div className='flex flex-col'>
      {contacts.map((contact) => (
        <Contact key={contact.id} src={contact.src} name={contact.name} />
      ))}
    </div>
  )
}

export default Contacts;
