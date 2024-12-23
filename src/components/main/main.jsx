import React from 'react'
import Light from './light'
import "./main.css"
import Aboutme from './aboutme/aboutme'
import Welcome from './aboutme/welcome'
import Project from './project/project'
import Navbar from '../navbar/navbar'
import Section from '../section/section'
import Railway from '../TrainComponent/railway'
export default function Main() {
  return (
    <div className='main'>
      <nav>
      <Navbar />
      </nav>
      <Welcome />
      <Aboutme />
      <Project />
      <Section  direction="row"
      startColor="#08070C" 
      middleColor="rgba(16, 125, 152, 0.8)" 
      endColor="#08070C "
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
       />
      <Light />
    </div>
  )
}

