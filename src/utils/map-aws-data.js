import * as R from 'ramda'

const mapAwsData = R.compose(
  R.map(R.applySpec({
    id: R.path(['node', 'id']),
    name: R.path(['node', 'name']),
    url: R.path(['node', 'url']),
    badge: R.path(['node', 'badge', 'file', 'url'])
  })),
  R.path(['data', 'allContentfulAws', 'edges'])
)

export default mapAwsData