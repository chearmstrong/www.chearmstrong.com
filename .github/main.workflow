workflow "Deploy on Push" {
  on = "push"
  resolves = [
    "Push: Install",
    "Push: Filter",
    "Push: Deploy to S3"
  ]
}

action "Push: Filter" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "Push: Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
  needs = ["Push: Filter"]
}

action "Push: Build" {
  uses = "nuxt/actions-yarn@master"
  args = "build"
  needs = ["Push: Install"]
  secrets = ["CONTENTFUL_SPACE", "CONTENTFUL_TOKEN"]
}

action "Push: Deploy to S3" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["Push: Build"]
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
  args = "s3 sync public/ s3://www.chearmstrong.com --delete"
}

workflow "Deploy on Content Change" {
  on = "repository_dispatch"
  resolves = [
    "Change: Install",
    "Change: Filter",
    "Change: Deploy to S3"
  ]
}

action "Change: Filter" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  args = "branch master"
}

action "Change: Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
  needs = ["Change: Filter"]
}

action "Change: Build" {
  uses = "nuxt/actions-yarn@master"
  args = "build"
  needs = ["Change: Install"]
  secrets = ["CONTENTFUL_SPACE", "CONTENTFUL_TOKEN"]
}

action "Change: Deploy to S3" {
  uses = "actions/aws/cli@efb074ae4510f2d12c7801e4461b65bf5e8317e6"
  needs = ["Change: Build"]
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
  args = "s3 sync public/ s3://www.chearmstrong.com --delete"
}
