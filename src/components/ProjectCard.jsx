function ProjectCard({title, stayus,description}) {
    return (
        <div>
            <h3>{title}</h3>
            <span>{status}</span>
            <p>{description}</p>
            <button>View Project</button>
            <button>View Code</button>
        </div>
    )
}
export default ProjectCard