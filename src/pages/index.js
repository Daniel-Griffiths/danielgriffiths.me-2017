import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <article className="article">
  	<header>
  		<h2 className="article__title">Test</h2>
  	</header>
  	<p className="article__summary">test summary...</p>
  	<Link to="/" className="btn btn--primary">Read More</Link>
  </article>
)

export default IndexPage
