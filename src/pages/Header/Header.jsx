import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styles
function Header() {
  return (
    <>
    <header className="header">
        <nav className="header-nav">
            <ul className="nav-list">
            <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li id='team-link' className="nav-item">
                <Link to="/team" className="nav-link">Team</Link>
            </li>
            </ul>
        </nav>

    </header>

    </>

  );
}
export default Header;