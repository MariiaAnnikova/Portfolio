import React from 'react'
import './workCard.css'
import { useTranslation } from 'react-i18next';

export const WorkCard = () =>  {

   const { t, i18n } = useTranslation();


   const changeLanguage = (language) => {
     i18n.changeLanguage(language);
   };
   return <div className='work_card'><div> { t("mainInfo")}</div>
   <div> { t("mainInfoTwo")}</div>
   <div> { t("mainInfo_tree")}</div>
   <div> { t("mainInfo_four")}</div>
   <div> { t("mainInfo_five")}</div>
   </div>
};