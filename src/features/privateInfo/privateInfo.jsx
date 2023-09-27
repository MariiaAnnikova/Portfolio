import React from 'react'
import './privateInfo.css'
import { useTranslation } from 'react-i18next';

export const PrivateInfo = () =>  {
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='info_block'>
<div className='info_left'>
    <p>{t("age_title")}</p>
    <p>{t("residence_title")}</p>
    <p>{t("freelance_title")}</p>
    <p>{t("adress_title")}</p>
</div>
<div className='info_right'>
    <p>{t("age")}</p>
    <p>{t("residence")}</p>
    <p>{t("freelance")}</p>
    <p>{t("adress")}</p>
</div>

    </div>
  )
}
