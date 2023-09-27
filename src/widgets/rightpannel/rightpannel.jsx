import React from 'react'
import './rightpannel.css'
import { Navigation } from '../../features/navigation/navigation'
import { useTranslation } from 'react-i18next';




export const RightPannel = () => {
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='right_pannel'>
       <div className='language'>
        <button onClick={() => changeLanguage('it')}>IT</button>
        <button onClick={() => changeLanguage('en')}>EN</button></div> 
    <Navigation /> </div>
  )
}
