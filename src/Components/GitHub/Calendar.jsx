import GitHubCalendar from "react-github-calendar";
import style from "./Calendar.module.css";
import React from "react";

function Calendar() {
  return (
    <div
      style={{
        padding: "20px",
        margin: "30px 0 0 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={style.gitCalender}
    >
      <p
        style={{
          margin: "30px 0 50px 0",
        }}
      >
        Git<span style={{ color: "#ffa31a" }}>Hub</span> Calendar
      </p>
      <div className={style.calender}>
        <GitHubCalendar username="rajkumarsahu89" />
      </div>
      <div className={style.stats}>
        <a href="https://github.com/rajkumarsahu89">
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com?user=rajkumarsahu89&theme=dark"
            width="100%"
            alt="stats"
          />
        </a>

        <a href="https://github.com/rajkumarsahu89">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=rajkumarsahu89&theme=dark&count_private=true&show_icons=true
          "
          alt="stats"
          />
        </a>

        <a href="https://github.com/rajkumarsahu89">
          <img
            align="center" id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rajkumarsahu89&theme=dark&layout=compact&langs_count=6&card_width=400&card_height=200"
          alt="stats"
          />
        </a>
       
      </div>
    </div>
  );
}
export default Calendar;
