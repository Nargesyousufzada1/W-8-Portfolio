import React from 'react'
import { useParams } from "react-router-dom"

function StudentsDetails() {
    const { id } = useParams();

    return (
        <div>
            <h2>Student ID: {id}</h2>
            {id === "1" && <ul>
                <li>Hamasa Neyazi</li>
                <li>Project Name: Movie Web-page</li>
                <li>Objective: Using Flexbox</li>
                <li>Description: This code helped me practice new styles in CSS.</li>
                </ul>}
            {id === "2" && <ul>
                <li>Hadia Saheel</li>
                <li>Project Name: My-Profile</li>
                <li>Objective: Using Tags of HTML</li>
                <li>Description: This code helped me practice different tags in HTML.</li>
                </ul>}
            {id === "3" && <ul>
                <li>Zhara Hasib</li>
                <li>Project Name: Book-Competion Web-page</li>
                <li>Objective: Using Javascript</li>
                <li>Description: This code helped me practice functions and if condition in Javascrpt.</li>
                </ul>}    
        </div>
    );
}

export default StudentsDetails;