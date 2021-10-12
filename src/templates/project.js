/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

import Layout from '../new-components/Layout'
import Seo from '../new-components/Seo'

import * as styles from '../styles/project.module.css'

export const query = graphql`
  query ($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      id
      slug
    }
  }
`

const Project = (props) => {
  return (
    <Layout>
      <Seo title={props.data.contentfulBlogPost.title} />
      <article className={styles.content}>
        <h2>{props.data.contentfulProject.title}</h2>
      </article>
    </Layout>
  )
}

export default Project
