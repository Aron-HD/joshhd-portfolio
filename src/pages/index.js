import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Projects from '../components/Projects'
import ThemeSwitcher from '../components/ThemeSwitcher'

const RootIndex = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <ThemeSwitcher />
      <Projects />
    </Layout>
  )
}
export default RootIndex
