import React from 'react'
import { Element } from 'react-scroll'
import './workHistory.css'
import { TitleHeaderWork } from '../../shared/titleHeaderWork/titleHeaderWork.jsx'
import { Pharagraph } from '../../shared/pharagraph/pharagraph'
import { WorkCard } from '../../features/workCard/workCard'
import { Certificate } from '../../features/certificate/certificate'
import { GraduateTitle } from '../../features/graduateTitle/graduateTitle'
import { DateOfJob } from '../../features/dateOfJob/dateOfJob'
import { AboutTitle } from '../../features/aboutTitle/aboutTitle'


export const WorkHistory = ({ name, data }) => {
 



  return (
    <Element name={name} className='work_history'>

<div className="headerInfo">
        <TitleHeaderWork   />
        <Pharagraph />
      </div>
      <div className='title_block'>
      <div className="mainInfo"><WorkCard /></div>
      {/* <div className='certificateInfo'><GraduateTitle /></div> */}
        <div className="graduate_title"><Certificate /></div>
        <div className="graduate_data"><DateOfJob /></div> 
       
       </div>
      
      </Element>
  )
}
