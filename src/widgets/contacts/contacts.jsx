import React from 'react'
import './contacts.css'
import { Element } from 'react-scroll'
import { Form } from '../../features/form/form'
import { ContactCard } from '../../features/contactCard/contactCard'

export const Contacts = () => {
  return (
    <Element name='contacts' className='contacts'>
    <Form />
    <ContactCard />
    </Element>
  )
}
