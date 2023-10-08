import React from 'react'
import { useState } from 'react'

const AddContact = ({addContact}) => {

  const[contactData,setContactData]=useState({name:"",email:""})
  
  const handleChange = (e) =>{
    if(e.target.name==="name"){
      setContactData({...contactData,name:e.target.value})
    }
    else{
      setContactData({...contactData,email:e.target.value})
    }
  }

  const handleAdd=(e)=>{
    if(contactData.name==="" || contactData.email===""){
      alert("Please provide your emAil and Name")
    }
    addContact(contactData)
    
  }



  return (
    <div className='formHeader'>
      <div className='add-contact'>Add Contact</div>
      <form>
        <label>Name:</label><br/>
        <input type='text' placeholder='enter name' name='name' value={contactData.name} onChange={handleChange}/><br/>
        <label>Email:</label><br/>
        <input type='email' placeholder='enter your email' name='Email' value={contactData.email} onChange={handleChange}></input><br/>
      </form>
      <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContact
