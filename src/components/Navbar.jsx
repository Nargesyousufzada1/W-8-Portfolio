import { NavLink } from "react-router-dom"
import "./Navbar.css";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <nav className="navbar">
            <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </div>
            <button onClick={toggleTheme} className="theme-btn">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>

    );
}
export default Navbar