import { CheckCircleIcon } from "@chakra-ui/icons";
import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import style from "./Skills.module.css";

const frontend = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    name: "HTML",
  },
  {
    img: "https://portfolio-mrsagar105.vercel.app/images/csscolor.png",
    name: "CSS",
  },
  {
    img: "https://usefulangle.com/img/thumb/javascript.png",
    name: "JavaScript",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    name: "ReactJS",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    name: "Redux",
  },
];

const backend = [
  {
    img: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    name: "NodeJS",
  },
  {
    img: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    name: "ExpressJS",
  },
  {
    img: "https://spsanchore13.github.io/shantilal/static/media/mongodb.0781b723446e1f8a1734f7831a9c3313.svg",
    name: "MongoDB",
  },
  {
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    name: "Git/GitHub",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png",
    name: "NPM",
  },
];
const soft = [
  {
    name: "Team Work",
  },
  {
    name: "Proactive",
  },
  {
    name: "Time Management",
  },
];

function Skills() {
  return (
    <div className={style.skills} id="skill">
      <p>
        My tools <span>&</span> skills
      </p>
      <div className={style.tools}>
        <div>
          <p>
            Front-<span>end</span> Development
          </p>
          <SimpleGrid
            className={style.grid}
            columns={[2]}
            spacing={10}
            // border="1px solid black"
            // width={"500px"}
            margin="auto"
          >
            {frontend.map((item) => {
              return (
                <div>
                  <div
                    className={style.skillCard}
                    key={item.name}
                    style={{
                      // border: "1px solid rgb(185, 185, 185)",
                      // borderRadius: "10px",
                      // padding: "10%",
                      // paddingLeft:"0",
                      display: "flex",
                      flexDirection: "row",
                      // justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={item.img} alt={item.img} width="35px" />
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </SimpleGrid>
        </div>
        <div>
          <p>
            Back-<span>end</span> Development
          </p>
          <SimpleGrid
            className={style.grid}
            columns={[2]}
            spacing={10}
            // border="1px solid black"
            // width={"500px"}
            margin="auto"
          >
            {backend.map((item) => {
              return (
                <div>
                  <div
                    className={style.skillCard}
                    key={item.name}
                    style={{
                      // border: "1px solid rgb(185, 185, 185)",
                      // borderRadius: "10px",
                      // padding: "10%",
                      // paddingLeft:"0",
                      display: "flex",
                      flexDirection: "row",
                      // justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={item.img} alt={item.img} width="35px" />
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </SimpleGrid>
        </div>
      </div>
      <div
        className={style.tools}
        style={{
          // border:"1px solid red",
          marginTop: "50px",
          marginBottom: "100px",
        }}
      >
        <div>
          <p>
            Soft <span>Skills</span>
          </p>
          <SimpleGrid
            className={style.grid}
            columns={[1]}
            spacing={10}
            // border="1px solid black"
            // width={"500px"}
            margin="auto"
            // marginButtom={"100px"}
          >
            {soft.map((item) => {
              return (
                <div>
                  <div
                    className={style.skillCard}
                    key={item.name}
                    style={{
                      // border: "1px solid rgb(185, 185, 185)",
                      // borderRadius: "10px",
                      // padding: "10%",
                      // paddingLeft:"0",
                      display: "flex",
                      flexDirection: "row",
                      // justifyContent: "center",
                      alignItems: "center",
                      // gap: "10px",
                    }}
                  >
                    {/* <img src={item.img} alt={item.img} width="20px" /> */}
                    <p>
                      <CheckCircleIcon marginRight={"10px"} color={"#ffa31a"} />
                      {item.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
}

export default Skills;
