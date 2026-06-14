import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function Home({ onGetStarted }) {
    return(
    <section className="min-h-screen  bg-black
    text-white flex items-center justify-between px-20">
        <div className="max-w-xl">
        <div className="w-fit overflow-hidden whitespace-nowrap border-r-4 border-white
        animate-typing animate-blink">
        <h1 className="text-5xl font-bold mb-6">
        Narges Yousufzada
        </h1>
        </div>

        <p className="text-gray-400 leading-relax mb-8">
            I am a frontend developer passionate about building
            clean, modern, and responsive web applications using React.
        </p>
        <button onClick={onGetStarted}
        className="bg-green-500 text-black px-8 py-3 rounded-md
        hover:bg-green-400 transition">
            Get Started
        </button>
        </div>
    </section>
    );
}    



function About() {
   return (
    <section id="about-section" className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-20 py-16">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">
                    About Me
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-8">
                    My absolute core philosophy is writing <span className="text-emerald-400 font-semibold">
                        clean,scalable, and reusable code</span>. I treat frontend engineering like a craft, ensuring 
                        element are modular and easily maintainable.Beyond UI layout design, I also explore basic program 
                        logic using Python. 
                </p>
                <a
                href="/resume.pdf"
                download="/Narges Yousufzada EU CV (1).pdf"
                className="inline-flex items-center gap-2 bg-green-500 text-black px-8 py-3 
                rounded-md font-medium hover:bg-green-400 transition duration-300">
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2,5} stroke="currentColor"
                    className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 
                        21h13.5A2.25 0 0 0 21 18.75V165M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download CV
                </a>
            </div>
            <div className="bg-zinc-900/20 rounded-lg border border-zinc-900 overflow-hidden">
            <table className="w-full text-left border-collapse text-sm">
                <thead>
                    <tr className="border-b border-zinc-900 bg-zinc-900/40text-zinc-300 font-medium">
                    <th className="p-4">Technology</th>
                    <th className="p-4">Focus Area</th>
                    <th className="p-4 text-right">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900/60 text-zinc-400">
                
                <tr className="hover:bg-zinc-900/10 transition-colors">
                <td className="p-4 font-medium text-white">JavaScript</td>
                <td className="p-4">ES6+ logic & async programming</td>
                <td className="p-4 text-right text-white font-medium">Core</td>
                </tr>
                <tr className="hover:bg-zinc-900/10 transition-colors">
                <td className="p-4 font-medium text-white">Tailwind CSS</td>
                <td className="p-4">Utility-first responsive layout</td>
                <td className="p-4 text-right text-white font-medium">Core</td>
                </tr>
                <tr className="hover:bg-zinc-900/10 transition-colors">
                <td className="p-4 font-medium text-white">HTML & CSS</td>
                <td className="p-4">Semantic structure & styling</td>
                <td className="p-4 text-right text-white font-medium">Core</td>
                </tr>
                <tr className="hover:bg-zinc-900/10 transition-colors">
                <td className="p-4 font-medium text-white">Python</td>
                <td className="p-4">Basic scripts logic & algorithms</td>
                <td className="p-4 text-right text-white font-medium">Basic</td>
                </tr>
                </tbody>

            </table>
            </div>
        </div>
    </section>
   )
}
function Projects() {
   return (
    <section className="min-h-screen bg-black text-white px-20 py-16 pt-24">
        <h2 className="text-4xl font-bold mb-12 text-center">
            My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray--700 rounded-xl p-6 hover:border-green-500 transition">
                <h3 className="text-2xl font-semi-bold mb-3">
                    School Portal
                </h3>
                <p className="text-gray-400 mb-4">
                    A web based school portal that manages students information,
                    courses and basic academic data using a clean and simple interface.
                    <a href="https://github.com/Nargesyousufzada1/School-Portal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline">
                        View on Github 
                    </a>
                </p>
            </div>

            <div className="border border-gray--700 rounded-xl p-6 hover:border-green-500 transition">
                <h3 className="text-2xl font-semi-bold mb-3">
                    Movie-Theater-Project
                </h3>
                <p className="text-gray-400 mb-4">
                    A movie theater application that displays movies, showtimes,
                     and basic booking information with responsive layout.
                     </p>
                    <a href="https://github.com/Nargesyousufzada1/Movie-Theater-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline">
                        View on Github 
                    </a>
            </div>

            <div className="border border-gray--700 rounded-xl p-6 hover:border-green-500 transition">
                <h3 className="text-2xl font-semi-bold mb-3">
                    W-8-Portfolio
                </h3>
                <p className="text-gray-400 mb-4">
                    A personal portfolio build with react and tailwind CSS,
                     focus on animation, react router, and context API.
                     </p>
                    <a href="https://github.com/Nargesyousufzada1/W-8-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline">
                        View on Github 
                    </a>
                </div>
            </div>
    </section>
   )
}
function Contact() {
    return (
    <section className="min-h-screen bg-black text-white px-20 py-16 pt-24">
        <h2 className="text-4xl font-bold mb-6 text-center">
            Contact Me
        </h2>
        <p className="text-gray-400 text-center mb-12">
            Feel free to reach out for collaboration, learning opportunities, or any questions.
        </p>
        <div className="max-w-2xl mx-auto">
            <div className="mb-10 space-y-4 text-center">
                <p>
                    Email: {""}
                    <span className="text-green-400">
                         narges.yousofzada1@gmail.com
                    </span>
                </p>
                <p>
                    Github: {""}
                    <a
                    href="https://github.com/Nargesyousufzada1"
                    target="_blank"
                    rel="nopener noreferrer"
                    className="text-green-400 hover:underline">
                        github.com/Nargesyousufzada1
                    </a>
                </p>
                <p>
                    Location: Afghanistan 
                </p>
            </div>
            <form className="space-y-6">
                <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-900
                text-white border border-gray-700 focus:outline-none focus:border-green-500" />
                <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none
                focus:border-green-500" />
                <button 
                type="submit"
                className="w-full bg-green-500 text-black py-3 rounded-md hover:bg-green-400 transition">
                    Send Message
                </button>
            </form>
        </div>
    </section>
    )
}

function App() {
    const [showAbout, setShowAbout] = useState(false);

    const handleGetStareted = () => {
        setShowAbout(true);
    };
    useEffect(() => {
        if (showAbout) {
            const aboutSection = document.getElementById("about-section");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth"});
            }
        }
    }, [showAbout]);
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                    <Home onGetStarted={handleGetStareted} />
                    {showAbout && <About />}
                    </>
                }
             />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );    
}

export default App
           
                