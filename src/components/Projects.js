/** @jsx jsx */
import { jsx, Card, Heading } from 'theme-ui'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from '../styles/projects.module.scss'

const Projects = () => {
    const data = useStaticQuery(
        graphql`
      query {
        allContentfulProject {
          edges {
            node {
              title
              slug
              cardThumbnail {
                gatsbyImageData(
                  formats: AUTO
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  quality: 80
                  width: 600
                )
              }
            }
          }
        }
      }
    `
    )
    return (
        <section className={styles.projects}>
            <Heading as="h3" variant="caps">
                selected projects
            </Heading>
            <div className={styles.projectCards}>
                {data.allContentfulProject.edges.map((edge) => {
                    return (
                        <Card
                            variant="compact"
                            className={styles.projectCard}
                            key={edge.node.slug}
                        >
                            <Link to={`/projects/${edge.node.slug}/`}>
                                <Heading as="h4" variant="styles.H4">
                                    {edge.node.title}
                                </Heading>
                                {edge.node.cardThumbnail && (
                                    <GatsbyImage
                                        className={styles.thumbnail}
                                        image={getImage(edge.node.cardThumbnail)}
                                        alt={edge.node.title}
                                    />
                                )}
                            </Link>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
