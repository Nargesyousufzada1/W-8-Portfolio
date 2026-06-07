import React from "react"
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <Link to="/social/1">Contact 1</Link>
            <br />
            <Link to="/social/2">Contact 2</Link>
            <br />
            <Link to="/social/3">Contact 3</Link>
        </div>
    );
}

export default Contact;