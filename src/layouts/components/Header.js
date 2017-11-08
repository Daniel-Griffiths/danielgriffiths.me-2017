import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Header = () => (
  <header>
    <nav className="nav">
      <ul className="container nav__inner">
        <li className="nav__item logo">D</li>
        <li className="nav__item">
          <Link to="/" className="nav__link">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">Projects</Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">Games</Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">Music</Link>
        </li>
        <li className="nav__item">
          <Link to="/" className="nav__link">Contact</Link>
        </li>        
      </ul>
    </nav>
  </header>
)

export default Header