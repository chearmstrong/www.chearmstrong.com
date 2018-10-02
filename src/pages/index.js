import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { graphql } from 'gatsby'

import * as R from 'ramda'

// HELPERS
const mapAboutMeData = R.applySpec({
  id: R.path(['data', 'allContentfulAboutMe', 'edges', 0, 'node', 'id']),
  name: R.path(['data', 'allContentfulAboutMe', 'edges', 0, 'node', 'name']),
  intro: R.path(['data', 'allContentfulAboutMe', 'edges', 0, 'node', 'intro', 'intro']),
  description: R.path(['data', 'allContentfulAboutMe', 'edges', 0, 'node', 'description', 'description']),
  skills: R.path(['data', 'allContentfulAboutMe', 'edges', 0, 'node', 'skills']),
  currentLocation: R.path(['data', 'allContentfulAboutMe', 'edges', 0, 'node', 'currentLocation'])
})

const mapSocialsData = R.compose(
  R.map(R.applySpec({
    id: R.path(['node', 'id']),
    name: R.path(['node', 'name']),
    url: R.path(['node', 'url']),
    icon: R.path(['node', 'icon'])
  })),
  R.path(['data', 'allContentfulSocials', 'edges'])
)

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      aboutMe: mapAboutMeData(this.props),
      socials: mapSocialsData(this.props)
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
              name={this.state.aboutMe.name}
              intro={this.state.aboutMe.intro}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              aboutMe={this.state.aboutMe}
              socials={this.state.socials}
            />
            <Footer timeout={this.state.timeout} name={this.state.aboutMe.name}/>
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

// PAGE QUERY
export const pageQuery = graphql`
  query Content {
    allContentfulAboutMe {  
      edges {
        node {
          id
          name
          intro { intro }
          description { description }
          skills
          currentLocation {lat lon }
        }
      } 
    }
    allContentfulSocials {
      edges {
          node {
              id
              name
              url
              icon
          }
      }
    }
  }
`
