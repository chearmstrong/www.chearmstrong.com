require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Ché Armstrong - Software Engineer',
    author: 'Ché Armstrong',
    description: 'Software Engineer, JavaScript, Node.js, Alexa, Bixby, Google Home, Movie Critic, Voice First.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-126799088-1',
        head: false,
        anonymize: true, // @NOTE enabled for GDPR
        respectDNT: true,
        exclude: [],
        cookieDomain: 'chearmstrong.com'
      }
    }
  ]
}
