import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="RIGID Coastal " className="logo-image" />
        <span>RCH COASTAL</span>
      </Link>


      {/* Hamburger button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>

        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar