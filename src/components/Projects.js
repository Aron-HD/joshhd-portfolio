/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as styles from '../styles/projects.module.scss'

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulProject {
          edges {
            node {
              title
              id
              slug
            }
          }
        }
      }
    `
  )
  return (
    <section className={styles.projectCards}>
      {data.allContentfulProject.edges.map((edge) => {
        return (
          <div
            className={styles.projectCard}
            key={edge.node.title.toLowerCase()}
          >
            <Link to={`/projects/${edge.node.slug}/`}>
              {edge.node.title}
              {/* {edge.node.heroImage && (
                  <GatsbyImage
                    className={styles}
                    image={getImage(edge.node.heroImage)}
                    alt={edge.node.title}
                  />
                )} */}
            </Link>
          </div>
        )
      })}
    </section>
  )
}

export default Projects
