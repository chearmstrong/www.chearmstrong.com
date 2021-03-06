import Map from './map'
import React from 'react'
import config from '../config'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'
import BulletList from './bullet-list'
import SocialIcons from './social-icons'
import ProjectList from './project-list'
import * as aboutMeImg from '../images/blake-connally-373084-unsplash.jpg'
import * as projectsImg from '../images/piotr-cichosz-414544-unsplash.jpg'

// MAIN
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about-me"
          className={`${this.props.article === 'about-me' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={aboutMeImg} alt="" />
          </span>
          <Markdown>{this.props.aboutMe.description}</Markdown>
          <h3>My skills</h3>
          <BulletList listItems={this.props.aboutMe.skills} listName="skills" />
          {close}
          <h3>Current location</h3>
          <Map {...this.props.aboutMe.currentLocation} />
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Recent Projects</h2>
          <span className="image main">
            <img src={projectsImg} alt="" />
          </span>
          <ProjectList projects={this.props.projects} />
          <p>More projects coming soon...</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action={config.contact.FORM_ENDPOINT}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <SocialIcons socialSites={this.props.socials} />
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  aboutMe: PropTypes.object,
  socials: PropTypes.array
}

export default Main
