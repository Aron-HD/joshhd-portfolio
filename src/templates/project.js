/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import * as styles from '../styles/project.module.scss'

export const query = graphql`
  query MyQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      id
    }
  }
`

const Project = (props) => {
  return (
    <Layout>
      <Seo title={props.data.contentfulProject.title} />
      <article className={styles.content}>
        <h2>{props.data.contentfulProject.title}</h2>
      </article>
    </Layout>
  )
}

export default Project
