import React from 'react'
import './pharagraph.css'
import { useTranslation } from 'react-i18next';

export const Pharagraph = ({text }) =>  {

   const { t, i18n } = useTranslation();


   const changeLanguage = (language) => {
     i18n.changeLanguage(language);
   };

   return <p > {t("title_ed")}</p>;
};