import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav id='main-menu' aria-label="Main navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Recipes">Recipes</NavLink></li>
                <li><NavLink to="/Books">Books</NavLink></li>
            </ul>
        </nav>
    )
};