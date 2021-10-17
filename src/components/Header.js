import React from 'react'
// import { Text } from 'theme-ui'
import styled from '@emotion/styled'

import Navigation from './Navigation'
import ThemeSwitch from './ThemeSwitcher'

const StyledHeader = styled.header`
  display: flex;
  padding: 1rem;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  width: 100vw;
  .left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
  .right {
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }
`

const Header = () => (
  <StyledHeader>
    <div className="left">
      <ThemeSwitch />
    </div>
    <div className="right">
      {/* <NavBurger /> */}
      <Navigation />
    </div>
  </StyledHeader>
)

export default Header
