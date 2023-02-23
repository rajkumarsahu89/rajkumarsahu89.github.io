import React from "react";
import style from "./Project.module.css";
import ProjectPage from "./ProjectsPage";

function Projects() {
  return (
    <div id="project" className={style.project}>
      <div>Projects</div>
      <ProjectPage />
    </div>
  );
}

export default Projects;
