import React from 'react'
import PropTypes from 'prop-types'

const SocialIcons = (props) => {
  const icons = props.socialSites.map(item => (
    <li key={`social-${item.id}`}><a href={item.url} className={item.icon}><span className="label">{item.name}</span></a></li>
  ))

  return (<ul className="icons">{icons}</ul>)
}

SocialIcons.propTypes = {
  socialSites: PropTypes.array
}

export default SocialIcons
