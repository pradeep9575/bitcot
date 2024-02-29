import React from 'react';
import './AddContactModal.css';

export default function AddContactModal({ contact}) {
  

  return (
    <div>
      <p id='box'>
        your name: {contact.name}
        <br />
        your age: {contact.age}
        <br />
        your number: {contact.number}
        <br />
      </p>
    </div>
  );
}
