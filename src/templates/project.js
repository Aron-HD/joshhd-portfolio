/** @jsx jsx */
import { jsx, Heading, Text, useColorMode } from 'theme-ui'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useEffect } from 'react'

import LayoutAlt from '../components/LayoutAlt'
import Seo from '../components/Seo'

import * as styles from '../styles/project.module.scss'

export const query = graphql`
  query MyQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      theme
      body {
        raw
      }
      backgroundImage {
        gatsbyImageData(
          formats: AUTO
          layout: CONSTRAINED
          placeholder: BLURRED
        )
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
  const backgroundImage = props.data.contentfulProject.backgroundImage
  const linkedAssets = props.data.contentfulProject.mediaAssets

  const Bold = ({ children }) => <b>{children}</b>

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => <Text as="p">{children}</Text>,
      [BLOCKS.HEADING_1]: (_node, children) => (
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

  const theme = props.data.contentfulProject.theme
  const [, setColorMode] = useColorMode()

  useEffect(() => {
    // set page based color mode from cms
    if (theme) {
      console.debug(`setting color mode: ${theme}`)
      setColorMode(theme.toLowerCase())
    }
    // reset to the original color mode when unmounting
    return () => {
      console.debug('resetting color mode.')
      const original = localStorage.getItem('theme')
      if (original) setColorMode(original.toLowerCase())
    }
  }, [theme, setColorMode])

  return (
    <LayoutAlt>
      <Seo title={projTitle} />
      {backgroundImage && (
        <GatsbyImage
          className={styles.backgroundImage}
          image={getImage(backgroundImage)}
          alt={backgroundImage.description ?? "Background image"}
        />
      )}
      <section className={styles.title}>
        <Heading as="h1" variant="styles.H1">
          {projTitle}
        </Heading>
      </section>
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
              frameBorder="0"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowFullScreen=""
            />
          </section>
        )}
        <section className={styles.body}>
          {bodyRichText && renderRichText(bodyRichText, options)}
        </section>
        {linkedAssets && (
          <section className={styles.linkedAssets}>
            {linkedAssets.map((asset, i) => {
              return (
                <GatsbyImage
                  className={styles.asset}
                  image={getImage(asset)}
                  alt={asset.description ?? "Blank"}
                  key={i}
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
