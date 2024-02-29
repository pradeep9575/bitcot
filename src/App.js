import React, { useState } from 'react'
import  {BrowserRouter,Routes,Route,Link} from "react-router-dom//"
import './App.css';
import ContactsView from './Components/ContactsView.js'
import AddContactModal from './Components/AddContactModal.js'
import SearchContact from './Components/SearchContact.js'

export default function App() {
  const [data, setData] = useState({ name: '', age: '', number: '' });
  const [contacts, setContacts] = useState([]);

  function handledsubmit(e) {
    e.preventDefault();
    
    let isDuplicate = contacts.find(contact => contact.name === data.name)

    if (isDuplicate) {
      alert("this data is alredy exists")
      return
    
    }
    setContacts([...contacts, data]);
  }
  

  function handledelete(index) {

  const updatdcontact = [...contacts]

    updatdcontact.splice(index, 1)

    setContacts(updatdcontact);
  }

  return (
    <>

      
      <div id='main'>

        <form onSubmit={handledsubmit}>
          <label>Your Name

          <input   className='inp' type='text' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
          </label>
          <label>Your age 

          <input  className='inp' type='number' value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })} required />
          </label>
          <label>Phone Number  
<input className='inp' type='number' value={data.number} onChange={(e) => setData({ ...data, number: e.target.value })} required />
          </label>
          
          
          <button type="submit">Submit</button>
        </form>

        <div>

          {contacts.map((contact, index) =>(

           
            <div key={index}>
              <AddContactModal contact={contact} />
              <button onClick={() => handledelete(index)}>Delete</button>
            </div>
          ))}
        </div>
        </div>
        <div>

        <nav id='navbar'>
        <BrowserRouter>
        
        <Link to="/Searchcontent">SearchContact</Link>
        <Link to="/contentview">contentview</Link>
        <Routes>
          <Route path='Searchcontent' element={<SearchContact contacts={contacts}/>}/>
          <Route path='Contentview' element={<ContactsView contacts={contacts}/> }/>


        </Routes>
        
        </BrowserRouter>
</nav>


      </div>
        

    </>
  )
}
