import React from 'react'
import {FacebookOutlined} from '@ant-design/icons'
import {InstagramOutlined} from '@ant-design/icons'
import {LinkedinOutlined} from '@ant-design/icons'
import {WhatsAppOutlined} from '@ant-design/icons'
import {GithubOutlined} from '@ant-design/icons'
import'./infoIcons.css'


export const InfoIcons = ()  => {
  return (
    <div>
    <div className='info_icons'>
    <a href='https://www.facebook.com/masha.annikova/'><FacebookOutlined /></a>
   <a href='https://www.instagram.com/italy_russo_/'><InstagramOutlined /> </a> 
   <a href='https://www.linkedin.com/in/maria-annikova-645b26b8/'> <LinkedinOutlined /></a> 
   <a href='https://wa.me/393484558431'> <WhatsAppOutlined /></a> 
   <a href='https://github.com/MariiaAnnikova'> <GithubOutlined /></a> 

        </div>
          <div className='line'></div>
          </div>
  )
}
