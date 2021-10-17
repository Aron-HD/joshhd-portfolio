/** @jsx jsx */
import { jsx, Heading, Text } from 'theme-ui'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

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
    }
  }
`
const Project = (props) => {
  const bodyRichText = props.data.contentfulProject.body

  const Bold = ({ children }) => <b>{children}</b>

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text as="p">{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading as="h1">{children}</Heading>
      ),
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
  }

  return (
    <LayoutAlt>
      <Seo title={props.data.contentfulProject.title} />
      <article className={styles.content}>
        <section
        /* className={styles.title} */
        >
          <Heading as="h1" variant="styles.H1">
            {props.data.contentfulProject.title}
          </Heading>
        </section>
        <section className={styles.body}>
          {bodyRichText && renderRichText(bodyRichText, options)}
        </section>
      </article>
    </LayoutAlt>
  )
}

export default Project
