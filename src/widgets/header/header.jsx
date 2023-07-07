import React from 'react'
import './header.css'
import { Element } from 'react-scroll'
import photo_me from './picture/photo_me.png'



export const  Header = () => {
  return (
    <Element name='header' className='header'>
      <div className='all_header'>
      <div className='left_header'>
<h1>I'm Annikova Mariia </h1>
<h1>Front-end Developer </h1>

<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
<h5> Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>

<button className='btn_hire_me'> Hire me </button>
      </div>

      <div className='right_header'>
        <img src={photo_me} alt='Annikova Mariia FrontDeveloper ' />
      </div>
      </div>
    </Element>
  )
}
