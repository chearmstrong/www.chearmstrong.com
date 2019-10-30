import * as R from 'ramda'

const mapSocialsData = R.compose(
  R.map(
    R.applySpec({
      id: R.path(['node', 'id']),
      name: R.path(['node', 'name']),
      url: R.path(['node', 'url']),
      icon: R.path(['node', 'icon'])
    })
  ),
  R.path(['data', 'allContentfulSocials', 'edges'])
)

export default mapSocialsData
