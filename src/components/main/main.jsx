import React from 'react'
import Light from './light'
import "./main.css"
import Aboutme from './aboutme/aboutme'
import Welcome from './aboutme/welcome'

export default function Main() {
  return (
    <div className='main'>
      <Welcome />
      <Aboutme />
      <Light />

    </div>
  )
}

