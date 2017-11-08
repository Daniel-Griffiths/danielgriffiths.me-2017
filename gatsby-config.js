module.exports = {
  siteMetadata: {
    title: `Daniel Griffiths | Web Developer`,
  },
  plugins: [
  	`gatsby-plugin-react-helmet`,
  	`gatsby-transformer-remark`,
  	`gatsby-plugin-stylus`,
  	{
  		resolve: `gatsby-source-filesystem`,
  		options: {
  			path: `${__dirname}/src/pages`,
  			name: `pages` 
  		}
  	}
  ],
}
