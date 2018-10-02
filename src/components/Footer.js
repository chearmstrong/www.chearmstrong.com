import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; {props.name}</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool,
    name: PropTypes.string,
}

export default Footer
