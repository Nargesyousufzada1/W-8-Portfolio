import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";


function Home({ onGetStarted }) {
    return (
        <section className="min-h-screen bg-black text-white flex items-center justify-start px-6 sm:px-12 md:px-20 pt-20">
            <div className="max-w-xl w-full">
                {/* Responsive CSS typing animation container */}
                <div className="w-fit max-w-full overflow-hidden whitespace-normal sm:whitespace-nowrap border-r-4 border-white animate-typing animate-blink mb-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Narges Yousufzada
                    </h1>
                </div>

                <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
                    I am a frontend developer passionate about building
                    clean, modern, and responsive web applications using React.
                </p>
                <button 
                    onClick={onGetStarted}
                    className="w-full sm:w-auto bg-green-500 text-black px-8 py-3 rounded-md font-medium hover:bg-green-400 transition"
                >
                    Get Started
                </button>
            </div>
        </section>
    );
}    


function About() {
    return (
        <section id="about-section" className="min-h-screen bg-black text-white flex items-center justify-center px-6 sm:px-12 md:px-20 py-20 pt-24">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                        About Me
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mb-8 text-sm sm:text-base">
                        My absolute core philosophy is writing <span className="text-emerald-400 font-semibold">
                        clean, scalable, and reusable code</span>. I treat frontend engineering like a craft, ensuring 
                        elements are modular and easily maintainable. Beyond UI layout design, I also explore basic program 
                        logic using Python. 
                    </p>
                    <a
                        href="/resume.pdf"
                        download="Narges_Yousufzada_CV.pdf"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-green-500 text-black px-8 py-3 rounded-md font-medium hover:bg-green-400 transition duration-300"
                    >
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Download CV
                    </a>
                </div>

                
                <div className="bg-zinc-900/20 rounded-lg border border-zinc-800 overflow-x-auto w-full">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[400px] md:min-w-0">
                        <thead>
                            <tr className="border-b border-zinc-800 bg-zinc-900/40 text-zinc-300 font-medium">
                                <th className="p-4">Technology</th>
                                <th className="p-4">Focus Area</th>
                                <th className="p-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/60 text-zinc-400">
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
    );
}

function Projects() {
    const projectList = [
        {
            title: "School Portal",
            desc: "A web based school portal that manages students information, courses and basic academic data using a clean and simple interface.",
            link: "https://github.com"
        },
        {
            title: "Movie-Theater-Project",
            desc: "A movie theater application that displays movies, showtimes, and basic booking information with responsive layout.",
            link: "https://github.com"
        },
        {
            title: "W-8-Portfolio",
            desc: "A personal portfolio built with React and Tailwind CSS, focusing on animation, React Router, and Context API.",
            link: "https://github.com"
        }
    ];

    return (
        <section className="min-h-screen bg-black text-white px-6 sm:px-12 md:px-20 py-20 pt-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <div key={index} className="border border-zinc-800 rounded-xl p-6 hover:border-green-500 transition flex flex-col justify-between bg-zinc-900/10">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-400 hover:underline inline-flex items-center gap-1 font-medium mt-auto text-sm sm:text-base"
                            >
                                View on GitHub &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact() {
   
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!email.trim() || !message.trim()) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        
        setEmail("");
        setMessage("");

        
        setIsSubmitted(true);

        
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <section className="min-h-screen bg-black text-white px-6 sm:px-12 md:px-20 py-20 pt-24">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                    Contact Me
                </h2>
                <p className="text-gray-400 text-center mb-12 text-sm sm:text-base">
                    Feel free to reach out for collaboration, learning opportunities, or any questions.
                </p>
                
                <div className="mb-10 space-y-4 text-center text-sm sm:text-base break-words">
                    <p>
                        Email:{" "}
                        <span className="text-green-400 block sm:inline">
                            narges.yousofzada1@gmail.com
                        </span>
                    </p>
                    <p>
                        GitHub:{" "}
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:underline block sm:inline"
                        >
                            ://github.com
                        </a>
                    </p>
                    <p>
                        Location: Afghanistan 
                    </p>
                </div>

                
                {isSubmitted && (
                    <div className="mb-6 p-4 rounded-md bg-green-500/10 border border-green-500 text-green-400 text-center text-sm sm:text-base animate-pulse">
                        Success! Your response has been received. Thank you!
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded-md bg-zinc-900 text-white border border-zinc-800 focus:outline-none focus:border-green-500 text-sm sm:text-base" 
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 rounded-md bg-zinc-900 text-white border border-zinc-800 focus:outline-none focus:border-green-500 text-sm sm:text-base" 
                        required
                    />
                    <button 
                        type="submit"
                        className="w-full bg-green-500 text-black py-3 rounded-md font-medium hover:bg-green-400 transition text-sm sm:text-base"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

function App() {
    const [showAbout, setShowAbout] = useState(false);

    const handleGetStarted = () => {
        setShowAbout(true);
    };

    useEffect(() => {
        if (showAbout) {
            const aboutSection = document.getElementById("about-section");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [showAbout]);

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Home onGetStarted={handleGetStarted} />
                        {showAbout && <About />}
                    </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );    
}

export default App;
