import React from "react"
import {GlobalOutlined} from "@ant-design/icons"
import { MailOutlined } from "@ant-design/icons"
import './contactCard.css'
import { useTranslation } from 'react-i18next';
export const ContactCard = () => {

    const { t, i18n } = useTranslation();


    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };


    return (
  
  
      
      <div className='all_contact'>
       <div className="icon_contact" >
        <p><GlobalOutlined /></p>

       </div>
       <div className="one_contact_card">
        <div>
            <p>{t("country")}</p>
            <p>{t("City")}</p>
            <p>{t("Street")}</p>
        </div>
        <div>
            <p>Italy, EU</p>
            <p>Cabella Ligure(AL)</p>
            <p>via della Ferriera </p>
        </div>
       </div>



       <div className="icon_contact">
        <p><MailOutlined /></p>

       </div>
       <div className="one_contact_card">
        <div>
            <p>Mail:</p>
            <p>Linkdin:</p>
            <p>GitHub:</p>
        </div>
        <div>
            <p>Radostu@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/maria-annikova-645b26b8/">Linkedin Annikova</a></p>
            <p><a href="https://github.com/MariiaAnnikova">GitHub Annikova</a> </p>
        </div>
       </div>

      </div>
    )
  }
  