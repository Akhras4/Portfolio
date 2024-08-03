import './App.css';
import Navbar from './components/navbar/navbar';
import Loading from './components/loading/loding';
import { useState,useEffect } from 'react';
import i18n from './unite/i18n';
import { useTranslation  } from 'react-i18next';  
import Main from './components/main/main';
function App() {
  const[show,setShow]=useState(false)
  const{t}=useTranslation()
  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    },50)
  },[])
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="App">
      <Navbar />
      {!show ?
      <Loading /> : (
        <>
      <div style={{display:'flex'}}>
      <div style={{height:'90px',width:'100px',backgroundColor:'black'}}>
        <h1></h1>
      </div>
      <div style={{height:'180px',width:'200px',backgroundColor:'white', marginTop:'100px'}}>
      <button onClick={() => changeLanguage('nl')}>NL</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <h1>{t('Welcome to React')}</h1>

      </div>
      </div>
      < Main/>
      </>
      )
}
    </div>
  );
}

export default App;
