import * as R from 'ramda'

const mapMovieCriticData = R.compose(
  R.applySpec({
    id: R.prop('id'),
    title: R.prop('title'),
    description: R.path(['description', 'description'])
  }),
  R.path(['data', 'allContentfulMovieCritic', 'edges', 0, 'node'])
)

export default mapMovieCriticData
