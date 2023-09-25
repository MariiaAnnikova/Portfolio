// import React from 'react'
// import './progressBar.css'



// export const ProgressBar = () =>  {
//   return (
  
//   <div className="container-bar">
//   <h1>SKILL</h1>
//     <div className='skill-container'>
       
//         <div className="skill_title">
// <p className="title">HTML</p>
// <p className="title">CSS</p>
// <p className="title">JavaScript</p>
// <p className="title">React</p>
// <p className="title">Git</p>
// <p className="title">MySQL</p>
// <p className="title">MongoDB</p>
// </div>
// <div className="skill_procent">
// <p className="procent">90%</p>
// <p className="procent">90%</p>
// <p className="procent">70%</p>
// <p className="procent">70%</p>
// <p className="procent">75%</p>
// <p className="procent">70%</p>
// <p className="procent">70%</p>
// </div>


//     </div>

//     </div>
//   )
// }


import React from "react";
import './progressBar.css'

export const ProgressBar = () =>  {
    return (
       <div className="container-bar">
           <h1 className="title-text">My skills</h1>

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