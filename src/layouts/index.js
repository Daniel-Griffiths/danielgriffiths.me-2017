import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Normalize from 'normalize.css';
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
      link={[
        { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet' },
        { href: 'https://fonts.googleapis.com/css?family=Lato:100,400', rel: 'stylesheet' },
      ]}
    />
    <Header />
    <div className="hero">
      <div className="container">
        <div id="particles"></div>
        <h1 className="hero__title">A professional<br/>web developer</h1>
      </div>
    </div>
    <main className="main">
      <section>
        <div className="container">
          {children()}
        </div>
      </section>
    </main>
    <footer className="footer"> 
      <div className="container">Hey, you made it to the footer! Congrats.</div>
    </footer>    
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
