import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Button } from 'theme-ui'

import Seo from './Seo'
import Footer from './Footer'
import ContactInfo from './ContactInfo'

import '../styles/global.scss'

const StyledHeader = styled.header`
  padding: 1rem;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  /* width: 100vw; */
  display: flex;
  .containerLeft {
    flex: 1;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: flex-start;
  }
  .containerRight {
    flex: 1;
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: flex-end;
  }
`

const LayoutAlt = ({ children }) => {
  return (
    <>
      <Seo />
      <StyledHeader>
        <div className="containerLeft">
          <ContactInfo />
        </div>
        <div className="containerRight">
          <Link to="/">
            <Button variant="secondary">Return</Button>
          </Link>
        </div>
      </StyledHeader>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutAlt
