/** @jsx jsx */
import { jsx, Heading, Text, Button } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import ContactInfo from '../components/ContactInfo'

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
    <Layout>
      <Seo title={props.data.contentfulProject.title} />
      <article className={styles.content}>
        <nav className={styles.header}>
          <div className={styles.containerLeft}>
            <ContactInfo />
          </div>
          <div className={styles.containerRight}>
            <Link to="/">
              <Button variant="secondary">Return</Button>
            </Link>
          </div>
        </nav>
        <section className={styles.title}>
          <Heading as="h1" variant="styles.H1">
            {props.data.contentfulProject.title}
          </Heading>
        </section>
        <section className={styles.body}>
          {bodyRichText && renderRichText(bodyRichText, options)}
        </section>
      </article>
    </Layout>
  )
}

export default Project
