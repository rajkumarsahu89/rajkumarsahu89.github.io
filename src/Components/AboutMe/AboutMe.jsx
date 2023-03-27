import React from "react";
import style from "./AboutMe.module.css";
import Coding from "./Coding";
import Header from "./Header";

function AboutMe() {
  return (
    <>
      <Header />
      <div className={style.aboutme} style={{width:"100%", overflowX:"hidden"}}>
        <p>Hi, I’m Raj Kumar. Nice to meet you.</p>
        <p>
          I'm a Full Stack Web developer. I'm a quick learner, enthusiastic person, a team player and passionate about coding. I have 1500+ hours of hands on coding. I worked on various projects some of them you can check in the projects section.
        </p>
        <Coding />
      </div>
    </>
  );
}

export default AboutMe;
