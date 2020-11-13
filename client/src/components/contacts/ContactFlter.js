import React, {useContext, useRef, useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFlter = () => {

    const contactContext = useContext(ContactContext);
    const {filterContact, clearFilter, filtered } = contactContext
    const text = useRef('')

    useEffect(()=>{
        if(filtered === null){
            text.current.value ='';
        }
    })

    const onChange =e=>{
        if(text.current.value !== ''){
            filterContact(e.target.value);
        }else{
            clearFilter();
        }
    };


    return (
        <form>
            <input 
                    ref={text} 
                    type="text" 
                    placeholder="Filter Contacts..." 
                    onChange = {onChange}/>
        </form>
    )
}

export default ContactFlter
