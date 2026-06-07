import React from "react"
import projects from "../data/projects"
import ProjectCard from "../components/ProjectCard"

function Projects() {
    return (
        <div>
            <h1>My Projects</h1>
            {projects.map(project => (
                <ProjectCard
                key={project.id}
                title={project.title}
                status={project.status}
                description={project.description}
                />
            ))}
        </div>
    )
}
export default Projects;