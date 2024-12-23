import React, { useEffect,useState } from 'react'
import bg from '../../../asset/video/bg.gif';
import LanguageContext from '../../../context/context'
import './welcome.css'
import MyPhoto0 from "../../../asset/image/m.jpg"
import MyPhoto1 from "../../../asset/image/my1.jpg"
import MyPhoto2 from "../../../asset/image/my2.jpg"
import { motion } from "framer-motion";
export default function Welcome() {
  const MyPhoto = [MyPhoto0, MyPhoto2,MyPhoto1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const { t } = React.useContext(LanguageContext)
  useEffect(() => {
    const grainnoice = document.querySelector('.grain-noice');
    if (grainnoice) {
      console.log('grainnoice');
      grainnoice.style.backgroundImage = `url(${bg})`;
    }
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % MyPhoto.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [MyPhoto.length]);
  return (
    <>
    <div className='wel-con'>
    <div className='welcome'>
      <div className='grain-noice' ></div>
      <hgroup>
        <h1>{t('Welcome')}</h1>
        <h2>{t('name')}</h2>
        <p>{t('position')}</p>
        <h3>{t('where')}</h3>
        <h2>{t('what i do')}</h2>
      </hgroup>
    </div>
    <div className='img-con'>
      
      <div className="fancy-inner-element "></div>
      <div className='overflow'>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }}  
        exit={{ opacity: 0, x: 50 }}    
        transition={{ duration: 0.8 }}  
        className="slideshow-image-wrapper"
      >
        <img src={MyPhoto[currentIndex]} alt="slideshow" />
      </motion.div>
      </div>
    </div>
    </div>
    <div className='Bar'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 680 44"
        >
          <g id="Frame ">
            <path fill="none" d="M0 0H680V54H0z"></path>
            <g id="Bars" clipPath="url(#clip012)">
              <path id="Rectangle" fill="#29B9CD" d="M57 15H0v24h57V15z"></path>
              <path id="Rectangle2" fill="#29B9CD" d="M113 15H57v24h56V15z"></path>
              <path
                id="Rectangle3"
                fill="#FF929F"
                d="M170 15h-57v24h57V15z"
              ></path>
              <path
                id="Rectangle4"
                fill="#FF929F"
                d="M227 15h-57v24h57V15z"
              ></path>
              <path
                id="Rectangle5"
                fill="#FFAC92"
                d="M283 15h-56v24h56V15z"
              ></path>
              <path
                id="Rectangle6"
                fill="#FFD392"
                d="M340 15h-57v24h57V15z"
              ></path>
              <path
                id="Rectangle7"
                fill="#FFD392"
                d="M397 15h-57v24h57V15z"
              ></path>
              <path
                id="Rectangle8"
                fill="#92FFB0"
                d="M453 15h-56v24h56V15z"
              ></path>
              <path
                id="Rectangle9"
                fill="#92F2FF"
                d="M510 15h-57v24h57V15z"
              ></path>
              <path
                id="Rectangle10"
                fill="#92CAFF"
                d="M567 15h-57v24h57V15z"
              ></path>
              <path
                id="Rectangle11"
                fill="#A192FF"
                d="M623 15h-56v24h56V15z"
              ></path>
              <path
                id="Rectangle12"
                fill="#DC92FF"
                d="M680 15h-57v24h57V15z"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath id="clip012">
              <rect width="680" height="24" y="15" fill="#fff" rx="12"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      </>
    
  )
}
