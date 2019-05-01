import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'
import mapAboutMeData from '../utils/map-about-me-data'
import mapSocialsData from '../utils/map-socials-data'
import mapProjectsData from '../utils/map-projects-data'
import mapAwsData from '../utils/map-aws-data'

// MAIN
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
      socials: mapSocialsData(this.props),
      projects: mapProjectsData(this.props),
      aws: mapAwsData(this.props)
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
              projects={this.state.projects}
            />
            <Footer aws={this.state.aws} timeout={this.state.timeout} name={this.state.aboutMe.name}/>
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
        currentLocation { lat lon }
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
  allContentfulProjects {
    edges {
        node {
            id
            name
            url
            icon
            technologies
            details { details }
        }
    }
  }
  allContentfulAws {
    edges {
        node {
            id
            name
            url
            badge { file { url } }
        }
    }
  }
}
`
