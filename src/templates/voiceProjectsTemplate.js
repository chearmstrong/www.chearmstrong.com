/**
 * Tried to do this page using a Function Component and (basic) React Hooks
 * rather than using a Class like the main index page.
 *
 * This is a template page - pages for each voice project is created programatically.
 *
 * Still a learning curve/WIP.
 */

import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Markdown from 'markdown-to-jsx'
import Layout from '../components/layout'
import React, { useState, useEffect } from 'react'
import mapAboutMeData from '../utils/map-about-me-data'
import mapVoiceProjectData from '../utils/map-voice-project-data'

const VoiceProjectPage = (props) => {
  const [loading, setLoading] = useState(true)
  const { name } = mapAboutMeData(props)
  const { title, description, logo } = mapVoiceProjectData(props)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
      <Layout>
        <Helmet title={title} defer={false} />
        <div className={`body ${loading ? 'is-loading' : ''}`}>
          <div id="wrapper">
            <header id="header">
              <div className="content">
                <div className="inner">
                  <img src={logo} alt={title} />
                </div>
              </div>
            </header>
            <div
              id="main"
              className="voice-project"
              style={!loading ? { display: 'flex' } : { display: 'none' }}
            >
              <div className="content-box">
                <Markdown>{description}</Markdown>
              </div>
            </div>
            <footer id="footer">
              <p>
                <span className="copyright">
                  &copy; {new Date().getFullYear()}{' '}
                  <a href="/" title={name}>
                    {name}
                  </a>
                </span>
              </p>
            </footer>
          </div>
          <div id="bg-voice-project" />
        </div>
      </Layout>
  )
}

export default VoiceProjectPage

// PAGE QUERY
export const pageQuery = graphql`
  query voiceProjectsQuery($slug: String!) {
    contentfulMovieCritic(slug: { eq: $slug }) {
      id
      icon
      title
      description { description }
      logo { file { url } }
      slug
    }
    allContentfulAboutMe {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
