import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar sticky-top border-0 rounded-0">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">GitHub Finder</Link>
                <div className="d-flex">
                    <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-link text-white border-bottom" : "nav-link text-white"} aria-current="page">Home</NavLink>
                    <NavLink to={"/history"} className={({ isActive }) => isActive ? "nav-link text-white border-bottom" : "nav-link text-white"} aria-current="page">History</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;