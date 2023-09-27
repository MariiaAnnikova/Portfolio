import React from 'react'
import './certificare.css'
import { useTranslation } from 'react-i18next';

export const Certificate = () =>  {
    const { t, i18n } = useTranslation();


    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };
    return <div className='certificate_title'>
        <div> {t("work")}</div> 
    <div>{t("work_two")} </div>
    <div>{t("work_tree")} </div>
    <div>{t("work_four")} </div>
    <div>{t("work_five")} </div>
     </div>;
};