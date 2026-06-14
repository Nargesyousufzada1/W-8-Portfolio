import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md 
        flex justify-between items-center px-16 py-6">
            <h2 className="text-white text-xl font-semibold justify-center">
                My Portfolio
            </h2>

            <ul className="flex gap-8 py-3 text-gray-300">
                <li>
                    <Link to="/" className="hover:text-green-400">
                    Home
                    </Link>   
                </li>
                <li>
                    <Link to="/about" className="hover:text-green-400">
                    About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="hover:text-green-400">
                    Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-green-400">
                    Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

