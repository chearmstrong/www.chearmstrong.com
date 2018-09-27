import React from 'react'
import PropTypes from 'prop-types'

const BulletList = (props) => {
  const items = props.listItems.map((item, idx) => <li key={`${props.listName}-${idx}`}>{item}</li>)

  return (<ul>{items}</ul>)
}

BulletList.propTypes = {
  listItems: PropTypes.array.isRequired,
  listName: PropTypes.string.isRequired
}

export default BulletList
