const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulProject {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful projects`,
      result.errors
    )
    return
  }

  const projects = result.data.allContentfulProject.edges

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (projects.length > 0) {
    projects.forEach((project, index) => {
      const previousProjectSlug = index === 0 ? null : projects[index - 1].slug
      const nextProjectSlug =
        index === projects.length - 1 ? null : projects[index + 1].slug

      createPage({
        path: `/projects/${project.node.slug}/`,
        component: path.resolve('./src/templates/project.js'),
        context: {
          slug: project.node.slug,
          previousProjectSlug,
          nextProjectSlug,
        },
      })
    })
  }
}
