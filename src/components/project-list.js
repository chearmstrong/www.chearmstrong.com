import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'
import BulletList from './bullet-list'

const ProjectList = props => {
  const items = props.projects.map(item => {
    return (
      <div key={`project-${item.id}`}>
        <h3>
          <i className={item.icon} /> {item.name}
        </h3>
        <Markdown>{item.details}</Markdown>
        <BulletList
          listItems={item.technologies}
          listName={`project-technologies-${item.id}`}
        />
        <button>
          <a href={item.url} title={item.name}>
            More >>
          </a>
        </button>
        <hr />
      </div>
    )
  })

  return <div>{items}</div>
}

ProjectList.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  details: PropTypes.string,
  technologies: PropTypes.array,
}

export default ProjectList
