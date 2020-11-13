import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER  
} from "../types";


const ContactState = props =>{
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Jill Johnson",
                email: "Jill@gmail.com",
                phone: "111-111-1111",
                type:"personal"
            },
            {
                id: 2,
                name: "David Smith",
                email: "david@gmail.com",
                phone: "222-111-1111",
                type:"personal"
            },
            {
                id: 3,
                name: "Robert Hallf",
                email: "robert@gmail.com",
                phone: "333-111-1111",
                type:"professional"
            },
        ], 
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

//Add Contact
    const addContact = contact=>{
        contact.id = uuid;
        dispatch({type:ADD_CONTACT, payload:contact})
    }
//Delete Contact
const deleteContact = id=>{
   
    dispatch({type:DELETE_CONTACT, payload:id})
}

//Set current contacct
const setCurrent = contact=>{
   
    dispatch({type:SET_CURRENT, payload:contact})
}

//Clear current contact
const clearCurrent = ()=>{
   
    dispatch({type:CLEAR_CURRENT})
}

//Update contact
const updateContact = contact=>{
   
    dispatch({type:UPDATE_CONTACT, payload:contact})
}

//Filter Contacts
const filterContact = text=>{
   
    dispatch({type:FILTER_CONTACTS, payload:text})
}


//Clear Filter
const clearFilter = ()=>{
   
    dispatch({type:CLEAR_FILTER})
}

return (
    <ContactContext.Provider value={{
        contacts: state.contacts,  
        current: state.current,
        filtered: state.filtered, 
        addContact, 
        deleteContact, 
        setCurrent,
        clearCurrent, 
        updateContact, 
        filterContact,
        clearFilter
    }}>
       
        {props.children}
    </ContactContext.Provider>
)

}


export default ContactState;
