import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
    return (
        <header id="header">
            <div className="navBar">
                <Link to="/" id='logo'>Cook</Link>
                <Nav />
            </div>
        </header>
    );
};