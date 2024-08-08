import React from 'react'
import Light from './light'
import "./main.css"
import Aboutme from './aboutme/aboutme'
import Welcome from './aboutme/welcome'
import Project from './project/project'

export default function Main() {
  return (
    <div className='main'>
      <Welcome />
      <Aboutme />
      <Project />
      <Light />

    </div>
  )
}

