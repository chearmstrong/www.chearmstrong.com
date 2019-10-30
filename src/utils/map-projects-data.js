import * as R from 'ramda'

const mapProjectsData = R.compose(
  R.map(
    R.applySpec({
      id: R.path(['node', 'id']),
      name: R.path(['node', 'name']),
      url: R.path(['node', 'url']),
      icon: R.path(['node', 'icon']),
      details: R.path(['node', 'details', 'details']),
      technologies: R.path(['node', 'technologies']),
    })
  ),
  R.path(['data', 'allContentfulProjects', 'edges'])
)

export default mapProjectsData
