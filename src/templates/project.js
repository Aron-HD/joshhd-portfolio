/** @jsx jsx */
import { jsx, Heading, Text } from 'theme-ui'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import LayoutAlt from '../components/LayoutAlt'
import Seo from '../components/Seo'

import * as styles from '../styles/project.module.scss'

export const query = graphql`
  query MyQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      body {
        raw
      }
      heroImage {
        gatsbyImageData(
          formats: AUTO
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
      heroVideo
      mediaAssets {
        description
        gatsbyImageData(
          formats: AUTO
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
    }
  }
`
const Project = (props) => {
  const projTitle = props.data.contentfulProject.title
  const bodyRichText = props.data.contentfulProject.body
  const heroImage = props.data.contentfulProject.heroImage
  const heroVideo = props.data.contentfulProject.heroVideo
  const backgroundImage = props.data.contentfulProject.heroImage // change to backgroundImage
  const linkedAssets = props.data.contentfulProject.mediaAssets

  const Bold = ({ children }) => <b>{children}</b>

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text as="p">{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading as="h1">{children}</Heading>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        if (node) {
          console.log(node.data)
        }
        // return (
        //   <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
        // )
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
  }

  return (
    <LayoutAlt>
      <Seo title={projTitle} />
      <section className={styles.title}>
        <Heading as="h1" variant="styles.H1">
          {projTitle}
        </Heading>
      </section>
      {backgroundImage && (
        // use gatsby-background-image plugin
        <section
          className={styles.backgroundImage}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <article className={styles.content}>
        {heroImage && (
          <section className={styles.heroImageSection}>
            <GatsbyImage
              className={styles.heroImage}
              image={getImage(heroImage)}
              alt={`${projTitle} hero image`}
            />
          </section>
        )}
        {heroVideo && (
          <section className={styles.heroVideoSection}>
            <iframe
              className={styles.heroVideo}
              title={`${projTitle} hero video`}
              src={heroVideo}
              width="800px"
              height="450px"
              frameborder="0"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowfullscreen=""
            />
          </section>
        )}
        <section className={styles.body}>
          {bodyRichText && renderRichText(bodyRichText, options)}
        </section>
        {linkedAssets && (
          <section className={styles.linkedAssets}>
            {linkedAssets.map((asset) => {
              return (
                <GatsbyImage
                  className={styles.asset}
                  image={getImage(asset)}
                  alt={asset.description}
                />
              )
            })}
          </section>
        )}
      </article>
    </LayoutAlt>
  )
}

export default Project
