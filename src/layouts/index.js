import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './../assets/sass/app.sass'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Example</Link></li>
        <li><Link to="/">Example</Link></li>
        <li><Link to="/">Example</Link></li>
        <li><Link to="/">Example</Link></li>
        <li><Link to="/">Example</Link></li>
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
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
