const path = require('path')

exports.createPages = ({  graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const voiceProjectsTemplate = path.resolve('src/templates/voiceProjectsTemplate.js')

    resolve(
      graphql(`
      {
        allContentfulMovieCritic (limit: 10) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(result => {
        if (result.errors) reject(result.errors)

        result.data.allContentfulMovieCritic.edges.forEach(edge => {
          createPage ({
            path: edge.node.slug,
            component: voiceProjectsTemplate,
            context: { slug: edge.node.slug }
          })
        })

        return
      })
    )
  })
}
