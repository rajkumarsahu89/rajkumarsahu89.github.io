import React from "react";
import style from "./Name.module.css";
import img from "../imges/Raj.jpg";
import { DownloadIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import resume from "../imges/Raj_Kumar_Sahu_Resume.pdf";


function Name() {

  const Handleonclick=()=>{
    window.open(`${resume}`);
   }

  return (
    <div className={style.name} id="name" style={{width:"100%", overflowX:"hidden"}}>
      <p>
        Hi 👋 I am <span>Raj Kumar Sahu</span>{" "}
      </p>
      <p>
        <Typewriter
          options={{
            strings: ["Quick Learner", "Tech Enthusiast", "Believer", "Team Player"],
            autoStart: true,
            loop: true,
          }}
        />
      </p>

      <div className={style.avatar}>
        <img src={img} alt="avatar" />
      </div>
      <div className={style.resume}>
       
        <a href={resume} download="Raj_Kumar_Sahu_Resume"  onClick={Handleonclick}>
          <button className={style.resumeButton}>
            <DownloadIcon bg={"transparent"} />
            RESUME
          </button>
        </a>
      </div>
    </div>
  );
}

export default Name;
