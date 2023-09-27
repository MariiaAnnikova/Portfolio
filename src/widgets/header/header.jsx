import React from 'react'
import './header.css'
import { Element } from 'react-scroll'
import photo_me from './picture/photo_me.png'



export const  Header = () => {
  return (
    <Element name='home' className='header'>
      <div className='all_header'>
      <div className='left_header'>
<h1>I'm Annikova Mariia </h1>
<h1>Front-end Developer </h1>

<h4>Passionate and self organize web developer.  </h4>
<h4>Making user-friendly and responsive websites with HTML, CSS, JavaScript, and React. Engoying to lern new technologies. </h4>


<button className='btn_hire_me'> <a href='https://wa.me/393484558431'>Contact me </a> </button>
      </div>

      <div className='right_header'>
        <img src={photo_me} alt='Annikova Mariia FrontDeveloper ' />
      </div>
      </div>
    </Element>
  )
}
