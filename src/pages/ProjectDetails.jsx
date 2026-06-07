import React from 'react'
import { useParams } from "react-router-dom"

function ProjectDetails() {
    const { id } = useParams();

    return (
        <div>
            <h2>Project ID: {id}</h2>
            {id === "1" && <p>This is project number one</p>}
            {id === "2" && <p>This is project number two</p>}
            {id === "3" && <p>This is project number three</p>}
        </div>
    );
}

export default ProjectDetails;