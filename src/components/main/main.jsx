
import React, { useContext } from 'react';
import Light from './light';
import "./main.css";
import Aboutme from './aboutme/aboutme';
import Welcome from './aboutme/welcome';
import Project from './project/project';
import Navbar from '../navbar/navbar';
import Section from '../section/section';
import Railway from '../TrainComponent/railway';
import Partsections from '../section/partsections';
import LanguageContext from '../../context/context';
import hbo from '../../asset/image/doc/hbo.jpg';
import mbo3 from '../../asset/image/doc/mbo3.jpg';
import doc1 from '../../asset/image/doc/Capture.PNG';

export default function Main() {
  const { t } = useContext(LanguageContext);
  
  // EDUsection
  const sectionTitle = t('EDUsection.title');
  const firstPart = {
    title: t('EDUsection.firstPart.title'),
    description: t('EDUsection.firstPart.description'),
  };
  const secondPart = {
    title: t('EDUsection.secondPart.title'),
  };
  const firstPartImages = [hbo, doc1];
  const secondPartImage = mbo3;

  // WEsection
  const workSectionTitle = t('WEsection.title');
  const workFirstPart = {
    title: t('WEsection.firstPart.title'),
    companyName: t('WEsection.firstPart.companyName'),
    period: t('WEsection.firstPart.period'),
    description: t('WEsection.firstPart.description'), // No map, it's a string now
  };
  //wesection1
  const workSectionTitle1 = t('WEsection.title');
  const workFirstPart1 = {
    title: t('WEsection1.firstPart.title'),
    companyName: t('WEsection1.firstPart.companyName'),
    period: t('WEsection1.firstPart.period'),
    description: t('WEsection1.firstPart.description'), // No map, it's a string now
  };
  const worsecendPart1 = {
    title: t('WEsection1.secondPart.title'),
    companyName: t('WEsection1.secondPart.companyName'),
    period: t('WEsection1.secondPart.period'),
    description: t('WEsection1.secondPart.description'), // No map, it's a string now
  };

  return (
    <div className='main'>
      <nav>
        <Navbar />
      </nav>
      <Welcome />
      <Aboutme />
      
      {/* EDUsection */}
      <Section 
        sectionTitle={sectionTitle}
        firstPart={{ ...firstPart, docs: firstPartImages }} 
        secondPart={{ ...secondPart, doc: secondPartImage }}
        direction="row"
        startColor="#08070C" 
        middleColor="rgba(16, 125, 152, 0.8)" 
        endColor="#08070C "
        backgroundColorInfo="linear-gradient(124deg, rgba(68, 139, 238, 0.14) 16.17%, rgba(47, 126, 236, 0.00) 74.83%)"
      />
      
      <Railway
        startColor="rgb(53, 140, 181)" 
        middleColor="rgba(16, 125, 152, 0.8)" 
        endColor="rgb(219, 101, 205)"
      />

      {/* WEsection */}
      <Section
        sectionTitle={workSectionTitle}
        firstPart={workFirstPart}
        direction="row-reverse"
        backgroundColor="rgb(219, 101, 205)"
       startColor="rgb(219, 101, 205)" 
       middleColor="rgba(219, 101, 205, 0.8)" 
       endColor="rgb(219, 101, 205)"
       backgroundColorInfo="linear-gradient(180deg,#07060B 50%,#0A090E 100%)"
      />
      
      <Railway
        startColor="rgb(53, 140, 181)" 
        middleColor="rgba(16, 125, 152, 0.8)" 
        endColor="rgb(219, 101, 205)"
      />
      
      <Section
      sectionTitle={workSectionTitle1}
      firstPart={workFirstPart1}
      secondPart={worsecendPart1}
        direction="row"
        startColor="#08070C" 
        middleColor="rgb(36, 80, 85)" 
        endColor="rgba(36, 80, 85, 0.20)"
        backgroundColor="rgb(36, 80, 85)"
        backgroundColorInfo="linear-gradient(124deg, rgba(36, 80, 85, 0.20) 25.17%, rgba(36, 80, 85, 0.00) 74.83%)"
      />
      
      <Railway
        startColor="rgba(16, 125, 152, 0.8)" 
        middleColor="rgba(183, 9, 9)" 
        endColor="black" 
      />
      
      <Partsections 
        backgroundColor="rgb(183, 9, 9)"
        startColor="#08070C" 
        middleColor="rgb(183, 9, 9)" 
        endColor="rgb(137, 8, 8)"
      />
      
      <Project />
      <Light />
    </div>
  );
}



