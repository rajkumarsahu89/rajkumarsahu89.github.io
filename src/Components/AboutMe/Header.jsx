import React from 'react'
import style from "./AboutMe.module.css";


function Header() {
  return (
    <div className={style.header} id="about" >About <span style={{color:"#ffa31a"}}>me</span></div>
  )
}

export default Header