import React from 'react'
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <Link to="/students/1">Student 1</Link>
            <br />
            <Link to ="/students/2">Student 2</Link>
            <br />
            <Link to ="/students/3">Student 3</Link>

        </div>
    );
}
export default About