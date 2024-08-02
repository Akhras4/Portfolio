import { useState,useEffect } from "react";
import React from 'react'
import Logo from "./logo/logo";
import Lang from "./lang/lang";
import './navbar.css'
export default function Navbar() {
  return (
    <div className="navBar">
        <Logo />
        <Lang />
    </div>
  )
}
