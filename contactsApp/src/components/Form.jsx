import React, { useState } from 'react'
import "./components.css"

const Form = ({search}) => {
    const [form, setForm] = useState({name:"Akın",phone:"5"})
    const [persons, setPersons] = useState([{name:"Akın",phone:"5"}])
    const handleOnChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        setPersons([...persons,form])
        console.log(form);
    }
     /* /* Object.keys(person) personun keylerini verir name ve phone number */
     const searchingPerson=persons.filter(person=>
        Object.keys(person).some((key)=>    
        person[key].toString().toLowerCase().includes(search.toLowerCase())
        )
    ) 
 
  return (
    <div className='form-container'>
        <h2>Contacts</h2>
        <div className='list-container'>
        {
         searchingPerson.map((person,index)=>(
            <div key={index}>
                <h4>Name:{person.name}</h4>
                <h4>Phone:{person.phone}</h4>
                <hr />
            </div>
        ))}
        </div>
        

        <form className='add-container' onSubmit={handleOnSubmit}>
             <label htmlFor="name">Name</label>
        <input type="text" name='name' value={form.name} placeholder="Full Name" onChange={handleOnChange}  />
        <br />
        <label htmlFor="phone">Phone</label>
        <input type="number" name='phone' value={form.phone} placeholder="Phone Number"  onChange={handleOnChange}/ >
        <br />
        <button >Add</button>
        </form>
       
        

    </div>
  )
}

export default Form