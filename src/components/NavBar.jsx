import { NavLink } from "react-router-dom";
import "../assets/styles/NavBar.css";
import logo from "../assets/images/netflix-logo-96.png"; 

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/" className="nav-link logo">
                    <img src={logo} alt="Logo" width="80" height="50" />
                </NavLink>
            </div>
            <div className="navbar-links">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/favorites" 
                    className={({ isActive }) => 
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Favorites
                </NavLink>
                <NavLink
                    to="/socials"
                    className={({ isActive}) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    Subscribe
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
