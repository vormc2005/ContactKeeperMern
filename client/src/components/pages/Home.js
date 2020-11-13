import React from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from "../contacts/ContactForm"
import ContactFilter from "../contacts/ContactFlter"
import ContactFlter from '../contacts/ContactFlter'

const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <ContactFlter />
                <ContactForm/>
            </div>
            <div>
            <Contacts/>
            </div>
           
        </div>
    )
}

export default Home
