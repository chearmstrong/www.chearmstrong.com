[![CircleCI](https://circleci.com/gh/chearmstrong/www.chearmstrong.com/tree/master.svg?style=svg)](https://circleci.com/gh/chearmstrong/www.chearmstrong.com/tree/master)

# www.chearmstrong.com 👷

This is the repo for my personal static site, built using [Gatsby.js](https://www.gatsbyjs.org/) and the [Dimension](https://github.com/ChangoMan/gatsby-starter-dimension) starter.

I'm also using [Contentful](https://www.contentful.com/) for my site's content.

This is very much a work in progress - I want to know more about Gatsby, React and CirlcleCI. 🤓

## Developing 💻

Run `yarn develop` in the terminal to start the dev site and browse to `localhost:8000` in your browser.

## Building 📦

Run `yarn build`.

## Deploying 🚀

The site is hosted in AWS S3, and deployed automatically from `master` using [CircleCI](https://circleci.com), or when content is updated on Contentful (triggered by a webhook).

Run `yarn deploy`.
