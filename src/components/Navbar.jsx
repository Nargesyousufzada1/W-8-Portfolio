import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 md:px-16 py-4 md:py-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
               
                <h2 className="text-white text-xl font-semibold">
                    My Portfolio
                </h2>

                
                <ul className="hidden md:flex gap-8 py-3 text-gray-300">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link to={link.path} className="hover:text-green-400 transition-colors">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

               
                <button 
                    onClick={toggleMenu}
                    className="md:hidden text-gray-300 hover:text-white focus:outline-none z-50"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

               
                <div className={`fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 text-xl text-gray-300 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.path}
                            to={link.path} 
                            onClick={toggleMenu} 
                            className="hover:text-green-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
