import {
    ADD_CONTACT,
    EDIT_CONTACT,
    DELETE_CONTACT,
  } from "./actionType";
  
  export const addContact = (contact, data) => {
    const payload = { id: data.length+1,...contact };
    return { type: ADD_CONTACT, payload };
  };
  
  export const editContact = (editedContact, data) => {
    const payload = data.map((contact) =>
      contact.id == editedContact.id ? editedContact : contact
    );
    return { type: EDIT_CONTACT, payload };
  };
  

  export const deleteContact = (id, data) => {
      const payload = data.filter((contact) =>
        contact.id !== id
      );
      return { type: DELETE_CONTACT, payload };
    };
  
    