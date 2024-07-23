import React from 'react'
import './logo.css'
import { useEffect,useRef } from 'react';
export default function Logo() {
    const svgRef = useRef(null);

    const getEffectiveBackgroundColor = (element) => {
      let bgColor = window.getComputedStyle(element).backgroundColor;
      while (bgColor === 'rgba(0, 0, 0, 0)' && element.parentElement) {
        element = element.parentElement;
        bgColor = window.getComputedStyle(element).backgroundColor;
      }
      if (bgColor === 'rgba(0, 0, 0, 0)') {
        bgColor = window.getComputedStyle(document.body).backgroundColor;
      }
      return bgColor;
    };
  
    const updatePathColors = () => {
      const svgElement = svgRef.current;
      const paths = svgElement.querySelectorAll('path');
  
      paths.forEach((path) => {
        const pathBoundingBox = path.getBoundingClientRect();
        const x = pathBoundingBox.left + pathBoundingBox.width / 2;
        const y = pathBoundingBox.top + pathBoundingBox.height / 2;
  

        svgElement.style.visibility = 'hidden'; 
        svgElement.parentElement.style.visibility = 'hidden';
        path.style.visibility = 'hidden';
        const elementUnderPath = document.elementFromPoint(x, y);
        path.style.visibility = 'visible';
        svgElement.style.visibility = 'visible'; 
        svgElement.parentElement.style.visibility = 'visible';
  
        if (elementUnderPath) {
          const colorUnderPath = getEffectiveBackgroundColor(elementUnderPath);
          console.log(`Detected color under path: ${colorUnderPath}`);
  
        const currentFill = path.getAttribute('fill');
        const isGradientFill = currentFill && currentFill.includes("url('#liner')");
        console.log(currentFill)
          if (!isGradientFill) {
          if (colorUnderPath !== 'rgba(0, 0, 0, 0)' && colorUnderPath !== 'rgb(0, 0, 0)') {
            path.setAttribute('fill', 'black');
            path.setAttribute('stroke', "url('#portfoilo')");
          } else {
            path.setAttribute('fill', 'white');
            path.setAttribute('stroke', "url('#portfoilo')");
          }
        }
    }
      });
    };

    useEffect(() => {
      updatePathColors();
  
      window.addEventListener('scroll', updatePathColors);
      window.addEventListener('resize', updatePathColors);
  
      return () => {
        window.removeEventListener('scroll', updatePathColors);
        window.removeEventListener('resize', updatePathColors);
      };
    }, []);
  return (
    <div className='logo'>
          <svg ref={svgRef} width="240" height="93" viewBox="0 0 240 93" fill="none">
              <defs>
                  <linearGradient id="portfoilo" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="ak(1 0 0 -1 0 55.8028)">
                      <stop offset="10%" />
                      <stop offset="40%" />
                      <stop offset="100%" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="ak(1 0 0 -1 0 55.8028)">
                        <stop offset="10%"  />
                        <stop offset="40%"  />
                        <stop offset="100%"  />
                  </linearGradient>
                  <filter id="lightEffect">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75" specularExponent="20" lighting-color="#ffffff" result="specOut">
                        <fePointLight x="50" y="30" z="140" />
                        </feSpecularLighting>
                        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                    </filter>    
              </defs>
              {/* <path d="M0 0H240V93H87eZ" fill="black" /> */}
    <path id="Vector_11" d="M70.1895 9L50.2947 17.3525H57L43 38.8302L50 20.8326H43.9947L50 9H56.1895Z" />
    <g id="Frame">
      <rect width="240" height="93" />
      <path id="Vector 1" d="M17 18V70" stroke="black" stroke-width="7" stroke-linecap="round"/>
      <path id="Vector 2" d="M221 18V70" stroke="black" stroke-width="7" stroke-linecap="round"/>
      <g id="AKHRAS" >
        <path
          id="Vector"
          d="M184.536 26.5221C184.456 25.5754 184.098 24.8383 183.461 24.3107C182.834 23.783 181.881 23.5219 180.603 23.5273C179.789 23.5307 179.121 23.633 178.601 23.834C178.091 24.0256 177.713 24.2876 177.468 24.6201C177.224 24.9525 177.097 25.3319 177.09 25.758C177.072 26.1085 177.135 26.4255 177.278 26.7089C177.431 26.9829 177.669 27.2329 177.992 27.4588C178.315 27.6752 178.727 27.8724 179.23 28.0502C179.733 28.228 180.33 28.3864 181.022 28.5256L183.41 29.0269C185.022 29.361 186.401 29.805 187.55 30.3589C188.698 30.9127 189.638 31.5669 190.37 32.3214C191.103 33.0664 191.641 33.907 191.986 34.843C192.34 35.779 192.525 36.801 192.539 37.9089C192.537 39.8218 192.066 41.4431 191.125 42.7729C190.183 44.1026 188.833 45.1168 187.075 45.8155C185.326 46.5142 183.22 46.8687 180.758 46.8791C178.23 46.8898 176.022 46.525 174.134 45.7849C172.256 45.0447 170.793 43.9003 169.745 42.3516C168.706 40.7935 168.177 38.7976 168.157 36.364L175.657 36.3323C175.708 37.2223 175.934 37.9694 176.334 38.5738C176.734 39.1782 177.295 39.6351 178.016 39.9446C178.746 40.254 179.614 40.4066 180.617 40.4024C181.46 40.3988 182.165 40.2917 182.733 40.081C183.3 39.8702 183.729 39.5796 184.021 39.209C184.313 38.8385 184.463 38.4164 184.471 37.9429C184.459 37.4979 184.311 37.1103 184.025 36.78C183.749 36.4403 183.294 36.1392 182.658 35.8767C182.022 35.6047 181.164 35.3527 180.084 35.1205L177.183 34.5077C174.605 33.9599 172.57 33.0357 171.078 31.7351C169.595 30.4251 168.854 28.6337 168.854 26.3609C168.836 24.5144 169.322 22.8978 170.31 21.511C171.308 20.1147 172.691 19.0246 174.459 18.2406C176.236 17.4566 178.275 17.0598 180.576 17.0501C182.924 17.0402 184.957 17.4246 186.674 18.2033C188.392 18.9821 189.717 20.0845 190.651 21.5105C191.595 22.927 192.075 24.5869 192.093 26.4902L184.536 26.5221Z"
          fill="black"
          strokeLinejoin="bevel"
        />
        <g id="Vector_2" >
          <path
            d="M146.494 44.3255C145.99 46.0201 144.436 47.1846 142.668 47.1921V47.1921C139.936 47.2036 137.993 44.5399 138.839 41.9424L145.036 22.8969C145.971 20.0245 148.643 18.0757 151.663 18.063L152.337 18.0602C155.357 18.0474 158.045 19.9736 159.004 22.838L165.362 41.8306C166.229 44.4208 164.309 47.1008 161.577 47.1124V47.1124C159.809 47.1198 158.245 45.9684 157.727 44.2781L152.181 26.181C152.161 26.1165 152.101 26.0726 152.034 26.0729V26.0729C151.966 26.0732 151.907 26.1176 151.888 26.1823L146.494 44.3255ZM144.018 38.6636C144.012 37.0319 145.329 35.7035 146.961 35.6966L157.074 35.654C158.706 35.6471 160.034 36.9643 160.041 38.596V38.596C160.048 40.2278 158.731 41.5561 157.099 41.563L146.985 41.6057C145.354 41.6125 144.025 40.2953 144.018 38.6636V38.6636Z"
            stroke="black"
            strokeLinejoin="bevel"
          />
        </g>
        <path
          id="Vector_3"
          d="M111.123 47.1932L111 18.1025L123.557 18.0496C125.716 18.0405 127.607 18.4255 129.229 19.2047C130.852 19.9838 132.116 21.1101 133.022 22.5836C133.928 24.057 134.385 25.826 134.394 27.8903C134.403 29.9737 133.946 31.7322 133.024 33.1661C132.111 34.5998 130.823 35.6848 129.16 36.421C127.506 37.1572 125.571 37.5299 123.355 37.5392L115.855 37.5709L115.829 31.4346L121.738 31.4096C122.666 31.4057 123.456 31.2888 124.109 31.0587C124.771 30.8192 125.276 30.443 125.624 29.9302C125.982 29.4173 126.159 28.7489 126.155 27.9251C126.152 27.0918 125.969 26.4154 125.607 25.8961C125.254 25.3673 124.746 24.9812 124.082 24.7378C123.428 24.4848 122.636 24.3603 121.708 24.3642L118.924 24.376L119.02 47.1599L111.123 47.1932ZM128.112 33.7692L135.441 47.0906L126.861 47.1268L119.703 33.8046L128.112 33.7692Z"
          fill="black"
          strokeLinejoin="bevel"
        />
        <g id="Vector_4" opacity="0.83" clipPath="url(#clip0_1_2)">
          <rect
            width="26.3724"
            height="29.2013"
            transform="translate(81.3951 17.7553)"
            fill="url('#portfoilo')"
            strokeLinejoin="bevel"
          />
          <path
            id="Vector_5"
            d="M85.4665 46.94C83.2857 46.9492 81.5102 45.1887 81.5011 43.0078L81.4117 21.8148C81.4025 19.6339 83.163 17.8585 85.3439 17.8493V17.8493C87.5248 17.8401 89.3002 19.6006 89.3094 21.7815L89.3186 23.969C89.3308 26.8559 91.6809 29.1863 94.5678 29.1742V29.1742C97.4548 29.162 99.7852 26.8118 99.773 23.9249L99.7638 21.7374C99.7546 19.5565 101.515 17.7811 103.696 17.7719V17.7719C105.877 17.7627 107.652 19.5232 107.661 21.7041L107.751 42.8971C107.76 45.078 106 46.8534 103.819 46.8626V46.8626C101.638 46.8718 99.8624 45.1113 99.8532 42.9304L99.8439 40.7429C99.8318 37.856 97.4816 35.5256 94.5947 35.5377V35.5377C91.7078 35.5499 89.3773 37.9001 89.3895 40.787L89.3987 42.9745C89.4079 45.1554 87.6474 46.9308 85.4665 46.94V46.94Z"
            fill="white"
            strokeLinejoin="bevel"
          />
        </g>
        <g id="Vector_6">
              <path
                d="M49.6718 46.6191L49.6739 47.1191L50.1739 47.117L58.0716 47.0837L58.5716 47.0816L58.5694 46.5816L58.5385 39.2513L60.5899 36.552L66.7892 46.8038L66.9359 47.0463L67.2192 47.0451L76.6509 47.0054L77.5517 47.0016L77.072 46.2391L67.1307 30.4368L76.6985 17.7162L77.3038 16.9114L76.2968 16.9157L67.0923 16.9545L66.8411 16.9555L66.692 17.1577L58.4923 28.2771L58.4468 17.4909L58.4447 16.9909L57.9447 16.993L50.047 17.0263L49.547 17.0284L49.5491 17.5284L49.6718 46.6191Z"
                stroke="#5856D6"
                strokeLinejoin="bevel"
                fill="black"
              />
        </g>
        <g id="Vector_8" >
          <path
            d="M29.4938 44.3255C28.99 46.0201 27.4357 47.1846 25.6678 47.1921V47.1921C22.9363 47.2036 20.9933 44.5399 21.8385 41.9424L28.0361 22.8969C28.9708 20.0245 31.6425 18.0757 34.6631 18.063L35.3367 18.0602C38.3572 18.0474 41.0453 19.9736 42.0041 22.838L48.3621 41.8306C49.2292 44.4208 47.3087 47.1008 44.5772 47.1124V47.1124C42.8094 47.1198 41.2453 45.9684 40.7272 44.2781L35.1806 26.181C35.1608 26.1165 35.1011 26.0726 35.0336 26.0729V26.0729C34.9662 26.0732 34.9069 26.1176 34.8876 26.1823L29.4938 44.3255ZM27.0185 38.6636C27.0116 37.0319 28.3288 35.7035 29.9605 35.6966L40.0741 35.654C41.7058 35.6471 43.0342 36.9643 43.0411 38.596V38.596C43.0479 40.2278 41.7307 41.5561 40.099 41.563L29.9854 41.6057C28.3537 41.6125 27.0254 40.2953 27.0185 38.6636V38.6636Z"
            stroke="#5856D6"
            strokeLinejoin="round"
            fill="black"
          />
        </g>
      </g>
    </g> 
    <rect id='light' x="10" y="14" width="4" height="42" fill="none" stroke="url(#lineGradient)" stroke-width="7" stroke-linecap="round" filter="url(#lightEffect)"/>
    <rect id='light' x="200" y="14" width="4" height="42" fill="none" stroke="url(#lineGradient)" stroke-width="7" stroke-linecap="round" filter="url(#lightEffect)"/>
  </svg>
    </div>
  )
}
