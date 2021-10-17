import React from 'react'
import { Text } from 'theme-ui'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Projects from '../components/Projects'

import * as styles from '../styles/index.module.scss'

const RootIndex = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <section className={styles.foreword}>
        <Text as="p" variant="large">
          Joshua works in visual communication his digital media skills evolved
          through an immersion in digital culture and Graphic Design.
          <br />
          <br />
          He has a keen interest in science, technology and engineering through
          which he reflects environment and culture.
        </Text>
      </section>
      <Projects />
    </Layout>
  )
}
export default RootIndex
