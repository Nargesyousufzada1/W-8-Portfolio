import React from 'react'
import { useParams } from "react-router-dom"

function SocialDetails() {
    const { id } = useParams();

    return (
        <div>
            <h2>Student ID: {id}</h2>
            {id === "1" && <ul>
                <li>Hamasa Neyazi</li>
                <li>Email: hamasaNeyazi@gmail.com</li>
                <li>Phone: 0799340989</li>
                <li>Location: Kabul, Afghanistan</li>
                </ul>
            }    
            {id === "2" && <ul>
                <li>Hadia Saheel</li>
                <li>Email: hadiaSaheel@gmail.com</li>
                <li>Phone: 0744323212</li>
                <li>Location: Ghazni, Afghanistan</li>
                </ul>
            }
            {id === "3" && <ul>
                <li>Zhara Hasib</li>
                <li>Email: zahraHasib@gmail.com </li>
                <li>Phone: 0777567890</li>
                <li>Location: Kabul, Afghanistan</li>
                </ul>
            }    
        </div>
    );
}

export default SocialDetails;