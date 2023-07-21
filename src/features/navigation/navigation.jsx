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
       
                <Link 
                className='item itemHome'
                activeClass="active"
                 to="home" 
                 smooth={true} 
                 duration={500}>
            <img src={home} alt='icon' />
        </Link>




          <Link  className="item"
                 to="education" 
                
                 smooth={true} 
                 
                 duration={500} 
                 >
            <img src={cv} alt='icon' /></Link>


           <Link className="item"
                 to="portfolio" 
                
                 smooth={true} 
                 
                 duration={500} 
                 >
            <img src={portfolio} alt='icon' /> </Link>


       
            <Link className="item"
                 to="contacts" 
                
                 smooth={true} 
                 
                 duration={500} 
                 >
          <img src={contact} alt='icon' />
          </Link>
            
    </nav>
  )
}
