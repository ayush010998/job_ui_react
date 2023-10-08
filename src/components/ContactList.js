import React from 'react'

const ContactList = (props) => {
    const {contact,removeContact}=props
    const contactList=contact.map((val)=>{
        return(
            <div>
                <div>{val.data.name}</div>
                <div>{val.data.email}</div>
                <button onClick={()=>removeContact(val.id)} >Delete</button>
            </div>
        )
    })
  return (
    <div>
        <div>Contact List</div>
        <div>{contactList}</div>
    </div>
  )
}

export default ContactList
