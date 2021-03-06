import Aws from './aws'
import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <Aws certifications={props.aws} />
    <p>
      <a
        href="https://github.com/chearmstrong/www.chearmstrong.com"
        title="GitHub"
      >
        <i className="fa fa-github" /> View source on GitHub
      </a>
    </p>
    <p>
      <span className="copyright">
        &copy; {new Date().getFullYear()} {props.name}
      </span>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
  name: PropTypes.string,
  aws: PropTypes.array
}

export default Footer
