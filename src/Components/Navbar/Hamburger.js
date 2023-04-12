import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import style from "./Navbar.module.css";
import resume from "../imges/Raj_Kumar_Sahu_Resume.pdf"

export default function Hamburger({ isOpen, setOpen }) {
  const btnRef = React.useRef();

  function onClose() {
    setOpen(false);
  }
  const Handleonclick=()=>{
    window.open(`${resume}`);
   }

  return (
    <>
      
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"#ffa31a"} fontSize="20px" />

          <DrawerBody padding="40px" bg={"#1B1B1B"} color="#ffa31a">
            <div className={style.hamburger}>
              <a href="#name">
                <div onClick={() => onClose()}>
                  <p> Home</p>
                </div>
              </a>
              <a href="#about">
                <div onClick={() => onClose()}>
                  <p> About</p>
                </div>
              </a>
              <a href="#skill">
                <div onClick={() => onClose()}>
                  <p> Skills</p>
                </div>
              </a>
              <a href="#project">
                <div onClick={() => onClose()}>
                  <p> Projects</p>
                </div>
              </a>
              <a href="#contactMe">
                <div onClick={() => onClose()}>
                  <p> Contact</p>
                </div>
              </a>
              <a href={resume} download="Raj_Kumar_Sahu_Resume"  onClick={Handleonclick} >
                <div onClick={() => onClose()}>
                  <p> Resume</p>

                </div>
              </a>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
