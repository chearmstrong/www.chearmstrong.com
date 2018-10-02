import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p><a href="https://github.com/chearmstrong/www.chearmstrong.com" title="GitHub"><i className="fa fa-github"></i> View source on GitHub</a></p>
        <p><span className="copyright">&copy; {props.name}</span></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool,
    name: PropTypes.string,
}

export default Footer
