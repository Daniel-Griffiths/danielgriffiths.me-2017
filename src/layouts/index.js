import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './../assets/stylus/app.styl'

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

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Daniel Griffiths | Web Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="hero"></div>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
