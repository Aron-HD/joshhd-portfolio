import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Projects from '../components/Projects'

const RootIndex = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Projects />
    </Layout>
  )
}
export default RootIndex
