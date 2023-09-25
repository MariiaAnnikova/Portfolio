import React from 'react'
import './graduateTitle.css'


export const GraduateTitle = ( { data }) =>  {
  return (
    <div className='grade'>{ data.grade } </div>
  )
}
