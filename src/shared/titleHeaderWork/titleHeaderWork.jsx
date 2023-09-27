import React from 'react'
import './titleHeaderWork.css'
import { useTranslation } from 'react-i18next';

export const TitleHeaderWork = ({header}) =>  {
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
<h2 className='headerSecondary' > {t("header_ed")}</h2>
  )
}
