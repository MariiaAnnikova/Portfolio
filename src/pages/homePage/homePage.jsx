import { Header } from '../../widgets/header/header';
import { Information } from '../../widgets/information/information';
import {  RightPannel } from '../../widgets/rightpannel/rightpannel';
import './homePage.css'
import '../../styles/index.css'
import { Education } from '../../widgets/education/education';
import { Work } from '../../widgets/work/work';
import { Portfolio } from '../../widgets/portfolio/portfolio';
import { Contacts } from '../../widgets/contacts/contacts';
import { Footer } from '../../widgets/footer/footer';

export const HomePage = () => {
  return (
    <div className='container'>
      <Information />
      <div className="inner">
        <Header />
       <Education />
       <Work />
       <Portfolio />
       <Contacts />
       <Footer />
      </div>
      <RightPannel />
    </div>
  );
}

