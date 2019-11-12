/**
 * Tried to do this page using a Function Component and React Hooks.
 * The template uses Class Components for other pages - may look to
 * update these in the future. Still a WIP.
 */

import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Markdown from 'markdown-to-jsx'
import Layout from '../components/layout'
import React, { useState, useEffect } from 'react'
import mapAboutMeData from '../utils/map-about-me-data'
import mapMovieCriticData from '../utils/map-movie-critic-data'
import * as movieCriticLogo from '../images/MovieCritic_no_BG.png'

const MovieCriticPage = props => {
  const [loading, setLoading] = useState(true)
  const { name } = mapAboutMeData(props)
  const { title, description } = mapMovieCriticData(props)

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
                  <img src={movieCriticLogo} alt={title} />
                </div>
              </div>
            </header>
            <div
              id="main"
              className="movie-critic"
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
          <div id="bg-movie-critic" />
        </div>
      </Layout>
  )
}

export default MovieCriticPage

// PAGE QUERY
export const pageQuery = graphql`
  query MovieCriticContent {
    allContentfulMovieCritic {
      edges {
        node {
          id
          icon
          title
          description {
            description
          }
        }
      }
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
