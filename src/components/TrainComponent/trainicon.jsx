import React, { useState, useEffect } from "react";
import "./train.css"

const Trainicon = ({ containerRef,startColor }) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef?.current) {
        const containerTop = containerRef.current.offsetTop;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const startScroll = containerTop - windowHeight;
        const endScroll = containerTop + containerHeight;
        if (scrollPosition >= startScroll && scrollPosition <= endScroll) {
          const distanceScrolled = scrollPosition - startScroll; // Distance scrolled inside the container
          const maxScrollableDistance = endScroll - startScroll; 
          const proportionalScroll = (distanceScrolled / maxScrollableDistance) * 500;
          setScrollOffset(proportionalScroll);
          console.log('scrollPosition:', scrollPosition);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return (
    <div
      style={{
        maxWidth: "fit-content",
        position: "absolute",
        zIndex: 10,
        transform: `translateY(${scrollOffset-50}%)`, 
        transition: "transform 1s linear", 
      }}
    >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 224 280"  style={{height:'35vh',marginTop:"-15vh" }}>
    <path
      fill={startColor}
      stroke="#0000"
      d="m102.208 7.445 2.188-4.878A3.5 3.5 0 0 1 107.59.5h8.82c1.379 0 2.629.81 3.194 2.067l2.188 4.878a19.3 19.3 0 0 1 1.708 7.932V126c0 5.766-2.445 11.147-4.879 16.438a3.54 3.54 0 0 1-3.208 2.062h-6.826a3.54 3.54 0 0 1-3.209-2.062c-2.446-5.308-4.878-10.621-4.878-16.438V15.42c0-2.75.582-5.465 1.708-7.975Z"
    ></path>
    <path stroke="#107D98" d="M102.5 136s4 3.5 9.5 3.5 9.5-3.5 9.5-3.5"></path>
    <ellipse cx="112" cy="45" stroke="#9ADAEA" rx="3" ry="2"></ellipse>
    <ellipse cx="112" cy="79" stroke="#9ADAEA" rx="3" ry="2"></ellipse>
    <ellipse cx="112" cy="21" stroke="#9ADAEA" rx="3" ry="2"></ellipse>
    <ellipse cx="112" cy="59" stroke="#9ADAEA" rx="3" ry="2"></ellipse>
    <ellipse cx="112" cy="93" stroke="#9ADAEA" rx="3" ry="2"></ellipse>
    <ellipse cx="112" cy="112" stroke="#9ADAEA" rx="3" ry="2"></ellipse>
    <path
      fill="#9ADAEA"
      d="M118 11.581a.5.5 0 0 1 1 0v106.816a.5.5 0 0 1-1 0zM105 11.581a.5.5 0 0 1 1 0v106.816a.5.5 0 0 1-1 0z"
      opacity="0.25"
    ></path>
    <path
      fill="#9ADAEA"
      d="m119.022 131.122.767-6.4c.093-.773-.729-1.441-1.492-1.285-1.27.258-3.306.525-6.297.525s-5.027-.267-6.297-.525c-.763-.156-1.585.512-1.492 1.285l.767 6.4c.015.121.039.24.094.348.303.596 1.704 2.589 6.928 2.589s6.625-1.993 6.928-2.589c.055-.108.079-.227.094-.348"
    ></path>
    <path
      fill="url(#paint1_linear_576_37328)"
      d="M124 174.944c0-7.191-5.196-29.455-6.297-34.092-.09-.38-.578-.52-.901-.299-.866.592-2.513 1.447-4.802 1.447-2.318 0-3.978-.877-4.835-1.47-.314-.217-.788-.091-.889.277-1.143 4.168-6.276 23.47-6.276 34.137 0 5.433 2 9.056 12 9.056s12-4.297 12-9.056"
      opacity="0.5"
    ></path>
    <path
      fill="#000000"
      d="M112 35.051c-2.25 0-4.078.024-5.558.132-1.485.108-2.581.297-3.385.611-.788.307-1.278.726-1.585 1.298-.318.59-.472 1.4-.472 2.54h-1c0-1.21.159-2.212.591-3.014.442-.822 1.14-1.38 2.102-1.755.946-.37 2.162-.568 3.677-.678 1.52-.11 3.38-.134 5.63-.134s4.11.024 5.63.134c1.515.11 2.731.309 3.677.678.962.375 1.66.933 2.102 1.755.432.802.591 1.804.591 3.014h-1c0-1.14-.154-1.95-.472-2.54-.307-.572-.797-.99-1.585-1.298-.804-.313-1.9-.503-3.385-.611-1.48-.108-3.308-.132-5.558-.132M106.442 69.734c1.48-.108 3.308-.131 5.558-.131s4.078.023 5.558.13c1.485.109 2.581.299 3.385.613.788.307 1.278.725 1.585 1.297.318.59.472 1.4.472 2.54h1c0-1.21-.159-2.211-.591-3.014-.442-.822-1.14-1.38-2.102-1.755-.946-.369-2.162-.567-3.677-.677-1.52-.11-3.38-.134-5.63-.134s-4.11.023-5.63.134c-1.515.11-2.731.308-3.677.677-.962.375-1.66.933-2.102 1.755-.432.803-.591 1.805-.591 3.015h1c0-1.141.154-1.95.472-2.541.307-.572.797-.99 1.585-1.297.804-.314 1.9-.504 3.385-.612M106.442 104.285c1.48-.107 3.308-.131 5.558-.131s4.078.024 5.558.131c1.485.108 2.581.298 3.385.612.788.307 1.278.725 1.585 1.297.318.591.472 1.4.472 2.541h1c0-1.21-.159-2.212-.591-3.015-.442-.821-1.14-1.379-2.102-1.755-.946-.369-2.162-.567-3.677-.677-1.52-.111-3.38-.134-5.63-.134s-4.11.023-5.63.134c-1.515.11-2.731.308-3.677.677-.962.376-1.66.934-2.102 1.755-.432.803-.591 1.805-.591 3.015h1c0-1.141.154-1.95.472-2.541.307-.572.797-.99 1.585-1.297.804-.314 1.9-.504 3.385-.612"
    ></path>
    <g
      filter="url(#filter0_f_576_37328)"
      opacity="0.125"
      style={{ mixBlendMode: "color-dodge" }}
    >
      <ellipse cx="112" cy="145" fill="#83F2F2" rx="48" ry="80"></ellipse>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_576_37328"
        x1="112"
        x2="112"
        y1="0"
        y2="145"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#08070C"></stop>
        <stop offset="1" stopColor="#107D98" stopOpacity="0.75"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_576_37328"
        x1="110.5"
        x2="110.5"
        y1="184"
        y2="138.718"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.115" stopColor="#fff" stopOpacity="0"></stop>
        <stop offset="0.531" stopColor="#999" stopOpacity="0.448"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0.4"></stop>
      </linearGradient>
      <filter
        id="filter0_f_576_37328"
        width="224"
        height="288"
        x="0"
        y="1"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_576_37328"
          stdDeviation="32"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
  </div>
);
}

export default Trainicon;
