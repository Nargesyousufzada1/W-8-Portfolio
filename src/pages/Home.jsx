import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 className="text-3xl text-green-500">Tailwind Works</h1>
            <Link to="/projects/1">Project 1</Link>
            <br />
            <Link to ="/projects/2">Project 2</Link>
            <br />
            <Link to ="/projects/3">Project 3</Link>

        </div>
    );
}
export default Home