require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: "Ché Armstrong - Software Engineer",
    author: "Ché Armstrong",
    description: "JavaScript, Node.js, Alexa, Google Home."
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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-source-medium`,
    //   options: {
    //     username: `@chearmstrong`,
    //     limit: 200,
    //   },
    // },  
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
  ],
}