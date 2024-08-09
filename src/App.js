import './App.css';
import Navbar from './components/navbar/navbar';
import Loading from './components/loading/loding';
import { useState,useEffect } from 'react';
import i18n from './unite/i18n';
import { useTranslation  } from 'react-i18next';  
import Main from './components/main/main';
import LanguageContext from './context/context'

function App() {
  const[show,setShow]=useState(false)
  const{t}=useTranslation()
  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    },9000)
  },[])
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="App">
      <LanguageContext.Provider value={{ changeLanguage, t }} >
      <nav>
      <Navbar />
      </nav>
      {!show ?
      <Loading /> : (
           <Main />
      )
}    </LanguageContext.Provider>
    </div>
  );
}

export default App;
