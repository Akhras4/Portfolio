import React from 'react'
import Light from './light'
import "./main.css"
import Aboutme from './aboutme/aboutme'
import Welcome from './aboutme/welcome'
import Project from './project/project'
import Navbar from '../navbar/navbar'

export default function Main() {
  return (
    <div className='main'>
      <nav>
      <Navbar />
      </nav>
      <Welcome />
      
      <Aboutme />
      <Project />
      <Light />

    </div>
  )
}

