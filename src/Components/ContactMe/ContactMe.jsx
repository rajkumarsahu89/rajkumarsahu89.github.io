import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import React from "react";
import style from "./ContactMe.module.css";
import { Box, Input, Textarea, useToast } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";



AOS.init();

function ContactMe() {
  const toast = useToast();

  
   const form = useRef();


  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_pwb66sf',
      'template_s1q4j47',
      toSend,
      'Tg_lOi0xNwuD6C_xa'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    // console.log(toSend)
    setToSend({from_name: '',
    to_name: '',
    message: '',
    reply_to: '',})
    window.scroll(0,0);
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    
  };
  // console.log(toSend)



  return (
    <div id="contactMe" className={style.contactMe}>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div>
          <h1>Contact Me</h1>
        </div>
        <div>
          <EmailIcon />
          <span>sahukumarraj89@gmail.com</span>
        </div>
        <div>
          <PhoneIcon />
          <span>+91 7384444338</span>
        </div>
        <div className={style.social}>
          <a target="_blank"  rel="noreferrer" href="https://github.com/rajkumarsahu89">
            <i style={{ fontSize: "30px", color: "white" }}>
              <BsGithub />
            </i>
          </a>
          <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/raj-kumar-sahu89/">
            <i style={{ fontSize: "30px", color: "white" }}>
              <BsLinkedin />
            </i>
          </a>
          <a target="_blank"  rel="noreferrer" href="https://www.instagram.com/rj_raj.kumar/">
            <i style={{ fontSize: "30px", color: "white" }}>
            <BsInstagram />
            </i>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        


<form ref={form} onSubmit={handleSubmit}>
            
          <Input name='from_name'
               placeholder='Your Name'
              value={toSend.from_name}
               onChange={handleChange} />
          <Input name='reply_to'
                placeholder='Your email'
               value={toSend.reply_to}
                onChange={handleChange} />
          <Textarea
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
            id=""
            cols="30"
            rows="10"
          ></Textarea>
          <button
            type="submit"
            onClick={() =>
              toast({
                position: "bottom-left",
                render: () => (
                  <Box color="#ffa31a" p={3} bg="white">
                    Message sent
                  </Box>
                ),
              })
            }
          >
            Submit
          </button>

          </form>

      </div>
    </div>
  );
}

export default ContactMe;
