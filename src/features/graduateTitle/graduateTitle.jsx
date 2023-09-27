import React from 'react'
import './graduateTitle.css'
import { useTranslation } from 'react-i18next';

export const GraduateTitle = ( ) =>  {
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
   <div className='grade'> 
   <div >{ t("grade")}</div>
   <div>{ t("grade_two")}</div>
   <div>{ t("grade_tree")}</div>
   <div>{ t("grade_four")}</div>
   <div>{ t("grade_five")}</div>
   </div>
  )
}
