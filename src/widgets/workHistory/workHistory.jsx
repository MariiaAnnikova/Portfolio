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


  const mainInfo = data.history.map((work, index) => (
    <WorkCard data={work} key={`work_${index}`} />
  ));

const certificateInfo = data.history.map((work,index) => (
  <Certificate data={work} key={`work_${index}`} />
));

const graduareTitle = data.history.map((work, index) => (
  <GraduateTitle data={work} key={`work_${index}`} />
));

const graduateData = data.history.map((work, index) => (
  <DateOfJob data={work} key={`work_${index}`} />
  ));

  const aboutTitle = data.history.map((work, index) => (
    <AboutTitle data={work} key={`work_${index}`} />
    ));





  return (
    <Element name={name} className='work_history'>

<div className="headerInfo">
        <TitleHeaderWork  header={data.header} />
        <Pharagraph aling="center" text={data.title} />
      </div>
      <div className='title_block'>
      <div className="mainInfo">{mainInfo}</div>
      <div className='certificateInfo'>{certificateInfo}</div>
      </div>
      <div>
        <div className="graduate_title">{graduareTitle}</div>
        <div className="graduate_data">{graduateData}</div>
        <div className="about_title">{aboutTitle }</div>
      </div>
      </Element>
  )
}
