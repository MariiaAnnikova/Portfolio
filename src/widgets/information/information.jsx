import React from 'react'
import './information.css'
import { InformationTop} from  '../../features/informationTop/informationTop.jsx'
import { InfoIcons } from '../../features/infiIcons/infoIcons'
import { PrivateInfo } from '../../features/privateInfo/privateInfo'
import { ProgressBar } from '../../features/progressBar/progressBar'



export const Information = () => {
  return (
    <div className='information'>
< InformationTop />
<InfoIcons />
<PrivateInfo />
<ProgressBar />
    </div>
  )
}
