import { Header } from '../../widgets/header/header';
import { Information } from '../../widgets/information/information';
import {  RightPannel } from '../../widgets/rightpannel/rightpannel';
import './homePage.css'
import '../../styles/index.css'
import { WORK, EDUCATION } from '../../constants/workHistory';
import { Portfolio } from '../../widgets/portfolio/portfolio';
import { Contacts } from '../../widgets/contacts/contacts';
import { Footer } from '../../widgets/footer/footer';
import { WorkHistory } from '../../widgets/workHistory/workHistory';

export const HomePage = () => {
  return (
    <div className='container'>
      <Information />
      <div className="inner">
        <Header />
        <Portfolio />
  <WorkHistory name='education' data={EDUCATION}/>
  <WorkHistory name='work' data={WORK}/>
      
       <Contacts />
       <Footer />
      </div>
      <RightPannel />
    </div>
  );
}

