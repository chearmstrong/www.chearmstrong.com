import React from 'react'
import PropTypes from 'prop-types'

import { aboutMe } from '../data/content'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; {aboutMe.name}</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
