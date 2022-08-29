import React from 'react'
import { useParams } from "react-router-dom"
import { projectList } from '../helpers/ProjectList';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    return (
    <div className='project'>
        <h1> {project.name} </h1>
        <img src={project.image} />
        <p>
            <b>Skills:</b> {project.technologies}
        </p>
        <p>
            <a href={project.link}> Link to GitHub Repo</a>
        </p>
        </div>
    );
}

export default ProjectDisplay