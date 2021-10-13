import React from 'react'

import Seo from './Seo'
import Navigation from './Navigation'
import Footer from './Footer'

import '../styles/global.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
