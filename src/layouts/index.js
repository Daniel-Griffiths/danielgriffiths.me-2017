import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from './components/Header'
import Footer from './components/Footer'
import Normalize from 'normalize.css';
import Favicon from './../assets/img/favicon.ico'
import './../assets/stylus/app.styl'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Daniel Griffiths | Web Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
        { rel: 'icon', href: Favicon },
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
    <Footer />   
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
