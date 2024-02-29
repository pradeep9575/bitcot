import React, { useState } from 'react';
import './SearchContact.css';

export default function SearchContact({ contacts }) {
  const [search, setSearch] = useState('');
  const [view, setView] = useState([]);

  function searchUpdate() {
    

      const filterdata = contacts.filter(contact =>

        contact.name.includes(search) || contact.age.includes(search) ||contact.number.includes(search)

        )
        
        setView(filterdata);
      }
      
    
  

  return (
    <>
    
      
      
      <div id='box4'>
        {view.map((contact, index) => (
          <div key={index}>
            <div id='dabba'>

            <p>{contact.name}</p>
            <p>{contact.age}</p>
            <p>{contact.number}</p>
            </div>
            
          </div>
        ))}
        
      </div>
      
        <input type='search' placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchUpdate}>Search</button>
        </>
  );
}
