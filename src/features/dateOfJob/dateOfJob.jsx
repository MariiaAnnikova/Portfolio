import React from 'react'
import './dateOfJob.css'
import { useTranslation } from 'react-i18next';

export const DateOfJob = ({ data })  => {
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='date_of_job'>
    <div >{t("data")}</div>
    <div >{t("data_two")}</div>
    <div >{t("data_tree")}</div>
    <div >{t("data_four")}</div>
    <div >{t("data_five")}</div>
    </div>
  )
}
