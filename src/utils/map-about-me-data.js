import * as R from 'ramda'

const mapAboutMeData = R.compose(
  R.applySpec({
    id: R.prop('id'),
    name: R.prop('name'),
    intro: R.path(['intro', 'intro']),
    description: R.path(['description', 'description']),
    skills: R.prop('skills'),
    currentLocation: R.prop('currentLocation'),
  }),
  R.path(['data', 'allContentfulAboutMe', 'edges', 0, 'node'])
)

export default mapAboutMeData
