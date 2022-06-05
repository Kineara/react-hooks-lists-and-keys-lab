import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectsMapped = projects.map(el => {
  return <ProjectItem name={el.name} about={el.about} technologies={el.technologies} key={el.id} />
})
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectsMapped}
      </div>
    </div>
  );
}

export default ProjectList;
