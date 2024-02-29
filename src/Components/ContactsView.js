import React, { useState } from 'react';
import  './ContactView.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function ContactsView({ contacts }) {
  const [showdata, setShowdata] = useState(true)

  function togglefun() {
    setShowdata(!showdata);
  }

  
  return (
    <>
      <div id='main1'>
        {contacts.map((contact, index) => (
          <div key={index}>
            {showdata ? (
              <p id='box1'>{contact.name},<br/> {contact.age}, <br/>{contact.number}</p>
            ) : (
              <p>{''}</p>
            )}
          </div>
        ))}
      </div>
      <RemoveRedEyeIcon onClick={togglefun}/>
    </>
  );
}
