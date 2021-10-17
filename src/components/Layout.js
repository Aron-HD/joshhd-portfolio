import React from 'react'

import Seo from './Seo'
import Footer from './Footer'
import Header from './Header'

import '../styles/global.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
