import React from 'react'
import './navigation.css'
import { Link } from 'react-scroll'
import contact  from '../navigation/images/contact.svg'
import cv from './images/cv.svg'
import home from './images/home.svg'
import portfolio from './images/portfolio.svg'

export const  Navigation = () =>  {
  return (
    <nav className='navigation'>
        <ul>
            <li className='item'>
                <Link activeClass="active"
                 to="header" 
                 smooth={true} 
                 duration={500}>
            <img src={home} alt='icon' />
        </Link></li>




            <li className='item'><Link activeClass="active"
                 to="education" 
                
                 smooth={true} 
                 
                 duration={500} 
                 >
            <img src={cv} alt='icon' /></Link></li>


            <li className='item'><Link activeClass="active"
                 to="work" 
                
                 smooth={true} 
                 
                 duration={500} 
                 >
            <img src={portfolio} alt='icon' /> </Link></li>


            <li className='item'>
            <Link activeClass="active"
                 to="contacts" 
                
                 smooth={true} 
                 
                 duration={500} 
                 >
          <img src={contact} alt='icon' />
          </Link></li>
            </ul>
    </nav>
  )
}
