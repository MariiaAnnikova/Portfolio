import React, { useState } from 'react'
import './form.css'
import {useForm} from 'react-hook-form'
import { useTranslation } from 'react-i18next';

export const Form = ()  => {
  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
    const { 
      register,
       handleSubmit,
       formState: {errors}
       } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
      <div className='right_side_contact_banner'>
        <h3>{t("write_me")} </h3>
      <form  className="all_form" onSubmit={handleSubmit(onSubmit)}>
      <div className='name_form'>
        <label className='name_of_input'>{t("input_name")}</label>
        <br/>
        <input 
          {...register("name", { required: true, pattern: /^[a-zA-Z]{2,}$/ })}
          className={errors.name ? "errorInput" : ""}
        />
      </div>
      <div className='mail_form'>
        <label className='name_of_input'>{t("input_mail")}</label>
        <br/>

        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          })}
          className={errors.email ? "errorInput" : ""}
        />
      </div>
      <div className='subject_form'>
        <label className='name_of_input'>{t("input_subject")}</label>
        <br/>
        <input {...register("subject")} />
      </div>
    <button     className="button_submit"  type="submit">{t("write_me_btn")}</button>
    </form>
    </div>
  );
};