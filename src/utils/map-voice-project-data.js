import * as R from 'ramda'

const mapMovieCriticData = R.compose(
  R.applySpec({
    id: R.prop('id'),
    title: R.prop('title'),
    description: R.path(['description', 'description']),
    logo: R.path(['logo', 0, 'file', 'url']),
    youTubeId: R.prop('youTubeId')
  }),
  R.path(['data', 'contentfulMovieCritic'])
)

export default mapMovieCriticData
