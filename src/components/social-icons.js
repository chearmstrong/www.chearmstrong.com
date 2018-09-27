import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const SocialIcons = (props) => {
  const icons = props.socialSites.map((item, idx) => (
    <li key={`social-${idx}`}><Link to={item.url} className={item.icon}><span className="label">{item.name}</span></Link></li>
  ))

  return (<ul className="icons">{icons}</ul>)
}

SocialIcons.propTypes = {
  socialSites: PropTypes.array.isRequired
}

export default SocialIcons
