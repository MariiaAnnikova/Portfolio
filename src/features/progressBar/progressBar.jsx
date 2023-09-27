
import { useTranslation } from 'react-i18next';

import React from "react";
import './progressBar.css'

export const ProgressBar = () =>  {

    const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

    return (
       <div className="container-bar">
           <p className="title-text">{t("button_skills")}</p>

           <div className="skill-box">
               <span className="title">HTML</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">85%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">CSS</span>
               <div className="skill-bar">
                   <span className="skill-per css">
                       <span className="tooltip">85%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">JavaScript</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">60%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Git / GitHub</span>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                       <span className="tooltip">60%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">ReactJS</span>
               <div className="skill-bar">
                   <span className="skill-per reactjs">
                       <span className="tooltip">60%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">MySql</span>
               <div className="skill-bar">
                   <span className="skill-per expressjs">
                       <span className="tooltip">75%</span>
                   </span>
               </div>
           </div>
       </div>
   )
}