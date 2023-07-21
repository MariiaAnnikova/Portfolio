import React from 'react'
import './pharagraph.css'


export const Pharagraph = ({text, aling }) =>  {

   const alignText = aling === 'center' ? 'paragraphCenter' : ''; 

   return <p className={`paragraph ${alignText}`}> {text}</p>;
};