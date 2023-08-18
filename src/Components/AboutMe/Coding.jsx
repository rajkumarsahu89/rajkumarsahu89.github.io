import React from "react";
import style from "./AboutMe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Coding() {
  return (
    <div
      data-aos="zoom-out-right"
      data-aos-duration="1000"
      className={style.learning}
    >
      <h1>Statistics</h1>
      <div data-aos="zoom-out-left" data-aos-duration="1000">
        <div>
          <div>
            <img
              src="https://www.masaischool.com/images/hire-masai-grads/FindTalent/find-talent-1.svg"
              alt="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-1.svg"
            />
          </div>
          <div className={style.text}>
            <p>
              <span>1500+</span>
              Hours
            </p>
            <p>Practical Coding</p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://www.masaischool.com/images/hire-masai-grads/FindTalent/find-talent-2.svg"
              alt="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-2.svg"
            />
          </div>
          <div className={style.text}>
            <p>
              <span>300+ </span>
              Hours
            </p>
            <p>DSA</p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://www.masaischool.com/images/hire-masai-grads/FindTalent/find-talent-3.svg"
              alt="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-3.svg"
            />
          </div>
          <div className={style.text}>
            <p>
              <span>100+ </span>
              hours
            </p>
            <p>Soft Skill Development</p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://www.masaischool.com/images/hire-masai-grads/FindTalent/find-talent-4.svg"
              alt="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-4.svg"
            />
          </div>
          <div className={style.text}>
            <p>
              <span>100+ </span>
              Hours
            </p>
            <p>Math & Logic</p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://www.masaischool.com/images/hire-masai-grads/FindTalent/find-talent-5.svg"
              alt="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-5.svg"
            />
          </div>
          <div className={style.text}>
            <p>
              <span>30+ </span>
            </p>
            <p>Mini Projects</p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://www.masaischool.com/images/hire-masai-grads/FindTalent/find-talent-6.svg"
              alt="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-6.svg"
            />
          </div>
          <div className={style.text}>
            <p>
              <span>5+</span>
            </p>
            <p>Projects </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coding;
