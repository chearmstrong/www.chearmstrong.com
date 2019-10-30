import React from 'react'
import PropTypes from 'prop-types'

const Aws = props => {
  const certs = props.certifications.map(item => (
    <li key={`cert-${item.id}`}>
      <a href={item.url} title={item.name}>
        <img className="image cert-badge" src={item.badge} />
      </a>
    </li>
  ))

  return <ul className="certifications">{certs}</ul>
}

Aws.propTypes = {
  certifications: PropTypes.array,
}

export default Aws
