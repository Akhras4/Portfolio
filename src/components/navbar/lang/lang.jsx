import React, { useEffect, useState,useRef, useContext } from 'react';
 import LanguageContext from '../../../context/context'
import './lang.css'; 

export default function Lang() {
  const [activeArrow, setActiveArrow] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const fram1Ref=useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const {changeLanguage}=useContext(LanguageContext)
  useEffect(() => {
    let intervalId;
    let indix= -1
    if (isHovered ) {
        
      intervalId = setInterval(() => {
        // console.log(indix)
        // console.log(activeArrow,"activeArrow")
        setActiveArrow(++indix); 
        if(indix > 3){
            indix= -1
            setActiveArrow(-1)
        }
      }, 200); 
    } else {
      setActiveArrow(-1); 
    }

    return () => clearInterval(intervalId); 
  }, [isHovered,isMenuOpen]); 


  const handleClick = () => {
   
      setIsMenuOpen(!isMenuOpen);
  };
  const handelEnterPath=(id)=>{
    const element=document.querySelector(id)
    const path =element.querySelector("rect")
    console.log(element)
    if (path) {
        path.setAttribute("fill", `url(#gradient${id.substring(1).toUpperCase()})`);  
      }
  }
  const handleLeavePath = (id) => {
    const element = document.querySelector(id);
    const path =element.querySelector("rect")
    console.log(element)
    if (path) {
        path.setAttribute("fill", `#eee`);  
      }
  }
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsHovered(false)
    }
  };

  // Handle scroll
  const handleScroll = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className='lang'
      ref={menuRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        isMenuOpen?setIsHovered(true):setIsHovered(false);
        if (fram1Ref.current) {
          fram1Ref.current.setAttribute("fill", "none");
        }
      }}
      onClick={() => handleClick()}
     >
        
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="53"
        fill="none"
        viewBox="0 0 72 53"
      >
              <defs>
                  <linearGradient id="gradientLang" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="10%" />
                      <stop offset="40%" />
                      <stop offset="100%" />
                  </linearGradient>
                  <linearGradient id="gradientEN" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="10%" />
                      <stop offset="40%" />
                      <stop offset="100%" />
                  </linearGradient>
                  <linearGradient id="gradientFR" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'red', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="gradientNL" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'orange', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'blue', stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="gradientAR" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'green', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 1 }} />
                  </linearGradient>
              </defs>

        <g id="Frame1" >
          <path
          ref={fram1Ref}
            id="Ellipse 1"
            fill="#000"
            stroke='url(#gradientLang)'
            d="M51.5 26.5c0 13.54-10.755 24.5-24 24.5s-24-10.96-24-24.5S14.255 2 27.5 2s24 10.96 24 24.5z"
          />
          <path
            id="Ellipse 2"
            fill="#000"
            fillOpacity="0.2"
            stroke='url(#gradientLang)'
            d="M35.5 26.253c0 6.656-.946 12.786-2.463 17.235-.759 2.227-1.652 4.005-2.62 5.217-.971 1.217-1.96 1.795-2.917 1.795-.956 0-1.946-.578-2.918-1.795-.967-1.212-1.86-2.99-2.62-5.217-1.516-4.45-2.462-10.58-2.462-17.235 0-6.657.946-12.661 2.462-16.984.758-2.164 1.65-3.88 2.614-5.044C25.544 3.057 26.535 2.5 27.5 2.5c.965 0 1.956.557 2.924 1.725.965 1.165 1.856 2.88 2.614 5.044 1.516 4.323 2.462 10.327 2.462 16.983z"
          />
          <path
            id="Line1"
            fill='none'
            stroke="#D3D3D3"
            strokeLinecap="round"
            d="M49 16H6"
          />
          <path
            id="Line2"
            stroke="#D3D3D3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M48 38H7"
          />
          <g id="Frame2">
            <path
              id="Arrow 4"
              className={`arrow-filter ${isHovered && activeArrow === 3 ? 'active' : ''}`}
              fill="#D3D3D3"
              d="M61.293 51.121a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L62 49l-5.657-5.657a1 1 0 00-1.414 1.414l6.364 6.364zM61 49v1.414h2V49h-2z"
            />
            <path
              id="Arrow 3"
              className={`arrow-filter ${isHovered && activeArrow === 2 ? 'active' : ''}`}
              fill="#D3D3D3"
              d="M61.386 38.149a1 1 0 001.413-.062l6.08-6.635a1 1 0 00-1.474-1.352L62 36l-5.898-5.405a1 1 0 00-1.351 1.474l6.635 6.08zm-.385-2.105l.062 1.411 1.998-.087-.062-1.412-1.998.088z"
            />
            <path
              id="Arrow 2"
              className={`arrow-filter ${isHovered && activeArrow=== 1 ? 'active' : ''}`}
              fill="#D3D3D3"
              d="M61.293 24.121a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L62 22l-5.657-5.657a1 1 0 00-1.414 1.414l6.364 6.364zM61 22v1.414h2V22h-2z"
            />
            <path
              id="Arrow 1"
              className={`arrow-filter ${isHovered && activeArrow === 0 ? 'active' : ''}`}
              fill="#D3D3D3"
              d="M61.293 10.121a1 1 0 001.414 0l6.364-6.364a1 1 0 00-1.414-1.414L62 8l-5.657-5.657a1 1 0 10-1.414 1.414l6.364 6.364zM61 8v1.414h2V8h-2z"
            />
          </g>
        </g>

{isMenuOpen && (
          <g className="dropdown-menu">
            <g
            id='en'
              onClick={() => {setIsHovered(false) ;changeLanguage('en')} } //rest 
              style={{ cursor: 'pointer' }}
              onMouseEnter={()=>handelEnterPath('#en')}
              onMouseLeave={()=>handleLeavePath('#en')}
            >
              <rect
                x="5"
                y="52"
                width="62"
                height="15"
                fill="#eee"
                stroke="#000"
              />
              <text x="10" y="63" fontSize="12" fill="#000">EN</text>
              <image 
                href="https://www.flagcdn.com/w320/us.png" 
                x="40" 
                y="50" 
                width="22" 
                height="22" 
              />
            </g>
            <g
            id='fr'
            onClick={() => {setIsHovered(false) ;changeLanguage('fr')}}
              style={{ cursor: 'pointer' }}
              onMouseEnter={()=>handelEnterPath('#fr')}
              onMouseLeave={()=>handleLeavePath('#fr')}
            >
              <rect
                x="5"
                y="72"
                width="62"
                height="15"
                fill="#ddd"
                stroke="#000"
              />
              <text x="10" y="83" fontSize="12" fill="#000">FR</text>
              <image 
                href="https://www.flagcdn.com/w320/fr.png" 
                x="40" 
                y="72" 
                width="22" 
                height="20" 
              />
            </g>
            <g
            id='nl'
              onClick={() => {setIsHovered(false) ;changeLanguage('nl')}}
              style={{ cursor: 'pointer' }}
              onMouseEnter={()=>handelEnterPath('#nl')}
              onMouseLeave={()=>handleLeavePath('#nl')}
            >
              <rect
                x="5"
                y="92"
                width="62"
                height="15"
                fill="#ccc"
                stroke="#000"
              />
              <text x="10" y="103" fontSize="12" fill="#000">NL</text>
              <image 
                href="https://www.flagcdn.com/w320/nl.png" 
                x="40" 
                y="92" 
                width="22" 
                height="20" 
              />
            </g>
            <g
            id='ar'
              onClick={() => {setIsHovered(false) ;changeLanguage('ar')}}
              style={{ cursor: 'pointer' }}
              onMouseEnter={()=>handelEnterPath('#ar')}
              onMouseLeave={()=>handleLeavePath('#ar')}
            >
              <rect
                x="5"
                y="112"
                width="62"
                height="15"
                fill="#bbb"
                stroke="#000"
              />
              <text x="10" y="123" fontSize="12" fill="#000">AR</text>
              <image 
                href="https://www.flagcdn.com/w320/ae.png" 
                x="40" 
                y="110" 
                width="22" 
                height="22" 
              />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
