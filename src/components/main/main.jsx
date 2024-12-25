import React from 'react'
import Light from './light'
import "./main.css"
import Aboutme from './aboutme/aboutme'
import Welcome from './aboutme/welcome'
import Project from './project/project'
import Navbar from '../navbar/navbar'
import Section from '../section/section'
import Railway from '../TrainComponent/railway'
import Partsections   from '../section/partsections'
export default function Main() {
  return (
    <div className='main'>
      <nav>
      <Navbar />
      </nav>
      <Welcome />
      <Aboutme />
      <Section  direction="row"
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
       <Section  direction="row-reverse" backgroundColor="rgb(219, 101, 205)"
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
       <Section  direction="row"
      startColor="#08070C" 
      middleColor="rgb(36, 80, 85)" 
      endColor="rgba(36, 80, 85, 0.20) "
      backgroundColor="rgb(36, 80, 85)"
      backgroundColorInfo="linear-gradient(124deg, rgba(36, 80, 85, 0.20) 25.17%, rgba(36, 80, 85, 0.00) 74.83%)"
       />
       
       <Railway
      startColor="rgba(16, 125, 152, 0.8)" 
      middleColor="rgba(183, 9, 9 )" 
      endColor="black" 
       />
       <Partsections 
       backgroundColor="rgb(183, 9, 9)"
       startColor="#08070C" 
       middleColor="rgb(183, 9, 9)" 
       endColor="rgb(137, 8, 8)"/>
      <Project />
      
      <Light />
    </div>
  )
}

