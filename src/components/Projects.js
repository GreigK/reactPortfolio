import React from 'react';
import ProjectItem from './ProjectItem';
import "../styles/Project.css";
import { projectList } from '../helpers/ProjectList';

function Projects() {
  return (
    <div className='projects'>
        <h1> My Personal Projects</h1>
            <div className='projectList'>
                {projectList.map((project, index) => {
                    return (
                    <ProjectItem id={index} name={project.name} image={project.image}/>
                    );
                })}
            </div>
    </div>
  )
}

export default Projects;